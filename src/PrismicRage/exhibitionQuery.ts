import {
  GetExhibitionQuery,
  AllExhibitionIdsQuery,
  AllExhibitionIdsDocument,
  GetExhibitionQueryVariables,
  GetExhibitionDocument,
} from "../generated/graphql";
import cms, { withPreview } from "../Lib/cms";
import { getPrismicRageImage } from "./shared";
import {
  getPrismicRageImageWithPlaceholder,
  ImageWithBlur,
} from "./placeholder";

type GalleryImage = { image: ImageWithBlur; title: string };

type ExhibitionType = Omit<
  GetExhibitionQuery["exhibition"] & {
    main_image: PrismicRageImage;
    galleryImages: GalleryImage[];
  },
  "body1"
>;

const exhibitionQuery = async (
  uid: string,
  previewRef?: unknown
): Promise<ExhibitionType> => {
  const resp = await cms.query<GetExhibitionQuery, GetExhibitionQueryVariables>(
    withPreview(
      {
        query: GetExhibitionDocument,
        variables: { uid },
      },
      previewRef
    )
  );

  const { body1, ...exhibitions } = resp.data.exhibition;

  const getGalleryImages = (): Promise<GalleryImage[]> => {
    return Promise.all(
      (body1 || []).map(async ({ primary }) => ({
        image: await getPrismicRageImageWithPlaceholder(primary.image, 590),
        title: primary.work_title,
      }))
    );
  };
  return {
    ...exhibitions,
    body: await Promise.all(
      exhibitions.body.map(async (el) => {
        switch (el.__typename) {
          case "ExhibitionBodyImage":
            return {
              ...el,
              primary: {
                ...el.primary,
                image: await getPrismicRageImageWithPlaceholder(
                  el.primary.image
                ),
              },
            };
          default:
            return el;
        }
      })
    ),
    main_image: await getPrismicRageImage(exhibitions.main_image),
    galleryImages: await getGalleryImages(),
  };
};

export const allExhibitionIdsQuery = async (): Promise<string[]> => {
  const resp = await cms.query<AllExhibitionIdsQuery>({
    query: AllExhibitionIdsDocument,
  });
  return resp.data.allExhibitions.edges.map((edge) => edge.node._meta.uid);
};

export default exhibitionQuery;
