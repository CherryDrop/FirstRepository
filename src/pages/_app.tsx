import { ChakraProvider, theme } from "@chakra-ui/react"
import MyLayout from "@myComponents/layout"
import { AlertStackProvider } from "@myContexts/AlertStackContext"
import { BatataProvider } from "@myContexts/ApiContext"
import { AppProps } from "next/app"

import '../styles/styles.css'

function MyApp({ Component, pageProps }: 
  AppProps
  ) {
  return (
    <ChakraProvider theme={theme}>
      <AlertStackProvider>
        <BatataProvider>
          <MyLayout>
          <Component {...pageProps} />
          </MyLayout>
        </BatataProvider>
      </AlertStackProvider>
    </ChakraProvider>
  )
}

export default MyApp
