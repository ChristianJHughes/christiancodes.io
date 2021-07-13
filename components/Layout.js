import { useTheme } from "next-themes";

export default function Layout({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
      {children}{" "}
      <button
        className="p-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-md"
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
