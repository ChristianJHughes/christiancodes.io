import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Heading from "../components/heading";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Christian Codes</title>
        {/* TODO: Replace this garbage with an optimized font. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Heading isLarge text="Christian Hughes" />
        <h2>I&apos;m learning NextJS!</h2>
        <a
          className="text-xl font-bold text-blue-400 hover:text-blue-600"
          href="https://github.com/ChristianJHughes/christiancodes.io"
        >
          STAY TUNED
        </a>
      </Layout>
    </>
  );
}
