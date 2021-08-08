import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* https://leerob.io/blog/fonts */}
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          {/* https://realfavicongenerator.net/ */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          {/* TODO: Add all OG Tags */}
          <meta property="og:image" content="/christian-codes-og.png" />
        </Head>
        <body className="text-black duration-300 bg-white transition-backgroundColor dark:text-white dark:bg-gray-900 lg:px-0">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:p-1.5 text-white dark:text-blue-500 z-20 top-3.5 left-6 dark:bg-white bg-blue-500 font-semibold rounded-md"
          >
            Skip to content
          </a>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
