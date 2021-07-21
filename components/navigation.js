import Logo from "./logo";
import DarkModeToggle from "./dark-mode-toggle";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

import cn from "classnames";

function NavigationLink({ className, href, text }) {
  return (
    <Link href={href}>
      <a
        className={cn(
          "font-semibold dark:hover:text-blue-300 border-transparent border-b-2 hover:border-blue-700 hover:text-blue-700 dark:hover:border-blue-300",
          className
        )}
      >
        {text}
      </a>
    </Link>
  );
}

export default function Navigation({ children, intersecting }) {
  const { ref, inView, entry } = useInView();

  const navClasses = cn(
    "sticky top-0 w-full px-6 py-3 space-y-2 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur border-b bg-white border-gray-200 border-opacity-0 dark:border-opacity-0 dark:border-gray-800 transition-backgroundColor duration-300 mb-6",
    {
      "border-opacity-100 dark:border-opacity-100 transition-borderColor":
        entry && !inView,
    }
  );

  return (
    <>
      <div className="h-14" ref={ref}></div>
      <nav className={navClasses}>
        <div className="flex flex-col items-center justify-between w-full max-w-4xl mx-auto border-gray-200 md:flex-row md:space-y-0 divide-solid dark:border-gray-800">
          <Logo />
          <div className="flex items-center">
            <div className="flex items-center px-4 space-x-4 duration-300 border-r-2 border-gray-200 dark:border-gray-700 transition-color">
              <NavigationLink href="/blog" text="Blog" />
              <NavigationLink href="/about" text="About" />
            </div>
            <div className="flex items-center px-4 mr-4 space-x-4 duration-300 border-r-2 border-gray-200 dark:border-gray-700 transition-color">
              <a href="https://github.com">
                <IoLogoGithub className="w-6 h-6 dark:hover:text-blue-300 hover:text-blue-700" />
              </a>
              <a href="https://linkedin.com">
                <IoLogoLinkedin className="w-6 h-6 dark:hover:text-blue-300 hover:text-blue-700" />
              </a>
            </div>
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
