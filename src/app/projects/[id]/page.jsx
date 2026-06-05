import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Project Not Found</h1>
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-sky-400 hover:underline text-sm"
        >
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="relative py-24 sm:py-28 lg:py-32 overflow-hidden">
      <div className="blur-circle w-50 h-50 sm:w-75 sm:h-75 lg:w-100 lg:h-100 bg-purple-500/10 bottom-0 right-0" />
      <div className="blur-circle w-50 h-50 sm:w-75 sm:h-75 lg:w-100 lg:h-100 bg-sky-500/10 top-0 left-0" />

      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        {/* Back Button */}
        <div className="mb-8 sm:mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2.5 text-slate-400 hover:text-sky-400 text-sm sm:text-base group transition-colors duration-300"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">
              <FaArrowLeft />
            </span>
            Back To Projects
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[28px] lg:rounded-4xl border border-white/10 mb-10 sm:mb-12 lg:mb-14 shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={800}
            priority
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex flex-wrap gap-2">
            {project.tech?.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 text-white text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Title: OUTSIDE the grid ── */}
        <h1 className="font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-7 sm:mb-8 lg:mb-10">
          {project.title}
        </h1>

        {/* ── Content Grid: both cols start at same level ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 items-start">
          {/* LEFT: 3 cards */}
          <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-6">
            {/* Overview */}
            <div className="glass rounded-2xl sm:rounded-[28px] lg:rounded-4xl p-6 sm:p-7 lg:p-8 border border-white/10 hover:border-sky-400/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 text-sm">
                  <FaCode />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Project Overview
                </h2>
              </div>
              <p className="text-slate-400 leading-7 sm:leading-8 text-sm sm:text-base lg:text-lg">
                {project.description}
              </p>
            </div>

            {/* Challenges */}
            <div className="glass rounded-2xl sm:rounded-[28px] lg:rounded-4xl p-6 sm:p-7 lg:p-8 border border-white/10 hover:border-amber-400/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 text-sm">
                  <FaLightbulb />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Challenges
                </h2>
              </div>
              <p className="text-slate-400 leading-7 sm:leading-8 text-sm sm:text-base">
                {project.challenges}
              </p>
            </div>

            {/* Future */}
            <div className="glass rounded-2xl sm:rounded-[28px] lg:rounded-4xl p-6 sm:p-7 lg:p-8 border border-white/10 hover:border-purple-400/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-400 text-sm">
                  <FaRocket />
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  Future Improvements
                </h2>
              </div>
              <p className="text-slate-400 leading-7 sm:leading-8 text-sm sm:text-base">
                {project.future}
              </p>
            </div>
          </div>

          {/* RIGHT: sticky sidebar */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-5 sm:gap-6">
            {/* PROJECT LINKS */}
            <div
              className="
  glass
  rounded-2xl sm:rounded-[28px] lg:rounded-4xl
  p-6 sm:p-7 lg:p-8
  border border-white/10
  "
            >
              <h2
                className="
    text-lg sm:text-xl lg:text-2xl
    font-bold
    mb-5 sm:mb-6
    "
              >
                Project Links
              </h2>

              <div className="flex flex-col gap-3 sm:gap-4">
                {/* LIVE PROJECT */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      group
      flex items-center justify-between

      px-5 py-3.5
      sm:px-6 sm:py-4

      rounded-xl sm:rounded-2xl

      bg-linear-to-r
      from-sky-500
      to-cyan-400

      hover:from-sky-400
      hover:to-cyan-300

      shadow-lg shadow-sky-500/25
      hover:shadow-sky-500/40

      transition-all duration-300

      font-semibold
      text-sm sm:text-base
      "
                >
                  <span>Live Project</span>

                  <FaExternalLinkAlt />
                </a>

                {/* CLIENT REPO */}
                {project.clientGithub && (
                  <a
                    href={project.clientGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        group
        flex items-center justify-between

        px-5 py-3.5
        sm:px-6 sm:py-4

        rounded-xl sm:rounded-2xl

        border border-white/10

        hover:border-sky-400/35
        hover:bg-white/5

        transition-all duration-300

        font-semibold
        text-sm sm:text-base
        "
                  >
                    <span>Client Repository</span>

                    <FaGithub />
                  </a>
                )}

                {/* SERVER REPO */}
                {project.serverGithub && (
                  <a
                    href={project.serverGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        group
        flex items-center justify-between

        px-5 py-3.5
        sm:px-6 sm:py-4

        rounded-xl sm:rounded-2xl

        border border-white/10

        hover:border-sky-400/35
        hover:bg-white/5

        transition-all duration-300

        font-semibold
        text-sm sm:text-base
        "
                  >
                    <span>Server Repository</span>

                    <FaGithub />
                  </a>
                )}

                {/* SINGLE GITHUB */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        group
        flex items-center justify-between

        px-5 py-3.5
        sm:px-6 sm:py-4

        rounded-xl sm:rounded-2xl

        border border-white/10

        hover:border-sky-400/35
        hover:bg-white/5

        transition-all duration-300

        font-semibold
        text-sm sm:text-base
        "
                  >
                    <span>GitHub Repository</span>

                    <FaGithub />
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass rounded-2xl sm:rounded-[28px] lg:rounded-4xl p-6 sm:p-7 lg:p-8 border border-white/10">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-5 sm:mb-6">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-sky-500/10 border border-sky-400/20 hover:border-sky-400/50 hover:bg-sky-500/15 text-sky-300 text-xs sm:text-sm transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
