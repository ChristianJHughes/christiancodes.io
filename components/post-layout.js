import Heading from "components/heading";
import Image from "next/image";
import Layout from "components/layout";
import Link from "components/link";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import Slice from "components/slice";
import christianHeadshot from "public/images/christian-headshot.jpeg";

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
          article: {
            publishedTime: "2021-08-22T02:13:32Z",
            authors: ["https://www.christiancodes.io/about"],
            tags: meta.tags,
          },
        }}
      />
      <Layout>
        <Slice size="xl" className="-mt-6 sm:-mt-0" divider>
          <Heading size="xl" level={1}>
            {meta.title}
          </Heading>

          <div className="flex items-center mb-6 -mt-4">
            <div className="inline-block w-8 h-8 mr-2 overflow-hidden rounded-full">
              <Image
                src={christianHeadshot}
                width={32}
                height={32}
                alt="Christian Hughes Headshot"
              ></Image>
            </div>
            <span className="inline-block leading-none">
              By: <Link href="/about">Christian Hughes</Link>
            </span>
          </div>

          {meta.featuredImage && (
            <div className="mb-4">
              <Image
                className="overflow-hidden rounded-3xl"
                src={meta.featuredImage}
                placeholder="blur"
                alt={meta.featuredImageAlt}
              ></Image>
            </div>
          )}

          <div className="self-center prose-sm prose sm:prose dark:prose-light">
            {children}
          </div>
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
