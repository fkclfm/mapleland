import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://maplestory.io/", // 사용할 GraphQL 엔드포인트
  cache: new InMemoryCache(),
});

export default client;
