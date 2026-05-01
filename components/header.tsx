"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import Search from "./search";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/popular", label: "科普入门" },
  { href: "/pro", label: "技术深潜" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="max-w-3xl mx-auto px-6">
      <nav className="flex items-center justify-between py-5 border-b border-border mb-8">
        <Link href="/" className="text-xl font-bold text-text no-underline flex items-center gap-2">
          <span>🧠</span> 锦创AI
        </Link>
        <ul className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`pb-1 border-b-2 transition-colors no-underline ${
                  pathname === item.href
                    ? "text-text border-accent"
                    : "text-text-light border-transparent hover:text-text hover:border-accent"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
      <Search />
    </header>
  );
}