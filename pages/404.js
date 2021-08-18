import Heading from "components/heading";
import Image from "next/image";
import Layout from "components/layout";
import mario404 from "public/images/mario-404.gif";
import Slice from "components/slice";

export default function Custom404() {
  const meta = {
    title: "404 | Christian Codes",
    description:
      "Hi, I'm Christian! Software Engineer, building developer tools and design systems in Nashville, TN.",
    noIndex: true,
    noFollow: true,
  };

  return (
    <>
      <Layout meta={meta}>
        <Slice size="xl" center divider>
          <Heading level={1} size="xl">
            😳 404 - Not Found
          </Heading>
          <p className="max-w-lg mb-1 font-semibold">
            Whoops! Sorry, that route doesn&apos;t exist.
          </p>
          <p className="max-w-lg mb-8 font-semibold">Enjoy this gif instead.</p>
          <Image src={mario404} alt="'Super Mario Bros' themed 404 message" />
        </Slice>
      </Layout>
    </>
  );
}
