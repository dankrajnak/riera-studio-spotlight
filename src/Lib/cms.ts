import { PrismicLink } from "apollo-link-prismic";
import Prismic from "@prismicio/client";
import { ApolloClient, InMemoryCache, QueryOptions } from "@apollo/client";
import { ApiOptions } from "@prismicio/client/types/Api";
import { DefaultClient } from "@prismicio/client/types/client";
import { LinkResolver } from "prismic-reactjs";

export const PrismicClient = (req: ApiOptions["req"]): DefaultClient =>
  Prismic.client("https://riera-studio-spotlight.cdn.prismic.io/api/v2", {
    req,
  });

export const linkResolver: LinkResolver = (doc): string => {
  if (doc.type === "exhibition") {
    return "/exhibition/" + doc.uid;
  }
  return "/";
};

export const withPreview = <TVariables = any, TData = any>(
  options: QueryOptions<TData, TVariables>,
  prismicPreviewRef: unknown
): QueryOptions<TData, TVariables> => {
  if (!prismicPreviewRef || typeof prismicPreviewRef !== "string") {
    return options;
  }
  return {
    ...options,
    context: {
      ...options?.context,
      headers: {
        ...options?.context?.headers,
        "Prismic-ref": prismicPreviewRef,
      },
    },
  };
};

const cms = new ApolloClient({
  link: PrismicLink({
    uri: "https://riera-studio-spotlight.prismic.io/graphql",
  }),
  cache: new InMemoryCache(),
});

export default cms;
