"use client";

import Link from "next/link";

export default function Navigation({ currentPath }) {
  return (
    <nav className="flex gap-8">
      {["Work", "About", "Contact"].map(item => (
        <Link
          key={item}
          href={`/${item.toLowerCase()}`}
          className={`text-sm font-medium transition-opacity duration-200 text-black dark:text-white ${
            currentPath === `/${item.toLowerCase()}` 
              ? "opacity-100" 
              : "opacity-60 hover:opacity-100"
          }`}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}