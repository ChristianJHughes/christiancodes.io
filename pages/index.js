import christianHeadshot from "public/images/christian-headshot.jpeg";
import { getAllPosts } from "lib/posts";
import Heading from "components/heading";
import Image from "next/image";
import Layout from "components/layout";
import Link from "components/link";
import PostPreview from "components/post-preview";
import Slice from "components/slice";

export default function Home({ posts }) {
  const meta = {
    title: "Christian Codes | Christian Hughes - Software Engineer",
    description:
      "Hi, I'm Christian Hughes! I'm a Software Engineer with a passion for front-end development, developer tools, and design systems.",
  };

  return (
    <>
      <Layout meta={meta}>
        <Slice size="xl" className="pt-10 sm:pt-9" center divider>
          <div className="mb-8 overflow-hidden rounded-full w-36 h-36">
            <Image
              src={christianHeadshot}
              width={144}
              height={144}
              placeholder="blur"
              alt="Christian Hughes Headshot"
            ></Image>
          </div>
          <Heading level={1} size="xl" className="text-left whitespace-nowrap">
            <span className="inline-block duration-1000 animate-wave">👋</span>{" "}
            Hi, I&apos;m Christian!
          </Heading>
          <Heading className="max-w-3xl" level={2} size="lg">
            Senior Software Engineer,
            <br />{" "}
            <span className="font-extrabold text-blue-700 dark:text-blue-200">
              building products for millions of users
            </span>
            .
          </Heading>
          <p className="self-center max-w-md mx-auto font-semibold text-gray-700 text-md sm:text-lg dark:text-gray-200">
            You&apos;ll find me working on the web at{" "}
            <Link href="https://www.dropbox.com/" newTab>
              Dropbox
            </Link>{" "}
            in beautiful Nashville, TN.
          </p>
        </Slice>

        <Slice size="xl" divider>
          <Heading level={2} size="md">
            💻 Recent Work
          </Heading>
          <Heading level={3} size="sm">
            <Link href="https://www.dropbox.com/" newTab>
              @ Dropbox
            </Link>
          </Heading>
          <div className="mb-4 prose dark:prose-light">
            <ul>
              <li>
                🚀 Led engineering for web onboarding redesign, driving $3.5MM+
                in new annual revenue
              </li>
              <li>
                🖥️ Built personalized sign-up experiences across the Dropbox web
                & desktop apps, serving millions of users in 20+ locales
              </li>
              <li>
                🧪 Designed many feature experiments in partnership with product
                & data science
              </li>
            </ul>
          </div>
        </Slice>

        <Slice size="xl" divider>
          <Heading level={2} size="md">
            🤓 Recently Published
          </Heading>

          {getAllPosts().map((postMeta, i) => (
            <PostPreview meta={postMeta} key={i} />
          ))}
        </Slice>
      </Layout>
    </>
  );
}
