import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { darkTheme } from '@/themes'
import { NextUIProvider } from '@nextui-org/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} /> 
    </NextUIProvider>
  )
}
