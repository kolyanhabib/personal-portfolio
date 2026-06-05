"use client";

import { motion } from "framer-motion";

import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

export default function Education() {
  return (
    <section
      id="education"
      className="
      relative
      py-24
      sm:py-28
      lg:py-32
      overflow-hidden
      "
    >
      {/* LEFT BLUR */}
      <div
        className="
        blur-circle

        w-55
        h-55

        sm:w-80
        sm:h-80

        lg:w-105
        lg:h-105

        bg-sky-500/10

        top-0
        left-0
        "
      />

      {/* RIGHT BLUR */}
      <div
        className="
        blur-circle

        w-55
        h-55

        sm:w-80
        sm:h-80

        lg:w-105
        lg:h-105

        bg-cyan-500/10

        bottom-0
        right-0
        "
      />

      {/* GRID BACKGROUND */}
      <div
        className="
        absolute
        inset-0

        bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]

        bg-size[40px_40px]

        opacity-30
        "
      />

      <div
        className="
        container
        mx-auto

        px-5
        sm:px-8
        lg:px-12

        relative
        z-10
        "
      >
        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
          text-center

          mb-14
          sm:mb-16
          lg:mb-20
          "
        >
          {/* SMALL TITLE */}
          <p
            className="
            text-sky-400

            uppercase

            tracking-[5px]

            text-xs
            sm:text-sm

            mb-4
            "
          >
            Education
          </p>

          {/* MAIN TITLE */}
          <h2
            className="
            font-black

            leading-tight

            text-3xl
            sm:text-4xl
            lg:text-5xl
            "
          >
            Academic{" "}
            <span
              className="
              bg-linear-to-r
              from-sky-400
              to-cyan-300

              bg-clip-text
              text-transparent
              "
            >
              Journey
            </span>
          </h2>

          {/* LINE */}
          <div
            className="
            w-24
            h-1

            rounded-full

            bg-linear-to-r
            from-sky-400
            to-cyan-300

            mx-auto

            mt-6
            "
          />
        </motion.div>

        {/* EDUCATION CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
          relative

          glass

          rounded-[28px]
          sm:rounded-4xl

          border border-white/10

          overflow-hidden

          shadow-[0_10px_50px_rgba(0,0,0,0.35)]
          "
        >
          {/* TOP GLOW LINE */}
          <div
            className="
            absolute
            top-0
            left-0

            w-full
            h-px

            bg-linear-to-r
            from-transparent
            via-sky-400/40
            to-transparent
            "
          />

          <div
            className="
            p-6
            sm:p-8
            lg:p-10
            "
          >
            <div
              className="
              flex

              flex-col
              lg:flex-row

              gap-8
              lg:gap-10
              "
            >
              {/* LEFT ICON */}
              <div
                className="
                flex
                justify-center
                lg:justify-start
                "
              >
                <div
                  className="
                  relative

                  w-20
                  h-20

                  sm:w-24
                  sm:h-24

                  rounded-3xl

                  bg-sky-500/10

                  border border-sky-400/20

                  flex
                  items-center
                  justify-center

                  text-sky-400

                  text-3xl
                  sm:text-4xl

                  shrink-0
                  "
                >
                  {/* ICON GLOW */}
                  <div
                    className="
                    absolute
                    inset-0

                    rounded-3xl

                    bg-sky-400/10

                    blur-2xl
                    "
                  />

                  <FaGraduationCap className="relative z-10" />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1">
                {/* DEGREE BADGE */}
                <div
                  className="
                  inline-flex
                  items-center
                  gap-2

                  px-4
                  py-2

                  rounded-full

                  bg-sky-500/10

                  border border-sky-400/20

                  text-sky-300

                  text-xs
                  sm:text-sm

                  mb-5
                  "
                >
                  <FaBookOpen />
                  Bachelor Degree
                </div>

                {/* COLLEGE */}
                <h3
                  className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl

                  font-bold

                  leading-tight

                  mb-4
                  "
                >
                  Netrokona Govt. College
                </h3>

                {/* SUBJECT */}
                <p
                  className="
  text-slate-300

  text-base
  sm:text-lg

  mb-3
  "
                >
                  Department of Physics
                </p>

                {/* YEAR */}
                <div
                  className="
                  inline-flex
                  items-center
                  gap-2

                  text-slate-500

                  text-sm
                  sm:text-base

                  mb-6
                  "
                >
                  <FaCalendarAlt />
                  Expected Graduation: 2029
                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                  text-slate-400

                  leading-7
                  sm:leading-8

                  text-sm
                  sm:text-base
                  lg:text-lg

                  max-w-3xl
                  "
                >
                  Currently pursuing a Bachelor degree while continuously
                  improving frontend development skills through modern web
                  technologies, real-world projects and self-learning. Focused
                  on building responsive UI, scalable frontend architecture and
                  interactive web applications using React, Next.js and modern
                  development tools.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
