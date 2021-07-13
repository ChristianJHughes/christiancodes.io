import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Heading from "../components/Heading";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Christian Codes</title>
      </Head>
      <Layout>
        <Heading isLarge />
        <h2>Currently learning NextJS</h2>
        <a
          className="text-xl text-blue-500 hover:text-blue-600"
          href="https://github.com/ChristianJHughes/christiancodes.io"
        >
          STAY TUNED
        </a>
      </Layout>
    </>
  );
}
