"use client";

import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

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
    name: "GitHub",
    level: "85%",
    icon: <FaGithub />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-10 overflow-hidden">
      {/* Background Blur */}
      <div className="blur-circle w-87.5 h-87.5 bg-cyan-500/10 top-0 left-0" />

      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sky-400 uppercase tracking-[5px] mb-4">
            My Skills
          </p>

          <h2
            className="
            text-4xl
            md:text-5xl
            font-black
            "
          >
            Technologies I
            <span className="bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              {" "}
              Work With
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
              glass
              p-7
              rounded-[28px]
              hover:-translate-y-2
              transition duration-300
              "
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div
                    className="
                    text-3xl
                    text-sky-400
                    "
                  >
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                <p className="text-sky-400 font-semibold">{skill.level}</p>
              </div>

              {/* Progress */}
              <div
                className="
                h-3
                bg-slate-800
                rounded-full
                overflow-hidden
                "
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
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
                  shadow-[0_0_20px_rgba(56,189,248,0.5)]
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
