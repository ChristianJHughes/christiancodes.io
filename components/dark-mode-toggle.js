import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Switch } from "@headlessui/react";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function DarkModeToggle() {
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <span className="flex items-center justify-center">
      <SunIcon className="w-3 h-3" />
      <Switch
        checked={mounted && resolvedTheme == "dark"}
        onChange={() => setTheme(resolvedTheme == "dark" ? "light" : "dark")}
        className="dark:bg-blue-600 bg-gray-200 relative inline-flex items-center h-5 rounded-full w-9 mx-1.5 cursor-pointer"
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
