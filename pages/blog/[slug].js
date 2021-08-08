import Heading from "components/heading";
import Layout from "components/layout";
import Slice from "components/slice";
import { NextSeo } from "next-seo";

export default function Blog() {
  // TODO: Meta object should be different for each blog post
  const meta = {
    description: "The Christian Codes blog.",
    title: "Blog | Christian Codes",
  };

  return (
    <>
      <NextSeo
        description={meta.description}
        title={meta.title}
        openGraph={{
          // TODO: Add article metadata based on MDX
          type: "article",
          description: meta.description,
          title: meta.title,
        }}
      />
      <Layout>
        <Slice size="lg" center>
          <Heading level={2}>Example blog coming soon!</Heading>
        </Slice>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "example" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: {} };
}
