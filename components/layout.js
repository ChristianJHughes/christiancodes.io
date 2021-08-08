import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

export default function Layout({ children }) {
  const { ref, inView, entry } = useInView();

  return (
    <>
      <div className="absolute h-[1px] sm:h-14 sm:static" ref={ref}></div>
      <Header showBorder={entry && !inView} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
