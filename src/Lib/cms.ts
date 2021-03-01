import { GraphQLClient } from "graphql-request";
import Prismic from "@prismicio/client";
import { getSdk, Sdk } from "../generated/graphql";

const getCMS = async (): Promise<Sdk> => {
  const client = Prismic.client(
    "https://riera-studio-spotlight.cdn.prismic.io/api"
  );
  const api = await client.getApi();
  const result = await client.query(
    Prismic.Predicates.at("document.type", "exhibition")
  );
  console.log(result);

  const gqlClient = new GraphQLClient(
    "https://riera-studio-spotlight.cdn.prismic.io/graphql",
    {
      headers: {
        "Prism-ref": api.masterRef.ref,
      },
    }
  );
  return getSdk(gqlClient);
};

export default getCMS;
