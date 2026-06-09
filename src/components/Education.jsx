"use client";

import { motion } from "framer-motion";

import {
  FaGraduationCap,
  FaCalendarAlt,
  FaBookOpen,
  FaAtom,
} from "react-icons/fa";

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
      {/* GRID BACKGROUND */}
      <div
        className="
        absolute
        inset-0

        bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]

        bg-size-[40px_40px]

        opacity-30
        "
      />

      {/* LEFT GLOW */}
      <div
        className="
        blur-circle

        w-65
        h-65

        sm:w-100
        sm:h-100

        bg-sky-500/10

        top-0
        left-0
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
        blur-circle

        w-65
        h-65

        sm:w-100
        sm:h-100

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

        relative
        z-10
        "
      >
        {/* HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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

          mb-16
          sm:mb-20
          "
        >
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

        {/* MAIN CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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

          overflow-hidden

          rounded-4xl

          bg-[#081121]/80

          backdrop-blur-xl

          border border-white/10

          shadow-[0_10px_60px_rgba(0,0,0,0.35)]
          "
        >
          {/* TOP LIGHT */}
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

          {/* CONTENT */}
          <div
            className="
            grid
            lg:grid-cols-[320px_1fr]
            "
          >
            {/* LEFT SIDE */}
            <div
              className="
              relative

              border-b
              lg:border-b-0
              lg:border-r

              border-white/10

              p-8
              sm:p-10

              flex
              flex-col
              items-center
              justify-center

              text-center
              "
            >
              {/* ICON */}
              <div
                className="
                relative

                w-28
                h-28

                rounded-full

                bg-sky-500/10

                border border-sky-400/20

                flex
                items-center
                justify-center

                text-sky-400

                text-5xl

                mb-7
                "
              >
                {/* GLOW */}
                <div
                  className="
                  absolute
                  inset-0

                  rounded-full

                  bg-sky-400/20

                  blur-3xl
                  "
                />

                <FaGraduationCap className="relative z-10" />
              </div>

              {/* DEGREE */}
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

              {/* YEAR */}
              <div
                className="
                flex
                items-center
                gap-2

                text-slate-400

                text-sm
                sm:text-base
                "
              >
                <FaCalendarAlt />
                2025 - 2029
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
              p-7
              sm:p-10
              lg:p-12
              "
            >
              {/* COLLEGE */}
              <h3
                className="
                text-2xl
                sm:text-3xl
                lg:text-4xl

                font-black

                leading-tight

                mb-5
                "
              >
                Netrokona Govt. College
              </h3>

              {/* SUBJECT */}
              <div
                className="
                flex
                flex-wrap

                items-center

                gap-3

                mb-7
                "
              >
                <div
                  className="
                  inline-flex
                  items-center
                  gap-2

                  px-4
                  py-2

                  rounded-full

                  bg-cyan-500/10

                  border border-cyan-400/20

                  text-cyan-300

                  text-sm
                  "
                >
                  <FaAtom />
                  Department of Physics
                </div>

                <div
                  className="
                  inline-flex

                  px-4
                  py-2

                  rounded-full

                  bg-white/5

                  border border-white/10

                  text-slate-300

                  text-sm
                  "
                >
                  Undergraduate Student
                </div>
              </div>

              {/* DESCRIPTION */}
              <p
                className="
  text-slate-400

  leading-8

  text-sm
  sm:text-base
  lg:text-lg

  mb-8
  "
              >
                Currently pursuing a Bachelor&apos;s degree in Physics while
                continuously improving frontend and MERN stack development
                skills through self-learning, modern technologies and real-world
                projects. Passionate about creating responsive user interfaces,
                interactive web experiences and scalable full-stack web
                applications using React, Next.js, Node.js, Express.js, MongoDB
                and Tailwind CSS.
              </p>

              {/* BOTTOM STATS */}
              <div
                className="
                grid

                sm:grid-cols-3

                gap-4
                "
              >
                {/* CARD */}
                {/* CARD */}
                <div
                  className="
  rounded-2xl

  bg-white/5

  border border-white/10

  p-5
  "
                >
                  <p className="text-slate-500 text-sm mb-2">Focus Area</p>

                  <h4 className="font-semibold text-white">
                    Frontend & MERN Stack
                  </h4>
                </div>

                {/* CARD */}
                <div
                  className="
                  rounded-2xl

                  bg-white/5

                  border border-white/10

                  p-5
                  "
                >
                  <p className="text-slate-500 text-sm mb-2">Current Status</p>

                  <h4 className="font-semibold text-white">
                    Learning & Building
                  </h4>
                </div>

                {/* CARD */}
                <div
                  className="
                  rounded-2xl

                  bg-white/5

                  border border-white/10

                  p-5
                  "
                >
                  <p className="text-slate-500 text-sm mb-2">Graduation</p>

                  <h4 className="font-semibold text-white">Expected 2029</h4>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
