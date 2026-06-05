"use client";

import Link from "next/link";

import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      relative
      pt-16
      pb-10
      border-t border-white/10
      overflow-hidden
      "
    >
      {/* Blur Background */}
      <div className="blur-circle w-75 h-75 bg-sky-500/10 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto">
        {/* Top */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-10
          mb-12
          "
        >
          {/* Logo */}
          <div className="text-center md:text-left">
            <h2
              className="
              text-3xl
              font-black
              bg-linear-to-r
              from-sky-400
              to-cyan-300
              bg-clip-text
              text-transparent
              mb-3
              "
            >
              <span className="text-white">K. </span>Habib
            </h2>

            <p className="text-slate-400 max-w-md">
              Frontend Developer passionate about building modern, responsive
              and interactive web experiences.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            {/* GitHub */}
            <a
              href="https://github.com/kolyanhabib"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-14 h-14
              rounded-full
              glass
              flex items-center justify-center
              text-xl
              text-slate-300
              hover:text-sky-400
              hover:-translate-y-2
              transition-all duration-300
              "
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/kolyanhabib"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-14 h-14
              rounded-full
              glass
              flex items-center justify-center
              text-xl
              text-slate-300
              hover:text-sky-400
              hover:-translate-y-2
              transition-all duration-300
              "
            >
              <FaLinkedin />
            </a>

            {/* Back To Top */}
            <Link
              href="/#home"
              className="
              w-14 h-14
              rounded-full
              bg-sky-500
              flex items-center justify-center
              text-white
              hover:-translate-y-2
              hover:bg-sky-400
              transition-all duration-300
              "
            >
              <FaArrowUp />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
          border-t border-white/10
          pt-8
          text-center
          "
        >
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kolyan Habib. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
