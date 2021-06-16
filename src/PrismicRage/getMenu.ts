import { MenuDocument, MenuQuery } from "../generated/graphql";
import cms from "../Lib/cms";
import { getPrismicRageImage } from "./shared";

const getMenu = async (): Promise<
  { title: string; image: string; slug: string }[]
> => {
  const resp = await cms.query<MenuQuery>({ query: MenuDocument });
  const exhibitions = resp.data.allHomepages.edges?.map((edge) => ({
    activeExhibitions: edge.node.active_exhibitions?.map(
      (someShit) => someShit.exhibition
    ),
  }))[0];

  return exhibitions.activeExhibitions
    .map(
      (e) =>
        e.__typename === "Exhibition" && {
          title: e.title,
          image: getPrismicRageImage(e.main_image).url,
          slug: e._meta.uid,
        }
    )
    .filter((e) => e);
};

export default getMenu;
