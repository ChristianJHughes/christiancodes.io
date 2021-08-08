import Head from "next/head";
import Image from "next/image";
import Heading from "../components/heading";
import Slice from "../components/slice";
import Layout from "../components/layout";
import Link from "../components/link";
import christianHeadshot from "../public/images/christian-headshot.jpeg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Christian Codes</title>
      </Head>

      <Layout>
        <Slice size="lg" center divider>
          <div className="mb-8 overflow-hidden rounded-full w-36 h-36">
            <Image
              src={christianHeadshot}
              width={144}
              height={144}
              placeholder="blur"
              alt="Christian Hughes Headshot"
            ></Image>
          </div>

          <Heading size="xl" className="text-left">
            <span className="inline-block duration-1000 animate-wave">👋</span>{" "}
            Hi, I&apos;m Christian!
          </Heading>

          <Heading className="max-w-2xl" level={3} size="lg">
            Software Engineer, building
            <br />{" "}
            <span className="font-extrabold text-blue-800 dark:text-blue-200 whitespace-nowrap">
              Developer Tools
            </span>{" "}
            &{" "}
            <span className="font-extrabold text-blue-800 whitespace-nowrap dark:text-blue-200">
              Design Systems
            </span>
            .
          </Heading>

          <p className="self-center max-w-md mx-auto font-semibold text-gray-700 text-md sm:text-lg dark:text-gray-200">
            You'll find me working on the web at{" "}
            <Link href="https://ramseysolutions.com/">Ramsey Solutions</Link> in
            beautiful Nashville, TN.
          </p>
        </Slice>

        <Slice size="lg" divider>
          <Heading level={3} size="md">
            🤓 Recently Published
          </Heading>
          {/* TODO: Autogenerate a list of these based on MDX Files. */}
          <div className="mb-6">
            <Heading level={4} size="sm">
              <Link href="/blog">Building a Blog with Next.js & Tailwind</Link>
            </Heading>
            <p className="font-medium dark:text-gray-200">
              How'd I build this thing?
            </p>
          </div>
          <p className="italic font-medium dark:italic dark:text-gray-200">
            <em>👉&nbsp; More blogs are on the way!</em>
          </p>
        </Slice>

        <Slice size="lg" divider>
          <Heading level={3} size="md">
            💻 What I'm Working On
          </Heading>
          <Heading level={5} size="sm">
            <Link href="https://ramseysolutions.com/">@ Ramsey Solutions</Link>
          </Heading>
          <ul className="flex flex-col gap-1 mb-6 font-medium leading-relaxed list-inside dark:text-gray-200">
            <li>
              • 🧰&nbsp; Building out front-end tooling for our{" "}
              <strong>CMS Platform</strong>, serving{" "}
              <Link href="https://www.ramseysolutions.com/ramseyplus/financial-peace">
                millions of users
              </Link>{" "}
              each month.
            </li>{" "}
            <li>
              • 🖌️&nbsp; Developing a robust cross-platform{" "}
              <strong>Design System</strong> across React, Ruby on Rails, and
              more (closed-source for now 😉).
            </li>{" "}
            <li>
              • 👨‍💻&nbsp; Collaborating on <strong>Front-End Standards</strong>,
              and scaling <strong>Technical Interviewing</strong> to grow our{" "}
              <Link href="https://www.ramseyinhouse.com/">
                in-house team of 140+ developers
              </Link>
              .
            </li>
          </ul>
          <p className="mb-4 font-medium dark:text-gray-200">
            Lately I've been diving deep into the React ecosystem -- the
            developer experience offered by frameworks like{" "}
            <Link href="https://nextjs.org/">Next.js</Link> and{" "}
            <Link href="https://www.gatsbyjs.org/">Gatsby</Link> is exceptional.
          </p>
          <p className="font-medium dark:text-gray-200">
            Feel free to learn some more{" "}
            <Link href="/about" className="font-semibold">
              about me
            </Link>
            , or check out my{" "}
            <Link href="/resume" className="font-semibold">
              resume
            </Link>
            .
          </p>
        </Slice>
      </Layout>
    </>
  );
}
