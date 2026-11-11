import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import cn from "classnames";
import DarkModeToggle from "./dark-mode-toggle";
import { Fade as Hamburger } from "hamburger-react";
import Logo from "./logo";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import XIcon from "./x-icon";

function HeaderGroup({ children, isNav }) {
  const Element = isNav ? "nav" : "div";

  return (
    <Element role={isNav ? "navigation" : undefined}>
      <ol className="flex items-center pr-2 my-1 mr-2 space-x-2 leading-6 duration-300 border-r-2 border-gray-200 opacity-100 sm:pr-4 sm:mr-4 sm:space-x-4 sm:my-0 dark:border-gray-700 transition-color">
        {children}
      </ol>
    </Element>
  );
}

function SocialLink({ href, icon, ariaLabel }) {
  const Icon = icon;

  return (
    <li>
      <a href={href} aria-label={ariaLabel} target="_blank" rel="noreferrer">
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
    "inline-block pt-[6px] pb-1 mx-0.5 font-medium text-l leading-none border-b-2 dark:hover:text-blue-500 hover:text-blue-700",
  );

  return (
    <li>
      <NextLink href={href} className={navigationLinkClasses}>
        {text}
      </NextLink>
    </li>
  );
}

export default function Header({ showBorder }) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  const headerClasses = cn(
    "sticky top-0 w-full pl-5 pr-2 py-2 sm:px-6 sm:py-3 space-y-2 border-b duration-300 z-10 transition-nav",
    {
      "border-gray-200 dark:border-gray-800 backdrop-blur-sm dark:backdrop-blur-lg bg-white/95 dark:bg-gray-900/95":
        showBorder,
      "border-transparent bg-white dark:bg-gray-900": !showBorder,
      "h-[105px]": isOpen,
      "h-[65px]": !isOpen,
      "animate-fadeDown": router.asPath === "/",
    },
  );

  const headerItemsClasses = cn(
    "items-center justify-center w-full sm:w-auto mb-1 sm:mb-0 flex transition-opacity transition-display duration-300",
    {
      "opacity-0 sm:flex sm:opacity-100 z-[-1] sm:z-auto": !isOpen,
      "opacity-100": isOpen,
    },
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
            <SocialLink
              icon={XIcon}
              href="https://x.com/codes_io"
              ariaLabel="X"
            />
          </HeaderGroup>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
