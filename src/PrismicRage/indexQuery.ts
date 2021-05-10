import { GetTitleDocument, GetTitleQuery } from "../generated/graphql";
import cms from "../Lib/cms";

type ExhibitionType = GetTitleQuery["allHomepages"]["edges"][0]["node"]["active_exhibitions"][0]["exhibition"];

const indexQuery = async (): Promise<{
  activeExhibitions: ExhibitionType[];
}> => {
  const resp = await cms.query<GetTitleQuery>({ query: GetTitleDocument });
  const exhibitions = resp.data.allHomepages.edges?.map((edge) => ({
    activeExhibitions: edge.node.active_exhibitions?.map(
      (someShit) => someShit.exhibition
    ),
  }))[0];

  return exhibitions;
};

export default indexQuery;
