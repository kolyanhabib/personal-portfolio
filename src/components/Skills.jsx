"use client";

import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,

} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    level: "95%",
    icon: <FaHtml5 />,
  },

  {
    name: "CSS3",
    level: "90%",
    icon: <FaCss3Alt />,
  },

  {
    name: "JavaScript",
    level: "85%",
    icon: <FaJs />,
  },

  {
    name: "React",
    level: "88%",
    icon: <FaReact />,
  },

  {
    name: "Next.js",
    level: "80%",
    icon: <SiNextdotjs />,
  },

  {
    name: "Tailwind CSS",
    level: "92%",
    icon: <SiTailwindcss />,
  },

  {
    name: "MongoDB",
    level: "75%",
    icon: <SiMongodb />,
  },

  {
    name: "GitHub",
    level: "85%",
    icon: <FaGithub />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
      relative
      py-24
      sm:py-28
      lg:py-32
      overflow-hidden
      "
    >
      {/* BACKGROUND GRID */}
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
            My Skills
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
            Technologies I{" "}
            <span
              className="
              bg-linear-to-r
              from-sky-400
              to-cyan-300

              bg-clip-text
              text-transparent
              "
            >
              Work With
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

        {/* SKILLS GRID */}
        <div
          className="
          grid

          sm:grid-cols-2
          xl:grid-cols-4

          gap-5
          lg:gap-6
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
              group

              relative

              overflow-hidden

              rounded-[30px]

              bg-[#081121]/80

              backdrop-blur-xl

              border border-white/10

              p-6
              sm:p-7

              hover:-translate-y-3
              hover:border-sky-400/20

              transition-all
              duration-500

              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
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

                opacity-0
                group-hover:opacity-100

                transition
                duration-500
                "
              />

              {/* ICON */}
              <div
                className="
                relative

                w-16
                h-16

                rounded-2xl

                bg-sky-500/10

                border border-sky-400/20

                flex
                items-center
                justify-center

                text-3xl

                text-sky-400

                mb-6

                group-hover:scale-110
                group-hover:rotate-6

                transition-all
                duration-500
                "
              >
                {skill.icon}

                {/* ICON GLOW */}
                <div
                  className="
                  absolute
                  inset-0

                  rounded-2xl

                  bg-sky-400/10

                  blur-xl

                  opacity-0
                  group-hover:opacity-100

                  transition
                  duration-500
                  "
                />
              </div>

              {/* NAME + PERCENT */}
              <div
                className="
                flex
                items-center
                justify-between

                mb-4
                "
              >
                <h3
                  className="
                  text-lg
                  sm:text-xl

                  font-bold
                  "
                >
                  {skill.name}
                </h3>

                <span
                  className="
                  text-sky-400

                  text-sm
                  sm:text-base

                  font-semibold
                  "
                >
                  {skill.level}
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div
                className="
                relative

                h-2.5

                rounded-full

                overflow-hidden

                bg-white/5
                "
              >
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: skill.level,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                  }}
                  className="
                  h-full

                  rounded-full

                  bg-linear-to-r
                  from-sky-400
                  to-cyan-300

                  shadow-[0_0_25px_rgba(56,189,248,0.6)]
                  "
                />
              </div>

              {/* BOTTOM TEXT */}
              <p
                className="
                text-slate-500

                text-sm

                mt-5
                "
              >
                Building modern and responsive web applications with{" "}
                {skill.name}.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
