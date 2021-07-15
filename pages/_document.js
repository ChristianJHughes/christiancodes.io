import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
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
        <body className="px-4 text-black bg-white dark:text-white dark:bg-black lg:px-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
