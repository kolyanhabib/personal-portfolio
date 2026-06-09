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

        w-70
        h-70

        sm:w-105
        sm:h-105

        bg-sky-500/10

        top-0
        left-0
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
        blur-circle

        w-70
        h-70

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
            My Projects
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
            Featured{" "}
            <span
              className="
              bg-linear-to-r
              from-sky-400
              to-cyan-300

              bg-clip-text
              text-transparent
              "
            >
              Work
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

        {/* PROJECTS */}
        <div
          className="
          flex
          flex-col

          gap-8
          lg:gap-10
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
                delay: index * 0.1,
              }}
              className="
              group

              relative

              overflow-hidden

              rounded-4xl

              bg-[#081121]/85

              backdrop-blur-xl

              border border-white/10

              hover:border-sky-400/20

              transition-all
              duration-500

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
                via-sky-400/50
                to-transparent
                "
              />

              <div
                className="
                grid
                lg:grid-cols-2

                items-center
                "
              >
                {/* IMAGE SIDE */}
                <div
                  className="
                  relative

                  overflow-hidden

                  h-65
                  sm:h-80
                  lg:h-full
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={700}
                    className="
                    w-full
                    h-full

                    object-cover

                    group-hover:scale-105

                    transition-transform
                    duration-700
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                    absolute
                    inset-0

                    bg-linear-to-r
                    from-black/40
                    via-transparent
                    to-transparent
                    "
                  />

                  {/* LIVE BTN */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    absolute
                    top-5
                    right-5

                    w-12
                    h-12

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
                  sm:p-8
                  lg:p-10
                  "
                >
                  {/* NUMBER */}
                  <p
                    className="
                    text-sky-400/70

                    text-sm

                    tracking-[3px]

                    uppercase

                    mb-4
                    "
                  >
                    Project 0{index + 1}
                  </p>

                  {/* TITLE */}
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
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                    text-slate-400

                    leading-8

                    text-sm
                    sm:text-base

                    mb-7
                    "
                  >
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div
                    className="
                    flex
                    flex-wrap

                    gap-3

                    mb-8
                    "
                  >
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="
                        px-4
                        py-2

                        rounded-full

                        text-xs
                        sm:text-sm

                        bg-sky-500/10

                        border border-sky-400/10

                        text-sky-300

                        hover:border-sky-400/30
                        hover:bg-sky-500/15

                        transition-all
                        duration-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div
                    className="
                    flex
                    items-center

                    gap-4

                    flex-wrap
                    "
                  >
                    {/* DETAILS */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="
                      inline-flex
                      items-center

                      gap-3

                      px-6
                      py-3.5

                      rounded-full

                      bg-linear-to-r
                      from-sky-500
                      to-cyan-400

                      hover:from-sky-400
                      hover:to-cyan-300

                      text-white

                      font-semibold

                      shadow-[0_0_30px_rgba(56,189,248,0.35)]

                      hover:scale-105

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
                      w-12
                      h-12

                      rounded-full

                      bg-white/5

                      border border-white/10

                      flex
                      items-center
                      justify-center

                      text-slate-300

                      hover:text-sky-400
                      hover:border-sky-400/30
                      hover:bg-sky-500/10

                      transition-all
                      duration-300
                      "
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
