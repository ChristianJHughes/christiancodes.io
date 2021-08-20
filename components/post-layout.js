import Heading from "components/heading";
import Layout from "components/layout";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import Slice from "components/slice";

export default function PostLayout({ children, meta }) {
  return (
    <>
      <NextSeo
        description={meta.description}
        title={meta.title}
        openGraph={{
          type: "article",
          description: meta.description,
          title: meta.title,
        }}
      />
      <Layout>
        <Slice size="xl" divider>
          <Heading size="xl" level={1}>
            {meta.title}
          </Heading>
          <div className="prose dark:prose-light">{children}</div>
        </Slice>
      </Layout>
    </>
  );
}

PostLayout.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
  }),
};
