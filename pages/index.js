import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Heading from "../components/heading";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Christian Codes</title>
      </Head>
      <Layout>
        <div className="max-w-screen-md px-4">
          <Heading isLarger>
            <span className="inline-block mr-3.5 duration-1000 animate-wave">
              👋
            </span>
          </Heading>
          <Heading isLarge>Hi, I&apos;m Christian!</Heading>
          <Image
            src="/images/christian-headshot.jpeg"
            className="block overflow-hidden rounded-full"
            width={200}
            height={200}
            alt="Christian Hughes Headshot"
          ></Image>
          <Heading className="mt-6 font-semibold">
            I&apos;m learning NextJS!
          </Heading>
          <a
            className="inline-block mb-6 text-xl font-bold text-blue-400 hover:text-blue-600"
            href="https://github.com/ChristianJHughes/christiancodes.io"
          >
            STAY TUNED
          </a>
          <p>
            Four score and seven years ago our fathers brought forth upon this
            continent, a new nation, conceived in Liberty, and dedicated to the
            proposition that all men are created equal. Now we are engaged in a
            great civil war, testing whether that nation, or any nation so
            conceived and so dedicated, can long endure. We are met on a great
            battle-field of that war. We have come to dedicate a portion of that
            field, as a final resting place for those who here gave their lives
            that that nation might live. It is altogether fitting and proper
            that we should do this. But, in a larger sense, we can not
            dedicate—we can not consecrate—we can not hallow—this ground. The
            brave men, living and dead, who struggled here, have consecrated it,
            far above our poor power to add or detract. The world will little
            note, nor long remember what we say here, but it can never forget
            what they did here. It is for us the living, rather, to be dedicated
            here to the unfinished work which they who fought here have thus far
            so nobly advanced. It is rather for us to be here dedicated to the
            great task remaining before us—that from these honored dead we take
            increased devotion to that cause for which they gave the last full
            measure of devotion—that we here highly resolve that these dead
            shall not have died in vain—that this nation, under God, shall have
            a new birth of freedom—and that government of the people, by the
            people, for the people, shall not perish from the earth.
          </p>
          <br></br>
          <p>
            Four score and seven years ago our fathers brought forth upon this
            continent, a new nation, conceived in Liberty, and dedicated to the
            proposition that all men are created equal. Now we are engaged in a
            great civil war, testing whether that nation, or any nation so
            conceived and so dedicated, can long endure. We are met on a great
            battle-field of that war. We have come to dedicate a portion of that
            field, as a final resting place for those who here gave their lives
            that that nation might live. It is altogether fitting and proper
            that we should do this. But, in a larger sense, we can not
            dedicate—we can not consecrate—we can not hallow—this ground. The
            brave men, living and dead, who struggled here, have consecrated it,
            far above our poor power to add or detract. The world will little
            note, nor long remember what we say here, but it can never forget
            what they did here. It is for us the living, rather, to be dedicated
            here to the unfinished work which they who fought here have thus far
            so nobly advanced. It is rather for us to be here dedicated to the
            great task remaining before us—that from these honored dead we take
            increased devotion to that cause for which they gave the last full
            measure of devotion—that we here highly resolve that these dead
            shall not have died in vain—that this nation, under God, shall have
            a new birth of freedom—and that government of the people, by the
            people, for the people, shall not perish from the earth.
          </p>
          <br></br>
          <p>
            Four score and seven years ago our fathers brought forth upon this
            continent, a new nation, conceived in Liberty, and dedicated to the
            proposition that all men are created equal. Now we are engaged in a
            great civil war, testing whether that nation, or any nation so
            conceived and so dedicated, can long endure. We are met on a great
            battle-field of that war. We have come to dedicate a portion of that
            field, as a final resting place for those who here gave their lives
            that that nation might live. It is altogether fitting and proper
            that we should do this. But, in a larger sense, we can not
            dedicate—we can not consecrate—we can not hallow—this ground. The
            brave men, living and dead, who struggled here, have consecrated it,
            far above our poor power to add or detract. The world will little
            note, nor long remember what we say here, but it can never forget
            what they did here. It is for us the living, rather, to be dedicated
            here to the unfinished work which they who fought here have thus far
            so nobly advanced. It is rather for us to be here dedicated to the
            great task remaining before us—that from these honored dead we take
            increased devotion to that cause for which they gave the last full
            measure of devotion—that we here highly resolve that these dead
            shall not have died in vain—that this nation, under God, shall have
            a new birth of freedom—and that government of the people, by the
            people, for the people, shall not perish from the earth.
          </p>
          <br />
          <p>
            Four score and seven years ago our fathers brought forth upon this
            continent, a new nation, conceived in Liberty, and dedicated to the
            proposition that all men are created equal. Now we are engaged in a
            great civil war, testing whether that nation, or any nation so
            conceived and so dedicated, can long endure. We are met on a great
            battle-field of that war. We have come to dedicate a portion of that
            field, as a final resting place for those who here gave their lives
            that that nation might live. It is altogether fitting and proper
            that we should do this. But, in a larger sense, we can not
            dedicate—we can not consecrate—we can not hallow—this ground. The
            brave men, living and dead, who struggled here, have consecrated it,
            far above our poor power to add or detract. The world will little
            note, nor long remember what we say here, but it can never forget
            what they did here. It is for us the living, rather, to be dedicated
            here to the unfinished work which they who fought here have thus far
            so nobly advanced. It is rather for us to be here dedicated to the
            great task remaining before us—that from these honored dead we take
            increased devotion to that cause for which they gave the last full
            measure of devotion—that we here highly resolve that these dead
            shall not have died in vain—that this nation, under God, shall have
            a new birth of freedom—and that government of the people, by the
            people, for the people, shall not perish from the earth.
          </p>
        </div>
      </Layout>
    </>
  );
}
