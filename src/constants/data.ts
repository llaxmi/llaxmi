import p2 from "../assets/bmi.png";
import p5 from "../assets/cine.png";
import p6 from "../assets/gena.png";
import p3 from "../assets/ideapulse.png";
import p1 from "../assets/summarizer.png";
import p4 from "../assets/wander.png";

import a1 from "../assets/aircanvas.png";
import h1 from "../assets/valentine.png";
import pa from "../assets/palette.png";

import c1 from "../assets/achievements/LUD.jpeg";
import c2 from "../assets/achievements/cfc.jpeg";
import c4 from "../assets/achievements/hoc.jpg";
import ideathon from "../assets/achievements/ideathon.jpg";
import mentor from "../assets/achievements/mentor.png";
import sisu from "../assets/achievements/sisu.jpeg";

export interface NavigationItem {
  title: string;
  target: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string;
  githubLink: string;
  date: string;
  image: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

export const navigation: NavigationItem[] = [
  { title: "About", target: "about" },
  { title: "Work", target: "work" },
  { title: "Playground", target: "playground" },
  { title: "Skills", target: "skills" },
  { title: "Achievements", target: "achievements" },
  { title: "Contact", target: "contact" },
];

export const projects: Project[] = [
  {
    title: "GENA",
    tagline: "Turns your study notes into quizzes.",
    description:
      "GENA is an AI-powered web app that helps students learn by automatically generating personalized quizzes from study material.",
    technologies: "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Ollama, Docker",
    githubLink: "https://github.com/llaxmi/GENA",
    date: "Nov 2025",
    image: p6,
  },
  {
    title: "Summarizer",
    tagline: "Long documents in, short summaries out.",
    description:
      "The File Summarizer is a web-app, simplifies document analysis by generating concise summaries, leveraging OpenAI's model and LangChain.",
    technologies: "Next.js, OpenAI, LangChain, Tailwind CSS",
    githubLink: "https://github.com/llaxmi/summarizer",
    date: "Jan 2025",
    image: p1,
  },
  {
    title: "BMI",
    tagline: "Body mass index, one screen, no clutter.",
    description:
      "BMI is a simple mobile app that helps users calculate their BMI based on their height and weight, with a clear and concise display of the result.",
    technologies: "React Native, JavaScript, Tailwind CSS",
    githubLink: "https://github.com/llaxmi/bmi-native.git",
    date: "Dec 2024",
    image: p2,
  },
  {
    title: "IdeaPulse",
    tagline: "Has YC already funded your idea?",
    description:
      "IdeaPulse is a tool that helps users quickly explore if similar startup ideas have been funded by Y Combinator. It searches through a large collection of YC-funded projects.",
    technologies: "React, Vite, LangChain, Ollama, Vector Store",
    githubLink: "https://github.com/llaxmi/IdeaPulse.git",
    date: "Oct 2024",
    image: p3,
  },
  {
    title: "Wander Pokhara",
    tagline: "Hidden places in my hometown.",
    description:
      "Wander Pokhara is a web app for travel enthusiasts to discover and share hidden gems in Pokhara, Nepal, and learn about their history and culture.",
    technologies: "Express, Node.js, Tailwind CSS, HTML",
    githubLink: "https://github.com/llaxmi/wander-pokhara.git",
    date: "Aug 2024",
    image: p4,
  },
  {
    title: "Cinemate",
    tagline: "Search films, keep a watchlist.",
    description:
      "Cinemate is a movie site backed by the TMDB API. Users can search for movies, add them to a watchlist, or mark them as watched.",
    technologies: "React, Tailwind CSS, JavaScript",
    githubLink: "https://github.com/llaxmi/MovieApp.git",
    date: "Jan 2024",
    image: p5,
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "C", "C++"] },
  { label: "Frameworks", items: ["React", "Next.js", "React Native", "Node.js", "Express"] },
  { label: "Styling", items: ["Tailwind CSS", "CSS"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Prisma", "TanStack Query"] },
  { label: "Tools", items: ["Git", "Vite", "Storybook", "Docker"] },
  { label: "Exploring", items: ["LangChain", "Ollama", "MediaPipe", "Three.js / R3F"] },
];

export const funProjects: Project[] = [
  {
    title: "Colour Palette Generator",
    tagline: "Any image in, a usable palette out.",
    description:
      "An editorial colour laboratory — drop any image and extract a five-part Pantone-style palette, adjust tones, and export ready-to-use CSS or Tailwind config.",
    technologies: "React, Tailwind CSS",
    githubLink: "https://github.com/llaxmi/palette-picker",
    date: "Mar 2026",
    image: pa,
  },
  {
    title: "Air Canvas",
    tagline: "Draw in the air with your hands.",
    description:
      "Air Canvas is a web app that lets you draw in the air using your webcam and hand tracking.",
    technologies: "React 19, TypeScript, MediaPipe Hands, React Three Fiber, Three.js, Tailwind CSS",
    githubLink: "https://github.com/llaxmi/air-canvas.git",
    date: "Jan 2026",
    image: a1,
  },
  {
    title: "Valentine's Card",
    tagline: "A card you can actually send.",
    description:
      "A small web app for sending a Valentine's Day card to someone, with shareable links and multiple languages.",
    technologies: "React 18, Tailwind CSS, Framer Motion, Supabase, Zustand, i18next",
    githubLink: "https://github.com/llaxmi/valentine",
    date: "Feb 2026",
    image: h1,
  },
];

export const achievements: Achievement[] = [
  {
    title: "Hour of Code",
    issuer: "Code.org",
    date: "Jan 2025",
    image: c4,
    description:
      "Taught programming basics and internet safety to students as part of the global Hour of Code initiative.",
  },
  {
    title: "Codefest Hackathon 2024",
    issuer: "Code For Change",
    date: "Dec 2024",
    image: c2,
    description:
      "Built solutions to real-world problems under time pressure, working collaboratively across a full hackathon weekend.",
  },
  {
    title: "Git & GitHub Mentor",
    issuer: "GCES Girls Tech",
    date: "Dec 2024",
    image: mentor,
    description:
      "Mentored students through version control — collaborative workflows, branching strategies, and open-source contribution.",
  },
  {
    title: "Provincial Ideathon — First Prize",
    issuer: "Code For Change",
    date: "Nov 2024",
    image: ideathon,
    description:
      "Won first prize for a prototype that detects plant disease from leaf images.",
  },
  {
    title: "30 Days Learning Challenge",
    issuer: "Kathmandu Engineering College",
    date: "Sep–Oct 2024",
    image: c1,
    description:
      "Completed a 30-day intensive challenge in artificial intelligence, with consistent daily progress.",
  },
  {
    title: "Project Exhibition",
    issuer: "10th GCES IT Expo",
    date: "Jun 2023",
    image: sisu,
    description:
      "Exhibited a working project to the academic community, presenting practical applications of programming knowledge.",
  },
];
