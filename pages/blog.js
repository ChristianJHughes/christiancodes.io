import Heading from "components/heading";
import Layout from "components/layout";
import Slice from "components/slice";

export default function Blog() {
  const meta = {
    title: "Blog | Christian Codes",
    description:
      "Hi, I'm Christian! Software Engineer, building developer tools and design systems in Nashville, TN.",
  };

  return (
    <>
      <Layout meta={meta}>
        <Slice size="xl" center>
          <Heading level={1} size="lg">
            Blog coming soon!
          </Heading>
        </Slice>
      </Layout>
    </>
  );
}
