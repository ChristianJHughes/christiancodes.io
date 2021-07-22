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
