import { TerminalIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center h-8 sm:h-10 max-w-screen-md duration-100 transform-translate group hover:-translate-y-0.5">
        <TerminalIcon className="inline-block h-full mr-1 text-black dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-500" />
        <span className="text-base font-bold text-black sm:text-xl group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-500">
          Christian Codes
        </span>
      </a>
    </Link>
  );
}
