import Header from "./header";
import { useInView } from "react-intersection-observer";

export default function Layout({ children }) {
  const { ref, inView, entry } = useInView();

  return (
    <>
      <div className="absolute h-[1px] sm:h-14 sm:static" ref={ref}></div>
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
