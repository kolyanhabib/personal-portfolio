"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "kolyanhabib@gmail.com",
    link: "mailto:kolyanhabib@gmail.com",
  },

  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+8801969798259",
    link: "tel:+8801969798259",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Mymensingh, Bangladesh",
    link: "#",
  },
];

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/kolyanhabib",
  },

  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/kolyanhabib",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,

        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,

        {
          name: form.name,
          email: form.email,
          message: form.message,
        },

        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="
      relative
      py-20
      sm:py-24
      lg:py-32
      overflow-hidden
      "
    >
      {/* LEFT BLUR */}
      <div
        className="
        blur-circle

        w-60
        h-60

        sm:w-96
        sm:h-96

        bg-sky-500/10

        top-0
        left-0
        "
      />

      {/* RIGHT BLUR */}
      <div
        className="
        blur-circle

        w-60
        h-60

        sm:w-96
        sm:h-96

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

        bg-size-[40px_40px]

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

            tracking-[5px]

            text-xs
            sm:text-sm

            mb-4
            "
          >
            Get In Touch
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
            Let&apos;s Build Something
            <br />
            <span
              className="
              bg-linear-to-r
              from-sky-400
              to-cyan-300

              bg-clip-text
              text-transparent
              "
            >
              Amazing Together
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

        {/* MAIN GRID */}
        <div
          className="
          grid

          lg:grid-cols-[1.1fr_0.9fr]

          gap-8
          lg:gap-10

          items-stretch
          "
        >
          {/* LEFT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
            relative

            rounded-[30px]

            border border-white/10

            bg-[#081121]/80

            backdrop-blur-2xl

            overflow-hidden

            shadow-[0_10px_50px_rgba(0,0,0,0.35)]

            h-full
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

              bg-linear-to-r
              from-transparent
              via-sky-400/50
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
              <h3
                className="
                text-2xl
                sm:text-3xl

                font-black

                mb-3
                "
              >
                Send a Message
              </h3>

              <p
                className="
                text-slate-400

                mb-8
                "
              >
                I&apos;ll get back to you within 24 hours.
              </p>

              <form
                onSubmit={handleSubmit}
                className="
                space-y-5
                "
              >
                {/* NAME */}
                <div>
                  <label
                    className="
                    block

                    text-sm
                    text-slate-400

                    mb-2
                    "
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="
                    w-full
                    h-14

                    px-5

                    rounded-2xl

                    bg-white/4

                    border border-white/10

                    outline-none

                    text-white
                    placeholder:text-slate-500

                    focus:border-sky-400/40
                    focus:bg-white/6

                    transition-all
                    duration-300
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    className="
                    block

                    text-sm
                    text-slate-400

                    mb-2
                    "
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="
                    w-full
                    h-14

                    px-5

                    rounded-2xl

                    bg-white/4

                    border border-white/10

                    outline-none

                    text-white
                    placeholder:text-slate-500

                    focus:border-sky-400/40
                    focus:bg-white/6

                    transition-all
                    duration-300
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    className="
                    block

                    text-sm
                    text-slate-400

                    mb-2
                    "
                  >
                    Message
                  </label>

                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="
                    w-full

                    px-5
                    py-4

                    rounded-2xl

                    bg-white/4

                    border border-white/10

                    outline-none
                    resize-none

                    text-white
                    placeholder:text-slate-500

                    focus:border-sky-400/40
                    focus:bg-white/6

                    transition-all
                    duration-300
                    "
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                  group

                  w-full
                  h-14

                  rounded-2xl

                  bg-linear-to-r
                  from-sky-500
                  to-cyan-400

                  flex
                  items-center
                  justify-center

                  gap-3

                  font-semibold

                  shadow-[0_10px_40px_rgba(56,189,248,0.35)]

                  hover:scale-[1.01]

                  transition-all
                  duration-300
                  "
                >
                  <FaPaperPlane
                    className="
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                    "
                  />

                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <p
                    className="
                    text-green-400

                    text-center
                    text-sm
                    "
                  >
                    Message sent successfully!
                  </p>
                )}

                {status === "error" && (
                  <p
                    className="
                    text-red-400

                    text-center
                    text-sm
                    "
                  >
                    Something went wrong.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
            flex
            flex-col

            gap-5

            h-full
            "
          >
            {/* CONTACT CARDS */}
            {contacts.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="
                group

                relative

                flex-1

                rounded-[28px]

                border border-white/10

                bg-[#081121]/80

                backdrop-blur-2xl

                overflow-hidden

                px-5
                py-6

                sm:px-7
                sm:py-7

                flex
                items-center

                gap-5

                hover:border-sky-400/20
                hover:-translate-y-1

                transition-all
                duration-300
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

                  bg-linear-to-r
                  from-transparent
                  via-sky-400/30
                  to-transparent

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-300
                  "
                />

                {/* ICON */}
                <div
                  className="
                  relative

                  w-14
                  h-14

                  rounded-2xl

                  bg-sky-500/10

                  border border-sky-400/20

                  flex
                  items-center
                  justify-center

                  text-sky-400
                  text-xl

                  shrink-0
                  "
                >
                  <div
                    className="
                    absolute
                    inset-0

                    rounded-2xl

                    bg-sky-400/10

                    blur-xl
                    "
                  />

                  <span className="relative z-10">{item.icon}</span>
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <p
                    className="
                    text-slate-500

                    uppercase

                    tracking-[3px]

                    text-[11px]

                    mb-1
                    "
                  >
                    {item.title}
                  </p>

                  <h4
                    className="
                    text-white

                    font-semibold

                    text-sm
                    sm:text-lg

                    leading-relaxed

                    break-all
                    "
                  >
                    {item.value}
                  </h4>
                </div>
              </a>
            ))}

            {/* SOCIAL CARD */}
            <div
              className="
              rounded-[28px]

              border border-white/10

              bg-[#081121]/80

              backdrop-blur-2xl

              px-6
              py-7

              flex
              items-center
              justify-center

              gap-4
              "
            >
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                  group

                  relative

                  w-14
                  h-14

                  rounded-2xl

                  bg-white/4

                  border border-white/10

                  flex
                  items-center
                  justify-center

                  text-slate-400
                  text-lg

                  overflow-hidden

                  hover:text-sky-400
                  hover:border-sky-400/30
                  hover:bg-sky-500/10

                  hover:-translate-y-1

                  transition-all
                  duration-300
                  "
                >
                  {/* GLOW */}
                  <div
                    className="
                    absolute
                    inset-0

                    bg-sky-400/10

                    opacity-0
                    group-hover:opacity-100

                    blur-xl

                    transition-all
                    duration-300
                    "
                  />

                  <span className="relative z-10">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
