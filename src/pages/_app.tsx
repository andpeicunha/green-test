import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Head from "next/head";
import GlobalStyle from "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <>
          <Head>
            <title>Green Acesso</title>
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </Hydrate>
    </QueryClientProvider>
  );
}
