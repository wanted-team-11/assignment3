import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import TopButton from "./components/TopButton";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
        <TopButton />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
