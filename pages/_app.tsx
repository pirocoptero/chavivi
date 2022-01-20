import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  pink: {
    800: '#B40081',
    700: '#940063',
    600: '#FF42A4',
    500: '#FFAEC8',
    400: '#FF64AB',
  },
  green: {
    700: '#007F7E',
    600: '#C1F5EC',
    500: '#90F5E4',
  },
  yellow: {
    500: '#FFFED3'
  },
  purple: {
    700: '#722866'
  }
}

const fonts = {
  body: 'Spartan'
}

const theme = extendTheme({ colors,  fonts })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
