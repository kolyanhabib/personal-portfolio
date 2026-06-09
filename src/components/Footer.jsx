"use client";

import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      relative

      border-t border-white/10

      overflow-hidden
      "
    >
      {/* BLUR */}
      <div
        className="
        blur-circle

        w-60
        h-60

        bg-sky-500/5

        bottom-0
        right-0
        "
      />

      <div
        className="
        container
        mx-auto

        px-5
        sm:px-8
        lg:px-12

        py-10
        sm:py-12

        relative
        z-10
        "
      >
        <div
          className="
          flex

          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-8
          "
        >
          {/* LEFT */}
          <div
            className="
            text-center
            lg:text-left
            "
          >
            {/* LOGO */}
            <Link
              href="/"
              className="
              inline-flex
              items-center

              text-3xl

              font-black

              tracking-wide

              mb-3
              "
            >
              <span className="text-white">K.</span>

              <span
                className="
                bg-linear-to-r
                from-sky-400
                to-cyan-300

                bg-clip-text
                text-transparent
                "
              >
                Habib
              </span>
            </Link>

            {/* DESCRIPTION */}
            <p
              className="
              text-slate-400

              max-w-md

              text-sm
              sm:text-base

              leading-7
              "
            >
              Frontend & MERN Stack Developer passionate about building modern,
              responsive and interactive web experiences.
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
            flex
            items-center

            gap-4
            "
          >
            {/* GITHUB */}
            <a
              href="https://github.com/kolyanhabib"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
              group

              w-12
              h-12

              rounded-full

              bg-white/3

              border border-white/10

              flex
              items-center
              justify-center

              text-slate-500

              hover:text-white
              hover:border-sky-400/20
              hover:bg-sky-500/10

              transition-all
              duration-300
              "
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/kolyanhabib"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
              group

              w-12
              h-12

              rounded-full

              bg-white/3

              border border-white/10

              flex
              items-center
              justify-center

              text-slate-500

              hover:text-white
              hover:border-sky-400/20
              hover:bg-sky-500/10

              transition-all
              duration-300
              "
            >
              <FaLinkedinIn />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:kolyanhabib@gmail.com"
              aria-label="Email"
              className="
              group

              w-12
              h-12

              rounded-full

              bg-white/3

              border border-white/10

              flex
              items-center
              justify-center

              text-slate-500

              hover:text-white
              hover:border-sky-400/20
              hover:bg-sky-500/10

              transition-all
              duration-300
              "
            >
              <FaEnvelope />
            </a>

            {/* TOP BUTTON */}
            <a
              href="#home"
              aria-label="Back To Top"
              className="
              w-12
              h-12

              rounded-full

              bg-linear-to-r
              from-sky-500
              to-cyan-400

              flex
              items-center
              justify-center

              text-white

              shadow-[0_10px_30px_rgba(56,189,248,0.35)]

              hover:scale-105

              transition-all
              duration-300
              "
            >
              <FaArrowUp />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
          border-t border-white/5

          mt-10
          pt-6

          text-center
          "
        >
          <p
            className="
            text-slate-500

            text-sm
            "
          >
            © 2026 Kolyan Habib. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
