"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
  <button
    onClick={() => setTheme(nextTheme)}
    aria-label="Toggle theme"
    className="relative inline-flex items-center justify-center h-4 w-8 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
  >
    <span className={`inline-block h-3 w-3 transform rounded-full transition-transform duration-300 bg-white dark:bg-gray-900 shadow-md ${theme === "dark" ? "translate-x-2" : "-translate-x-2"}`} />
  </button>
);
}
