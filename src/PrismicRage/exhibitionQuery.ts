import {
  GetExhibitionQuery,
  AllExhibitionIdsQuery,
  AllExhibitionIdsDocument,
  GetExhibitionQueryVariables,
  GetExhibitionDocument,
} from "../generated/graphql";
import cms from "../Lib/cms";
import {
  getPrismicRageImageWithPlaceholder,
  PrismicRageImageWithBlur,
} from "./placeholder";

type ExhibitionType = GetExhibitionQuery["exhibition"] & {
  main_image: PrismicRageImageWithBlur;
};

const exhibitionQuery = async (uid: string): Promise<ExhibitionType> => {
  const resp = await cms.query<GetExhibitionQuery, GetExhibitionQueryVariables>(
    { query: GetExhibitionDocument, variables: { uid } }
  );

  const exhibitions = resp.data.exhibition;

  return {
    ...exhibitions,
    main_image: await getPrismicRageImageWithPlaceholder(
      exhibitions.main_image
    ),
  };
};

export const allExhibitionIdsQuery = async (): Promise<string[]> => {
  const resp = await cms.query<AllExhibitionIdsQuery>({
    query: AllExhibitionIdsDocument,
  });
  return resp.data.allExhibitions.edges.map((edge) => edge.node._meta.uid);
};

export default exhibitionQuery;
