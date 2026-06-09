"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import {FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      flex items-center
      overflow-hidden

      pt-28
      pb-16

      sm:pt-32
      sm:pb-20

      md:pt-24
      "
    >
      {/* GRID BACKGROUND */}
      <div
        className="
        absolute
        inset-0

        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]

        bg-size[40px_40px]

        opacity-40
        "
      />

      {/* LEFT BLUR */}
      <div
        className="
        blur-circle

        w-65
        h-65

        sm:w-105
        sm:h-105

        bg-sky-500/20

        top-0
        left-0
        "
      />

      {/* RIGHT BLUR */}
      <div
        className="
        blur-circle

        w-65
        h-65

        sm:w-105
        sm:h-105

        bg-cyan-500/10

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

        grid
        grid-cols-1
        md:grid-cols-2

        gap-14
        lg:gap-20

        items-center
        relative
        z-10
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          order-2 md:order-1

          text-center
          md:text-left
          "
        >
          {/* SMALL TEXT */}
          <p
            className="
            text-sky-400

            font-medium

            text-base
            sm:text-lg

            mb-3
            "
          >
            Hello, I&apos;m
          </p>

          {/* NAME */}
          <h1
            className="
            font-black

            text-white

            leading-tight

            mb-4

            text-[3rem]

            sm:text-[4rem]

            lg:text-[5rem]
            "
          >
            Kolyan Habib
          </h1>

          {/* ROLE */}
          <div
            className="
            flex

            items-center

            justify-center
            md:justify-start

            gap-2

            flex-wrap

            mb-7

            text-lg
            sm:text-2xl
            lg:text-3xl

            font-bold
            "
          >
            {/* STATIC TEXT */}
            <span className="text-white">I&apos;m a</span>

            {/* TYPING ANIMATION */}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,

                "React Developer",
                2000,

                "Next.js Enthusiast",
                2000,

                "MERN Stack Learner",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="
              bg-linear-to-r

              from-sky-400
              to-cyan-300

              bg-clip-text
              text-transparent
              "
            />
          </div>

          {/* DESCRIPTION */}
          <p
            className="
            text-slate-400

            leading-8

            text-sm
            sm:text-base
            lg:text-lg

            max-w-xl

            mx-auto
            md:mx-0

            mb-8
            "
          >
            I create beautiful, responsive and interactive web applications
            using React, Next.js, Tailwind CSS and modern frontend technologies.
          </p>

          {/* BUTTON + SOCIAL */}
          <div
            className="
            flex

            flex-col
            sm:flex-row

            items-center

            justify-center
            md:justify-start

            gap-4
            "
          >
            {/* DOWNLOAD BUTTON */}
            <a
              href="/resume.pdf"
              download
              className="
              gradient-btn

              min-w-55

              px-8
              py-4

              flex
              items-center
              justify-center

              gap-3

              shadow-[0_0_35px_rgba(56,189,248,0.35)]

              hover:scale-105

              transition-all
              duration-300
              "
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="
          order-1 md:order-2

          flex
          justify-center
          md:justify-end
          "
        >
          <div className="relative isolate">
            {/* GLOW */}
            <div
              className="
              absolute
              inset-0

              rounded-full

              bg-sky-500/20

              blur-3xl

              scale-110
              "
            />

            {/* ANIMATED RING */}
            <div
              className="
              absolute
              -inset-3

              rounded-full

              border-[3px]
              border-transparent

              bg-linear-to-r
              from-sky-400
              via-cyan-300
              to-sky-500

              animate-[spin_8s_linear_infinite]
              "
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                padding: "3px",
              }}
            />

            {/* IMAGE */}
            <Image
              src="/profile.png"
              alt="Kolyan Habib"
              width={420}
              height={420}
              priority
              className="
              relative

              rounded-full

              object-cover

              bg-white

              w-47.5
              h-47.5

              sm:w-65
              sm:h-65

              md:w-85
              md:h-85

              lg:w-105
              lg:h-105
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
