import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          url: `https://www.christiancodes.io${router.asPath}`,
          site_name: "Christian Codes",
          images: [
            {
              url: "https://www.christiancodes.io/og/christian-codes-og.png",
              width: 1200,
              height: 630,
              alt: "Christian Codes",
            },
          ],
        }}
        twitter={{
          handle: "@codes_io",
          site: "@codes_io",
          cardType: "summary_large_image",
        }}
      />
      <ThemeProvider attribute="class" enableColorScheme={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
