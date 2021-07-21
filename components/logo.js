import { TerminalIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center h-10 max-w-screen-md group ">
        <TerminalIcon className="inline-block h-full mr-1 text-black dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300" />
        <span className="text-xl font-bold text-black group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">
          Christian Codes
        </span>
      </a>
    </Link>
  );
}
