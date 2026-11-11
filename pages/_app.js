import "styles/globals.css";
import * as gtag from "../lib/gtag";
import { generateDefaultSeo } from "next-seo/pages";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {generateDefaultSeo({
          openGraph: {
            type: "website",
            url: `https://www.christiancodes.io${router.asPath}`,
            siteName: "Christian Codes",
            images: [
              {
                url: "https://www.christiancodes.io/og/christian-codes-og.png",
                width: 1200,
                height: 630,
                alt: "Christian Codes",
              },
            ],
          },
          twitter: {
            handle: "@codes_io",
            site: "@codes_io",
            cardType: "summary_large_image",
          },
        })}
      </Head>
      <ThemeProvider attribute="class" enableColorScheme={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
