"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "Frontend Projects",
  },

  {
    number: "1+",
    title: "Years Learning",
  },

  {
    number: "100%",
    title: "Responsive UI",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
      relative
      py-20
      sm:py-24
      lg:py-32
      overflow-hidden
      "
    >
      {/* Background Blur */}
      <div
        className="
        blur-circle

        w-55
        h-5

        sm:w-80
        sm:h-80

        bg-sky-500/10

        top-0
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
        "
      >
        {/* SECTION TITLE */}
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
            duration: 0.6,
          }}
          className="
          text-center
          mb-14
          sm:mb-16
          lg:mb-20
          "
        >
          <p
            className="
            text-sky-400

            uppercase

            tracking-[4px]
            sm:tracking-[5px]

            text-xs
            sm:text-sm

            mb-4
            "
          >
            About Me
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
            Passionate About
            <span
              className="
              bg-linear-to-r
              from-sky-400
              to-cyan-300

              bg-clip-text
              text-transparent
              "
            >
              {" "}
              Modern Web Development
            </span>
          </h2>
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

        {/* CONTENT */}
        <div
          className="
          grid
          lg:grid-cols-2

          gap-8
          lg:gap-12

          items-center
          "
        >
          {/* LEFT CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            glass

            p-6
            sm:p-8
            lg:p-10

            rounded-3xl
            sm:rounded-4xl

            border border-white/10
            "
          >
            <p
              className="
              text-slate-300

              text-sm
              sm:text-base
              lg:text-lg

              leading-7
              sm:leading-8
              lg:leading-9
              "
            >
              I started my programming journey with
              <span className="text-sky-400 font-semibold"> HTML & CSS</span>,
              then gradually moved into
              <span className="text-sky-400 font-semibold"> JavaScript</span>,
              <span className="text-sky-400 font-semibold"> React</span> and{" "}
              <span className="text-sky-400 font-semibold">Next.js</span>
              .
              <br />
              <br />
              I enjoy building modern UI, responsive websites and interactive
              user experiences with clean and scalable frontend architecture.
              <br />
              <br />
              Currently, I am focused on improving my frontend development
              skills by building real-world projects and learning modern web
              technologies.
            </p>
          </motion.div>

          {/* RIGHT STATS */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            grid

            grid-cols-1
            sm:grid-cols-3
            lg:grid-cols-1

            gap-4
            sm:gap-5
            lg:gap-6
            "
          >
            {stats.map((item, index) => (
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
                  delay: index * 0.15,
                }}
                className="
                glass

                p-5
                sm:p-6
                lg:p-8

                rounded-2xl
                sm:rounded-3xl

                text-center

                hover:-translate-y-2

                transition-all
                duration-300
                "
              >
                {/* NUMBER */}
                <h3
                  className="
                  font-black

                  text-sky-400

                  mb-2
                  lg:mb-3

                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  "
                >
                  {item.number}
                </h3>

                {/* TITLE */}
                <p
                  className="
                  text-slate-400

                  text-sm
                  sm:text-base

                  leading-snug
                  "
                >
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
