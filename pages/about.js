import Heading from "components/heading";
import Layout from "components/layout";
import Link from "components/link";
import Slice from "components/slice";

export default function About() {
  const meta = {
    title: "About | Christian Codes",
    description:
      "Hi, I'm Christian Hughes! I'm a Software Engineer with a passion for front-end development, developer tools, and design systems.",
  };

  return (
    <>
      <Layout meta={meta}>
        <Slice size="xl" className="-mt-6 sm:-mt-0" divider>
          <Heading level={1} size="xxl">
            About
          </Heading>
          <div className="prose dark:prose-light">
            <p>
              <span className="inline-block animate-wave">👋</span>
              <strong> Hi, I&apos;m Christian Hughes!</strong> I&apos;m a{" "}
              <strong>Senior Software Engineer</strong> with a passion for
              front-end development, developer tools, and design systems.
            </p>{" "}
            <p>
              I create front-end tools that have enabled{" "}
              <strong>hundreds of developers</strong> and{" "}
              <strong>millions of users</strong>.
            </p>{" "}
            <p>
              I currently work as a <strong>Senior Software Engineer</strong> at{" "}
              <strong>
                <Link href="https://www.dropbox.com/" newTab>
                  Dropbox
                </Link>
                .
              </strong>
            </p>
            <p>
              {" "}
              I&apos;ve recently worked as a <strong>
                Developer III
              </strong> for{" "}
              <strong>
                <Link href="https://twitter.com/DaveRamsey" newTab>
                  Dave Ramsey
                </Link>
              </strong>{" "}
              (
              <Link href="https://www.ramseysolutions.com/" newTab>
                Ramsey Solutions
              </Link>
              ), designing key architecture and tooling for the Design Systems
              and CMS platforms.
            </p>
            <p>
              I previously worked as a{" "}
              <strong>Software Development Engineer</strong> at{" "}
              <strong>
                <Link href="https://www.amazon.com" newTab>
                  Amazon
                </Link>
              </strong>
              , creating front-end tools to simplify the consumption of
              Amazon-scale datasets for teams throughout the company.
            </p>
            <p>
              I earned a degree in <strong>Computer Science</strong> from{" "}
              <strong>
                <Link href="https://www.ksu.edu" newTab>
                  Kansas State University
                </Link>
              </strong>{" "}
              in 2017.
            </p>{" "}
            <p>
              I love the web, and have a special interest in{" "}
              <strong>accessible cloud computing</strong>,{" "}
              <strong>the Jamstack</strong>, and
              <strong> ergonomic front-end frameworks</strong>.
            </p>
            <p>Outside of engineering, I really enjoy:</p>
            <ul>
              <li>Improv</li>
              <li>Theology</li>
              <li>Exercise</li>
              <li>Bad movies</li>
            </ul>
            <p>
              Shoot me{" "}
              <Link href="mailto:christian.hughes@hey.com">an email</Link>, I
              would love to connect!
            </p>
          </div>
        </Slice>
      </Layout>
    </>
  );
}
