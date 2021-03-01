import { PrismicLink } from "apollo-link-prismic";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const cms = new ApolloClient({
  link: PrismicLink({
    uri: "https://riera-studio-spotlight.prismic.io/graphql",
  }),
  cache: new InMemoryCache(),
});

export default cms;
