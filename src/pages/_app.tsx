import { ChakraProvider, theme } from "@chakra-ui/react"
import MyLayout from "@myComponents/layout"
import { AlertStackProvider } from "@myContexts/AlertStackContext"
import { BatataProvider } from "@myContexts/ApiContext"
import { AppProps } from "next/app"

import '../styles/styles.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    // uri: 'http://localhost:3041/graphql',
    uri: 'https://backend:3041/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <AlertStackProvider>
        <BatataProvider>
          <MyLayout>
          <Component {...pageProps} />
          </MyLayout>
        </BatataProvider>
      </AlertStackProvider>
    </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
