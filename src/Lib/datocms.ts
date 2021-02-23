import { GraphQLClient } from "graphql-request";
import { getSdk, Sdk } from "../generated/graphql";

export const datoRequest = ({ preview }): Sdk => {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
    },
  });
  return getSdk(client);
};
