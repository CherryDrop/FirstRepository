import { ChakraProvider, theme } from "@chakra-ui/react"
import { AlertStackProvider } from "@myContexts/AlertStackContext"
import { BatataProvider } from "@myContexts/ApiContext"
import { AppProps } from "next/app"

import '../styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AlertStackProvider>
        <BatataProvider>
          <Component {...pageProps} />
        </BatataProvider>
      </AlertStackProvider>
    </ChakraProvider>
  )
}

export default MyApp
