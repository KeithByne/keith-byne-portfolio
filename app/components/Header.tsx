"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const path = usePathname();
  return (
    <header className="site-header">
      <Link className="mark" href="/">
        Keith Byne
      </Link>
      <nav className="nav" aria-label="Primary">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={path === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
