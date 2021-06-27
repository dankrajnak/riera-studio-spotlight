import { MenuDocument, MenuQuery } from "../generated/graphql";
import cms from "../Lib/cms";
import { getPrismicRageImageWithPlaceholder } from "./placeholder";
import { PrismicRageImageWithBlur } from "./shared";

const getMenu = async (): Promise<
  { title: string; image: PrismicRageImageWithBlur; slug: string }[]
> => {
  const resp = await cms.query<MenuQuery>({ query: MenuDocument });
  const exhibitions = resp.data.allHomepages.edges?.map((edge) => ({
    activeExhibitions: edge.node.active_exhibitions?.map(
      (someShit) => someShit.exhibition
    ),
  }))[0];

  return Promise.all(
    exhibitions.activeExhibitions
      .map(
        async (e) =>
          e.__typename === "Exhibition" && {
            title: e.title,
            image: await getPrismicRageImageWithPlaceholder(e.main_image),
            slug: e._meta.uid,
          }
      )
      .filter((e) => e)
  );
};

export default getMenu;
