import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oir0st062z01xtej879ogp/master',
  cache: new InMemoryCache()
})