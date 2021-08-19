import { ArrowDownIcon } from "@heroicons/react/outline";
import { getAllPosts } from "lib/posts";
import Heading from "components/heading";
import Layout from "components/layout";
import PostPreview from "components/post-preview";
import Slice from "components/slice";

export default function Blog() {
  const meta = {
    title: "Blog | Christian Codes",
    description:
      "Hi, I'm Christian Hughes! Software Engineer, building developer tools and design systems in Nashville, TN. Welcome to the blog.",
  };

  return (
    <>
      <Layout meta={meta}>
        <Slice size="xl" divider>
          <Heading level={1} size="xxl">
            Blog
          </Heading>

          {getAllPosts().map((postMeta, i) => (
            <PostPreview meta={postMeta} key={i} />
          ))}

          <div className="flex w-0.5 h-[25vh] mx-auto mt-10 bg-gray-900 dark:bg-gray-200"></div>
          <ArrowDownIcon className="w-6 mx-auto mb-16 -mt-1 text-gray-900 dark:text-gray-200" />

          <p className="text-center dark:text-gray-200">
            <em className="italic">👉 More blogs are on the way!</em>
          </p>
        </Slice>
      </Layout>
    </>
  );
}
