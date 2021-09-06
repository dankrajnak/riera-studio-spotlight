import {
  GetExhibitionQuery,
  AllExhibitionIdsQuery,
  AllExhibitionIdsDocument,
  GetExhibitionQueryVariables,
  GetExhibitionDocument,
} from "../generated/graphql";
import cms, { withPreview } from "../Lib/cms";
import {
  getPrismicRageImageWithPlaceholder,
  PrismicRageImageWithBlur,
} from "./placeholder";

type GalleryImage = { image: PrismicRageImageWithBlur; title: string };

type ExhibitionType = Omit<
  GetExhibitionQuery["exhibition"] & {
    main_image: PrismicRageImageWithBlur;
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
      (resp.data.exhibition.body1 || []).map(async ({ primary }) => ({
        image: await getPrismicRageImageWithPlaceholder(primary.image),
        title: primary.work_title,
      }))
    );
  };

  return {
    ...exhibitions,
    main_image: await getPrismicRageImageWithPlaceholder(
      exhibitions.main_image
    ),
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
