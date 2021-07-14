import Logo from "./logo";
import Link from "next/link";
import { useTheme } from "next-themes";

function NavigationLink({ href, text }) {
  return (
    <Link href={href}>
      <a className="font-semibold">{text}</a>
    </Link>
  );
}

export default function Navigation({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex flex-col items-center justify-between max-w-screen-md py-6 mx-auto space-y-2 md:flex-row md:space-y-0">
      <Logo />
      <div className="flex items-center space-x-6">
        <NavigationLink href="/blog" text="Blog" />
        <NavigationLink href="/about" text="About" />
        <button
          className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800"
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        >
          Toggle Dark Mode
        </button>
      </div>
    </nav>
  );
}
