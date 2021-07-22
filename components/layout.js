import Header from "./header";
import { useInView } from "react-intersection-observer";

export default function Layout({ children }) {
  const { ref, inView, entry } = useInView();
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  //   // root: divRef.current,
  //   // rootMargin: "-50px 0px 0px calc(-100% +50px)",
  // });

  return (
    <>
      <div className="h-14" ref={ref}></div>
      <Header showBorder={entry && !inView} />
      <main
        id="main"
        className="flex flex-col items-center justify-center max-w-screen-lg py-12 m-auto space-y-6 text-center"
      >
        {children}
      </main>
    </>
  );
}
