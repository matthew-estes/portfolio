"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

const NAV_ITEMS = [
  {
    title: "Work",
    description: "View my projects",
    href: "/work",
  },
  {
    title: "About",
    description: "My story & skills",
    href: "/about",
  },
  {
    title: "Contact",
    description: "Let's build something",
    href: "/contact",
  },
];

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-700">
      <div className="fixed top-6 right-6 z-50">
        <div className="opacity-50 hover:opacity-100 transition-opacity duration-500 scale-150">
          <ThemeToggle />
        </div>
      </div>
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className={`text-center transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-thin text-black dark:text-white tracking-[-0.02em] leading-none">
            matthew<span className="text-gray-400 dark:text-gray-600">estes</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light tracking-wide">Code · Design</p>
        </div>

        <nav className={`mt-20 transition-all duration-1000 delay-300 ease-out ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
            {NAV_ITEMS.map((item) => (
              <Link key={item.title} href={item.href} className="group text-center">
                <h2 className="text-3xl md:text-4xl font-thin text-black dark:text-white tracking-tight transition-opacity duration-300 hover:opacity-60">{item.title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.description}</p>
              </Link>
            ))}
          </div>
        </nav>
      </main>
    </div>
  );
}
