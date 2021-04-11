import { GetTitleDocument, GetTitleQuery } from "../generated/graphql";
import cms from "../Lib/cms";
import { getPrismicRageImage, PrismicRageImage } from "./shared";

type ExhibitionType = GetTitleQuery["allHomepages"]["edges"][0]["node"]["active_exhibitions"][0]["exhibition"];

const indexQuery = async (): Promise<{
  images: PrismicRageImage[];
  activeExhibitions: ExhibitionType[];
  oldExhibitions: ExhibitionType[];
}> => {
  const resp = await cms.query<GetTitleQuery>({ query: GetTitleDocument });
  const exhibitions = resp.data.allHomepages.edges?.map((edge) => ({
    images: edge.node.images.map(({ image }) => getPrismicRageImage(image)),
    activeExhibitions: edge.node.active_exhibitions?.map(
      (someShit) => someShit.exhibition
    ),
    oldExhibitions: edge.node.active_exhibitions?.map(
      (someShit) => someShit.exhibition
    ),
  }))[0];

  return exhibitions;
};

export default indexQuery;
