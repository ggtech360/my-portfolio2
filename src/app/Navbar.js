"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

export default function Navbar() {
  const path = usePathname();
  const [toogle, setToggle] = useState(false);
  const useToggle = () => {
    if (toogle) setToggle(false);
    else setToggle(true);
  };

  return (
    <div className="bg-white z-50 py-4 flex items-center justify-between px-12 lg:px-32 min-w-full w-full">
      <Link
        href="/"
        className="text-2xl text-main cursor-pointer hover:text-primary transition-all duration-100 ease-linear font-bold"
      >
        Portfolio
      </Link>
      <BiMenu
        onClick={useToggle}
        className="text-3xl block cursor-pointer hover:text-primary transition-all ease-linear lg:hidden"
      />

      {/* Mobile version menu */}
      <ul
        className={`${
          toogle ? "scale-1 opacity-1" : "scale-0 opacity-0"
        } flex flex-col transition-all text-lg ease-linear duration-200 lg:hidden absolute bg-slate-200 w-full py-14 z-50 right-0 translate-y-[10.9rem] items-center justify-center gap-5 font-medium`}
      >
        {links.map((l) => (
          <li key={l.href}>
            <div>
              <Link
                className={`${
                  l.href === path ? "font-bold text-primary" : " scale-0"
                } hover:text-primary text-main transition-all ease-linear`}
                href={l.href}
              >
                {l.text}
              </Link>
            </div>
          </li>
        ))}
      </ul>

      {/* universal menu */}
      <ul
        className={`lg:flex hidden items-center justify-center gap-5 font-medium`}
      >
        {links.map((l) => (
          <li key={l.href}>
            <div>
              <Link
                className={`${
                  l.href === path ? "font-bold text-primary" : " scale-0"
                } hover:text-primary text-main transition-all ease-linear`}
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
