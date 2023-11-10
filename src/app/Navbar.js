"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <div className="bg-slate-100 z-10 fixed py-4 flex items-center justify-between px-32 min-w-full w-full">
      <Link
        href="/"
        className="text-2xl cursor-pointer hover:text-sky-800 transition-all duration-100 ease-linear font-semibold"
      >
        Portfolio
      </Link>
      <ul className="flex gap-5 font-semibold">
        {links.map((l) => (
          <li key={l.href}>
            <div>
              <Link
                className={`${
                  l.href === path
                    ? "font-bold scale-[110%] text-sky-800"
                    : " scale-0"
                }`}
                href={l.href}
              >
                {l.text}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
