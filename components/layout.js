import Footer from "components/footer";
import Header from "components/header";
import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

export default function Layout({ children, meta }) {
  const { ref, inView, entry } = useInView();

  return (
    <>
      {meta && (
        <NextSeo
          description={meta.description}
          title={meta.title}
          noindex={meta.noIndex ? meta.noIndex : false}
          nofollow={meta.noFollow ? meta.noFollow : false}
          openGraph={{
            description: meta.description,
            title: meta.title,
          }}
        />
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
