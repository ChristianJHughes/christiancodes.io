import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <span className="flex items-center justify-center">
      <SunIcon className="w-3 h-3" />
      <Switch
        checked={resolvedTheme == "dark"}
        onChange={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
        className="dark:bg-blue-600 bg-gray-200 relative inline-flex items-center h-5 rounded-full w-9 mx-1.5"
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`inline-block w-3 h-3 transition-transform duration-200 transform translate-x-1 bg-white rounded-full dark:translate-x-5`}
        />
      </Switch>
      <MoonIcon className="w-3 h-3" />
    </span>
  );
}
