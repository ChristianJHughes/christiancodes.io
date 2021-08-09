import cn from "classnames";
import Link from "next/link";
import PropTypes from "prop-types";
import { TerminalIcon } from "@heroicons/react/outline";

export default function Logo({ className }) {
  return (
    <Link href="/">
      <a className={cn("flex items-center h-8 sm:h-10 group -ml-1", className)}>
        <TerminalIcon className="inline-block h-full mr-1 text-black dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-500" />
        <span className="text-base font-bold text-black sm:text-xl group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-500">
          Christian Codes
        </span>
      </a>
    </Link>
  );
}

Logo.propTypes = { className: PropTypes.string };
