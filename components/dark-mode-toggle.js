import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <span className="flex items-center justify-center">
      <SunIcon className="w-3 h-3" />
      <Switch
        checked={theme == "dark"}
        onChange={() => setTheme(theme == "dark" ? "light" : "dark")}
        className={`${
          mounted && theme == "dark" ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex items-center h-5 rounded-full w-9 mx-1.5`}
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={`${
            mounted && theme == "dark" ? "translate-x-5" : "translate-x-1"
          } inline-block w-3 h-3 transform bg-white rounded-full transition-transform transition-backgroundColor duration-200`}
        />
      </Switch>
      <MoonIcon className="w-3 h-3" />
    </span>
  );
}
