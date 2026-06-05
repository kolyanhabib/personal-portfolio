const projects = [
  {
    id: "idea-vault",

    title: "IdeaVault Platform",

    image: "/project1.png",

    description:
      "A modern full-stack idea sharing platform where users can create, explore and manage innovative ideas with authentication and category filtering.",

    challenges:
      "Implementing secure authentication, protected routes, dynamic category filtering and maintaining a scalable full-stack architecture.",

    future:
      "Add like & save ideas, real-time notifications, comments system, image uploads and advanced user analytics.",

    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
      "HeroUI",
    ],

    live: "https://idea-vault-client-2l21.vercel.app/",

    clientGithub: "https://github.com/kolyanhabib/idea-vault-client",

    serverGithub: "https://github.com/kolyanhabib/idea-vault-server",
  },

  {
    id: "keenkeeper",

    title: "KeenKeeper App",

    image: "/project2.png",

    description:
      "A friendship management web application that helps users track calls, texts and interactions while visualizing communication history.",

    tech: ["React.js", "Vite", "Tailwind CSS", "React Router", "Recharts"],

    live: "https://keen-keeper-jet.vercel.app/",

    github: "https://github.com/kolyanhabib/keen-keeper",

    challenges:
      "Building dynamic interaction tracking, analytics visualization and responsive UI for all screen sizes.",

    future:
      "Add authentication, real-time reminders, cloud storage and social sharing features.",
  },

  {
    id: "digitools-platform",

    title: "Digitools Platform",

    image: "/project3.png",

    description:
      "A modern platform to discover and manage digital tools with dynamic cart functionality and responsive user experience.",

    tech: ["React.js", "Tailwind CSS", "DaisyUI", "JavaScript", "HTML5"],

    live: "https://digitools-platform.vercel.app/",

    github: "https://github.com/kolyanhabib/digitools-platform",

    challenges:
      "Managing cart state efficiently while maintaining a smooth and clean responsive interface.",

    future:
      "Add authentication, payment integration, search filtering and backend database support.",
  },
];

export default projects;
