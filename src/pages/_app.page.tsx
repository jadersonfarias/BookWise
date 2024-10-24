import { DefaultSeo } from 'next-seo'
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import '../styles/globalStyles.css'
import '../styles/globalTheme.css'
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
      <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://github.com/jadersonfarias/BookWise',
            siteName: 'Bookwise',
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
