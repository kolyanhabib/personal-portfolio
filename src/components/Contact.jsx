"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
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
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://linkedin.com",
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
      py-20 sm:py-24 lg:py-32
      overflow-hidden
      "
    >
      {/* Background Blur */}
      <div
        className="
        blur-circle
        w-55
        h-55
        sm:w-87.5
        sm:h-87.5
        bg-sky-500/10
        bottom-0
        right-0
        "
      />

      <div
        className="
        blur-circle
        w-45
        h-45
        sm:w-65
        sm:h-65
        bg-cyan-400/5
        top-10
        left-0
        "
      />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="
          text-center
          mb-12 sm:mb-16 lg:mb-20
          "
        >
          <p className="text-sky-400 uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm mb-3 sm:mb-4">
            Get In Touch
          </p>

          <h2 className="font-black leading-[1.1] text-3xl sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something
            <br />
            <span
              className="bg-linear-to-r from-sky-400
              to-cyan-300 bg-clip-text text-transparent"
            >
              Amazing Together
            </span>
          </h2>
        </motion.div>
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-4xl p-6 sm:p-8 lg:p-10 border border-white/10 h-full"
          >
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Send a Message
            </h3>

            <p className="text-slate-400 mb-8">
              I&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm text-slate-400 mb-2">
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
          bg-white/5
          border border-white/10
          outline-none
          focus:border-sky-400/50
          transition
          "
                />
              </div>

              {/* Email */}
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
          bg-white/5
          border border-white/10
          outline-none
          focus:border-sky-400/50
          transition
          "
                />
              </div>

              {/* Message */}
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
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="
          w-full
          px-5 py-4
          rounded-2xl
          bg-white/5
          border border-white/10
          outline-none
          resize-none
          focus:border-sky-400/50
          transition
          "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
        gradient-btn
        w-full
        h-14
        flex items-center justify-center
        gap-3
        text-base
        shadow-lg shadow-sky-500/20
        "
              >
                <FaPaperPlane />

                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>

          {/* RIGHT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
  flex
  flex-col

  gap-4
  sm:gap-5
  lg:gap-6

  h-full
  "
          >
            {/* CARD */}
            {contacts.map((item, index) => (
              <div
                key={index}
                className="
      glass

      rounded-2xl
      sm:rounded-[28px]

      border border-white/10

      px-4 py-5
      sm:px-6 sm:py-7

      flex
      items-center

      gap-4
      sm:gap-5

      min-h-25
      sm:min-h-30

      hover:border-sky-400/20
      hover:-translate-y-1

      transition-all
      duration-300
      "
              >
                {/* ICON */}
                <div
                  className="
        w-12 h-12
        sm:w-14 sm:h-14

        rounded-xl
        sm:rounded-2xl

        bg-sky-500/10

        border border-sky-400/20

        flex
        items-center
        justify-center

        text-sky-400

        text-lg
        sm:text-xl

        shrink-0
        "
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div className="min-w-0 flex-1">
                  {/* TITLE */}
                  <p
                    className="
          text-slate-500

          text-[10px]
          sm:text-xs

          uppercase

          tracking-[2px]

          mb-1
          "
                  >
                    {item.title}
                  </p>

                  {/* VALUE */}
                  <h4
                    className="
          text-white

          font-semibold

          text-sm
          sm:text-base
          lg:text-lg

          leading-relaxed

          wrap-break-word
          "
                  >
                    {item.value}
                  </h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
