import { FooterDocument, FooterQuery } from "../generated/graphql";
import cms from "../Lib/cms";

export const footerQuery = async (): Promise<
  { title: string; id: string }[]
> => {
  const resp = await cms.query<FooterQuery>({
    query: FooterDocument,
  });
  return resp.data.allExhibitions.edges.map((edge) => ({
    id: edge.node._meta.uid,
    title: edge.node.title,
  }));
};
