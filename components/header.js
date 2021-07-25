import Logo from "./logo";
import DarkModeToggle from "./dark-mode-toggle";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

function HeaderGroup({ children, isNav }) {
  const Element = isNav ? "nav" : "div";

  return (
    <Element role={isNav ? "navigation" : undefined}>
      <ol className="flex items-center pr-3 my-1 mr-3 space-x-3 leading-6 duration-300 border-r-2 border-gray-200 opacity-100 sm:pr-4 sm:mr-4 sm:space-x-4 sm:my-0 dark:border-gray-700 transition-color">
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
        <Icon className="w-6 h-6 py-[2px] box-content dark:hover:text-blue-500 hover:text-blue-700" />
      </a>
    </li>
  );
}

function NavigationLink({ href, text }) {
  const router = useRouter();

  const navigationLinkClasses = cn(
    {
      "dark:border-white border-black dark:hover:border-blue-500 hover:border-blue-700":
        router.asPath === href,
      "border-transparent": router.asPath != href,
    },
    "inline-block pt-[6px] pb-1 mx-0.5 font-semibold text-l leading-none border-b-2 dark:hover:text-blue-500 hover:text-blue-700 hover:-translate-y-0.5 transform-translate duration-100"
  );

  router.asPath === href;

  return (
    <li>
      <Link href={href}>
        <a className={navigationLinkClasses}>{text}</a>
      </Link>
    </li>
  );
}

export default function Header({ showBorder }) {
  const [isOpen, setOpen] = useState(false);

  const headerClasses = cn(
    "sticky top-0 w-full pl-4 pr-2 py-2 sm:px-6 sm:py-3 space-y-2 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 border-b bg-white border-gray-200 border-opacity-0 dark:border-opacity-0 dark:border-gray-800 duration-200 z-10 transition-nav h-[65px]",
    {
      "border-opacity-100 dark:border-opacity-100 backdrop-blur": showBorder,
      "h-[105px]": isOpen,
    }
  );

  const headerItemsClasses = cn(
    "items-center justify-center w-full sm:w-auto mb-1 sm:mb-0 flex transition-opacity duration-200",
    {
      "opacity-0 sm:flex sm:opacity-100": !isOpen,
      "opacity-100": isOpen,
    }
  );

  return (
    <header className={headerClasses}>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mx-auto border-gray-200 dark:border-gray-800">
        <Logo />
        <div className="sm:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            label="Show Navigation"
            rounded
          />
        </div>
        <div className={headerItemsClasses}>
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
