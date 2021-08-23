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
          <Heading className="max-w-2xl" level={2} size="lg">
            Software Engineer, building
            <br />{" "}
            <span className="font-extrabold text-blue-700 dark:text-blue-200 whitespace-nowrap">
              Developer Tools
            </span>{" "}
            &{" "}
            <span className="font-extrabold text-blue-700 whitespace-nowrap dark:text-blue-200">
              Design Systems
            </span>
            .
          </Heading>
          <p className="self-center max-w-md mx-auto font-semibold text-gray-700 text-md sm:text-lg dark:text-gray-200">
            You&apos;ll find me working on the web at{" "}
            <Link href="https://www.ramseysolutions.com/" newTab>
              Ramsey Solutions
            </Link>{" "}
            in beautiful Nashville, TN.
          </p>
        </Slice>

        <Slice size="xl" divider>
          <Heading level={2} size="md">
            🤓 Recently Published
          </Heading>

          {getAllPosts().map((postMeta, i) => (
            <PostPreview meta={postMeta} key={i} />
          ))}
        </Slice>

        <Slice size="xl" divider>
          <Heading level={2} size="md">
            💻 Work I&apos;m Doing
          </Heading>
          <Heading level={3} size="sm">
            <Link href="https://www.ramseysolutions.com/" newTab>
              @ Ramsey Solutions
            </Link>
          </Heading>
          <div className="prose dark:prose-light">
            <ul>
              <li>
                🧰 Building out front-end tooling for our{" "}
                <strong>CMS Platform</strong>, serving{" "}
                <Link
                  href="https://www.ramseysolutions.com/ramseyplus/financial-peace"
                  newTab
                >
                  millions of users
                </Link>{" "}
                each month.
              </li>{" "}
              <li>
                🖌️ Developing a robust cross-platform{" "}
                <strong>Design System</strong> across React, Ruby on Rails, and
                more (closed-source for now 😉).
              </li>{" "}
              <li>
                👨‍💻 Collaborating on <strong>Front-End Standards</strong>, and
                scaling Technical Interviewing to grow our{" "}
                <Link href="https://www.ramseyinhouse.com/" newTab>
                  in-house team of 140+ developers
                </Link>
                .
              </li>
            </ul>
            <p>
              Lately I&apos;ve been diving deep into the React ecosystem &mdash;
              the developer experience offered by frameworks like{" "}
              <Link href="https://nextjs.org/" newTab>
                Next.js
              </Link>{" "}
              and{" "}
              <Link href="https://www.gatsbyjs.com/" newTab>
                Gatsby
              </Link>{" "}
              is exceptional.
            </p>
            <p>
              Feel free to learn some more <Link href="/about">about me</Link>,
              or check out my <Link href="/resume">resume</Link>.
            </p>
          </div>
        </Slice>
      </Layout>
    </>
  );
}
