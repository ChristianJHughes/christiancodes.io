import Heading from "../components/heading";
import Layout from "../components/layout";
import Slice from "../components/slice";

export default function About() {
  const meta = {
    title: "About | Christian Codes",
    description:
      "Hi, I'm Christian! Software Engineer, building developer tools and design systems in Nashville, TN.",
  };

  return (
    <>
      <Layout meta={meta}>
        <Slice size="lg" center>
          <Heading level={2}>About coming soon!</Heading>
        </Slice>
      </Layout>
    </>
  );
}
