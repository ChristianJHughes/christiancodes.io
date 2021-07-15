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
