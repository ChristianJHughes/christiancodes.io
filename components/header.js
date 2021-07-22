import Logo from "./logo";
import DarkModeToggle from "./dark-mode-toggle";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

import cn from "classnames";

function HeaderGroup({ children, isNav }) {
  const Element = isNav ? "nav" : "div";

  return (
    <Element>
      <ol className="flex items-center pr-4 mr-4 space-x-4 leading-6 duration-300 border-r-2 border-gray-200 dark:border-gray-700 transition-color">
        {children}
      </ol>
    </Element>
  );
}

function SocialLink({ icon, ariaLabel }) {
  const Icon = icon;
  return (
    <li>
      <a href="https://github.com" aria-label={ariaLabel}>
        <Icon className="w-6 h-6 dark:hover:text-blue-300 hover:text-blue-700" />
      </a>
    </li>
  );
}

function NavigationLink({ href, text }) {
  return (
    <li>
      <Link href={href}>
        <a className="inline-block pb-1 pt-1.5 px-0.5 font-semibold leading-none border-b-2 border-transparent dark:hover:text-blue-300 hover:border-blue-700 hover:text-blue-700 dark:hover:border-blue-300">
          {text}
        </a>
      </Link>
    </li>
  );
}

export default function Header({ showBorder }) {
  const headerClasses = cn(
    "sticky top-0 w-full px-6 py-3 space-y-2 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 border-b bg-white border-gray-200 border-opacity-0 dark:border-opacity-0 dark:border-gray-800 transition-backgroundColor duration-300 mb-6 z-10",
    {
      "border-opacity-100 dark:border-opacity-100 transition-borderColor backdrop-blur":
        showBorder,
    }
  );

  return (
    <header className={headerClasses}>
      <div className="flex flex-col items-center justify-between w-full max-w-4xl mx-auto border-gray-200 md:flex-row md:space-y-0 divide-solid dark:border-gray-800">
        <Logo />
        <div className="flex items-center">
          <HeaderGroup isNav>
            <NavigationLink href="/blog" text="Blog" />
            <NavigationLink href="/about" text="About" />
          </HeaderGroup>
          <HeaderGroup>
            <SocialLink
              icon={IoLogoGithub}
              href="https://github.com/ChristianJHughes"
              ariaLabel="GitHub"
            />
            <SocialLink
              icon={IoLogoLinkedin}
              href="https://www.linkedin.com/in/christianjhughes/"
              ariaLabel="LinkedIn"
            />
          </HeaderGroup>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
