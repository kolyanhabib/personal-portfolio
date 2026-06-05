"use client";

import projects from "@/data/projects";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
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

        w-[280px]
        h-[280px]

        sm:w-[420px]
        sm:h-[420px]

        bg-sky-500/10

        top-0
        left-0
        "
      />

      {/* RIGHT BLUR */}
      <div
        className="
        blur-circle

        w-[280px]
        h-[280px]

        sm:w-[420px]
        sm:h-[420px]

        bg-cyan-500/10

        bottom-0
        right-0
        "
      />

      {/* GRID BG */}
      <div
        className="
        absolute
        inset-0

        bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]

        bg-[size:40px_40px]

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
          sm:mb-18
          lg:mb-22
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
            My Portfolio
          </p>

          {/* BIG TITLE */}
          <h2
            className="
            font-black

            leading-tight

            text-3xl
            sm:text-4xl
            lg:text-5xl
            "
          >
            Featured{" "}
            <span
              className="
              bg-gradient-to-r
              from-sky-400
              to-cyan-300

              bg-clip-text
              text-transparent
              "
            >
              Projects
            </span>
          </h2>

          {/* LINE */}
          <div
            className="
            w-24
            h-[4px]

            rounded-full

            bg-gradient-to-r
            from-sky-400
            to-cyan-300

            mx-auto

            mt-6
            "
          />
        </motion.div>

        {/* PROJECT GRID */}
        <div
          className="
          grid

          sm:grid-cols-2
          xl:grid-cols-3

          gap-6
          lg:gap-8
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
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
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="
              group

              relative

              rounded-[28px]

              overflow-hidden

              bg-[#081121]/80

              backdrop-blur-xl

              border border-white/8

              hover:border-sky-400/20

              transition-all
              duration-500

              hover:-translate-y-3

              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              "
            >
              {/* TOP GLOW */}
              <div
                className="
                absolute
                top-0
                left-0

                w-full
                h-px

                bg-gradient-to-r
                from-transparent
                via-sky-400/40
                to-transparent

                opacity-0
                group-hover:opacity-100

                transition
                duration-500
                "
              />

              {/* IMAGE */}
              <div
                className="
                relative

                overflow-hidden
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="
                  w-full

                  h-[220px]
                  sm:h-[240px]

                  object-cover

                  group-hover:scale-110

                  transition-transform
                  duration-700
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-[#020617]
                  via-[#020617]/30
                  to-transparent
                  "
                />

                {/* LIVE ICON */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  absolute
                  top-4
                  right-4

                  w-11
                  h-11

                  rounded-full

                  bg-black/40

                  backdrop-blur-md

                  border border-white/10

                  flex
                  items-center
                  justify-center

                  text-white

                  hover:bg-sky-500
                  hover:scale-110

                  transition-all
                  duration-300
                  "
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              {/* CONTENT */}
              <div
                className="
                p-6
                sm:p-7
                "
              >
                {/* TECH STACK */}
                <div
                  className="
                  flex
                  flex-wrap

                  gap-2

                  mb-5
                  "
                >
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="
                      px-3
                      py-1.5

                      rounded-full

                      text-xs
                      sm:text-sm

                      bg-sky-500/10

                      border border-sky-400/10

                      text-sky-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3
                  className="
                  text-xl
                  sm:text-2xl

                  font-bold

                  mb-4
                  "
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                  text-slate-400

                  leading-7

                  text-sm
                  sm:text-base

                  mb-7
                  "
                >
                  {project.description}
                </p>

                {/* FOOTER */}
                <div
                  className="
                  flex
                  items-center
                  justify-between
                  "
                >
                  {/* DETAILS BTN */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="
                    inline-flex
                    items-center

                    gap-2

                    text-sky-400

                    font-semibold

                    hover:gap-3

                    transition-all
                    duration-300
                    "
                  >
                    View Details
                    <FaArrowRight />
                  </Link>

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    w-11
                    h-11

                    rounded-full

                    bg-white/5

                    border border-white/10

                    flex
                    items-center
                    justify-center

                    text-slate-300

                    hover:text-sky-400
                    hover:border-sky-400/20
                    hover:bg-sky-500/10

                    transition-all
                    duration-300
                    "
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
