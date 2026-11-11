import Footer from "components/footer";
import { generateNextSeo } from "next-seo/pages";
import Head from "next/head";
import Header from "components/header";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

export default function Layout({ children, meta }) {
  const { ref, inView, entry } = useInView();

  return (
    <>
      {meta && (
        <Head>
          {generateNextSeo({
            description: meta.description,
            title: meta.title,
            noindex: meta.noIndex ?? false,
            nofollow: meta.noFollow ?? false,
            openGraph: {
              description: meta.description,
              title: meta.title,
            },
          })}
        </Head>
      )}
      <div className="absolute h-[1px] sm:h-14 sm:static" ref={ref}></div>
      <Header showBorder={entry && !inView} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
