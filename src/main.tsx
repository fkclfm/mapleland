// index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client.ts";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </QueryClientProvider>
  </StrictMode>
);
