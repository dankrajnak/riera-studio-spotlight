import {
  Exhibition,
  GetTitleDocument,
  GetTitleQuery,
} from "../generated/graphql";
import cms from "../Lib/cms";
import { PrismicRageExhibition } from "./shared";

const indexQuery = async (): Promise<{
  activeExhibitions: PrismicRageExhibition[];
  oldExhibitions: PrismicRageExhibition[];
}> => {
  const resp = await cms.query<GetTitleQuery>({ query: GetTitleDocument });
  const exhibitions = resp.data.allHomepages.edges?.map((edge) => ({
    activeExhibitions: edge.node.active_exhibitions
      ?.map((someShit) => someShit.exhibition)
      .filter((thing) => thing.__typename === "Exhibition"),
    oldExhibitions: edge.node.active_exhibitions
      ?.map((someShit) => someShit.exhibition)
      .filter((thing) => thing.__typename === "Exhibition"),
  }))[0];

  return exhibitions;
};
