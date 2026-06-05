"use client";

import { useState } from "react";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "About", link: "/#about" },
  { name: "Skills", link: "/#skills" },
  { name: "Projects", link: "/#projects" },
  { name: "Contact", link: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="
      fixed top-0 left-0 w-full z-50
      bg-black/20
      backdrop-blur-xl
      border-b border-white/10
      "
    >
      <nav
        className="
        container mx-auto
        flex items-center justify-between
        py-5
        px-4
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
          text-2xl md:text-3xl
          font-black
          text-sky-400
          tracking-wide
          "
        >
          <span className="text-white">K.{" "}</span>Habib
        </Link>

        {/* Desktop Menu */}
        <ul
          className="
          hidden md:flex
          items-center
          gap-8 lg:gap-10
          "
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="
                relative
                text-slate-300
                hover:text-sky-400
                transition duration-300
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-sky-400
                after:transition-all
                after:duration-300
                hover:after:w-full
                "
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          md:hidden
          text-2xl
          text-slate-300
          hover:text-sky-400
          transition
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="
            md:hidden
            glass
            border-t border-white/10
            "
          >
            <ul
              className="
              flex flex-col
              items-center
              gap-8
              py-10
              "
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="
                    text-lg
                    text-slate-300
                    hover:text-sky-400
                    transition
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
