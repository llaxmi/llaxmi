import p2 from "../assets/bmi.png";
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

// The five prayer-flag colors, in their traditional order.
export type FlagColor = "blue" | "white" | "red" | "green" | "yellow";

export interface NavigationItem {
  title: string;
  target: string;
  flag: FlagColor;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string;
  githubLink: string;
  date: string;
  image: string;
  // A working version shown in place of the screenshot.
  demo?: "palette";
}

export interface SkillGroup {
  label: string;
  items: string[];
  // Projects where the group was put to work, shown as evidence beside it.
  usedIn: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
}

export interface ResearchInterest {
  title: string;
  detail: string;
}

export interface ResearchFinding {
  // The number that carries the finding, set large.
  figure: string;
  label: string;
  detail: string;
}

export interface ResearchProject {
  title: string;
  context: string;
  question: string;
  method: string;
  findings: ResearchFinding[];
  caveat: string;
  methods: string[];
  githubLink: string;
}

export const navigation: NavigationItem[] = [
  { title: "About", target: "about", flag: "blue" },
  { title: "Research", target: "research", flag: "white" },
  { title: "Work", target: "work", flag: "red" },
  { title: "Skills", target: "skills", flag: "green" },
  { title: "Playground", target: "playground", flag: "yellow" },
  { title: "Achievements", target: "achievements", flag: "blue" },
  { title: "Contact", target: "contact", flag: "white" },
];

export const researchInterests: ResearchInterest[] = [
  {
    title: "Evaluating LLM systems",
    detail:
      "How to measure what a pipeline actually does, and how much a result can be trusted once you account for the size of the test set.",
  },
  {
    title: "Retrieval-augmented generation",
    detail:
      "Which design choices change the answers, and why good retrieval scores don't always mean good answers.",
  },
  {
    title: "NLP for legal and dense text",
    detail:
      "Question answering over documents where a missed clause or an invented one has real consequences.",
  },
];

export const research: ResearchProject = {
  title: "Does pipeline design matter for legal question answering?",
  context: "Final-year research project \u00b7 GCES \u00b7 2026",
  question:
    "When a RAG system answers questions about Terms of Service, what changes the answer more: how the document is chunked, or which model writes the reply?",
  method:
    "Two frozen documents (the GitHub and Netflix terms) and 30 hand-written questions with annotated gold clauses. Phase 1 swept 15 chunking configurations (5 strategies \u00d7 3 sizes) with the generator held fixed. Phase 2 compared a local Llama 3.1 8B with Claude Opus under the winning setup. Answers were scored for truthfulness by an LLM judge that I checked against human labels.",
  findings: [
    {
      figure: "0.50 \u2192 0.90",
      label: "from chunking alone",
      detail:
        "Changing only how the document was split moved mean truthfulness from 0.50 to 0.90.",
    },
    {
      figure: "0.98",
      label: "recall isn\u2019t enough",
      detail:
        "Four configurations retrieved about 98% of the gold text, yet their answer quality ranged from 0.60 to 0.90.",
    },
    {
      figure: "0.93 vs 0.60",
      label: "Opus vs Llama",
      detail:
        "The whole gap came from questions that need several clauses combined. On simple lookups, both models were perfect.",
    },
    {
      figure: "\u03ba = 0.92",
      label: "judge agreement",
      detail:
        "The LLM judge agreed with human annotators as closely as the two humans agreed with each other.",
    },
  ],
  caveat:
    "None of these gaps survive significance testing. With 20\u201330 questions, most comparisons rest on the handful where the configurations differ. The bottleneck was the size of the question set, not the pipeline, and that is the question I\u2019d most like to take further.",
  methods: [
    "RAG",
    "LLM-as-judge",
    "Cohen\u2019s \u03ba",
    "Wilcoxon + Holm",
    "BCa bootstrap",
    "pgvector",
    "Python (SciPy, statsmodels)",
    "TypeScript",
  ],
  githubLink: "https://github.com/llaxmi/tos-rag",
};

export const flagFor = (target: string): FlagColor =>
  navigation.find((item) => item.target === target)?.flag ?? "blue";

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
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Interfaces",
    items: ["TypeScript", "React", "Next.js", "React Native", "Tailwind CSS", "TanStack Query"],
    usedIn: ["GENA", "Summarizer", "BMI"],
  },
  {
    label: "Servers",
    items: ["Node.js", "NestJS", "Express", "Hono", "Python"],
    usedIn: ["ToS RAG", "Wander Pokhara", "SyncGTM"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "pgvector", "Prisma", "MongoDB"],
    usedIn: ["ToS RAG", "GENA"],
  },
  {
    label: "Language models",
    items: ["Claude API", "OpenAI", "LangChain", "Ollama", "RAG"],
    usedIn: ["ToS RAG", "IdeaPulse", "Summarizer"],
  },
  {
    label: "Tooling",
    items: ["Git", "Docker", "Vite", "Storybook"],
    usedIn: ["GENA", "IdeaPulse"],
  },
  {
    label: "Foundations",
    items: ["JavaScript", "C", "C++"],
    usedIn: ["Coursework at GCES"],
  },
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
    demo: "palette",
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
