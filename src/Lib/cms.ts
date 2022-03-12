import { createPrismicLink } from "apollo-link-prismic";
import * as prismic from "@prismicio/client";
import { ApolloClient, InMemoryCache, QueryOptions } from "@apollo/client";
import * as prismicH from "@prismicio/helpers";

import { enableAutoPreviews } from "@prismicio/next";
import sm from "../../sm.json";

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);

export const PrismicClient = ({
  config,
  previewData,
  req,
}: {
  config?: prismic.ClientConfig;
  previewData?: any;
  req?: prismic.HttpRequestLike;
}): prismic.Client => {
  const client = prismic.createClient(
    "https://riera-studio-spotlight.cdn.prismic.io/api/v2",
    config || {}
  );

  enableAutoPreviews({
    client,
    previewData,
    req,
  });
  return client;
};

export const linkResolver: prismicH.LinkResolverFunction = (doc): string => {
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
  link: createPrismicLink({
    uri: "https://riera-studio-spotlight.prismic.io/graphql",
  }),
  cache: new InMemoryCache(),
});

export default cms;
