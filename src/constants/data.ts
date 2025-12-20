import c1 from "../assets/achievements/LUD.jpeg";
import c2 from "../assets/achievements/cfc.jpeg";
import c4 from "../assets/achievements/hoc.jpg";
import ideathon from "../assets/achievements/ideathon.jpg";
import mentor from "../assets/achievements/mentor.png";
import sisu from "../assets/achievements/sisu.jpeg";

import p2 from "../assets/bmi.png";
import p5 from "../assets/cine.png";
import p6 from "../assets/gena.png";
import p3 from "../assets/ideapulse.png";
import p1 from "../assets/summarizer.png";
import p4 from "../assets/wander.png";

export interface NavigationItem {
  title: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string;
  githubLink: string;
  date: string;
  image: string;
}

export interface Skill {
  src: string;
  alt: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export const navigation: NavigationItem[] = [
  {
    title: "Skills",
  },
  {
    title: "Projects",
  },
  {
    title: "Playground",
  },
  {
    title: "Achievements",
  },
];

export const projects: Project[] = [
  {
    title: "📄 GENA: AI Quiz Generator",
    description:
      "GENA is an AI-powered web app that helps students learn by automatically generating personalized quizzes from study material.",
    technologies: `
     Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Ollama, Docker
    `,
    githubLink: "https://github.com/llaxmi/GENA",
    date: "Nov 2025",
    image: p6,
  },
  {
    title: "📄 Summarizer",
    description:
      "The File Summarizer is a web-app, simplifies document analysis by generating concise summaries, leveraging OpenAI's model and LangChain.",
    technologies: "Next.js, OpenAI Model, LangChain, Tailwind CSS",
    githubLink: "https://github.com/llaxmi/summarizer",
    date: "Jan 2025",
    image: p1,
  },
  {
    title: "📲 BMI",
    description:
      "BMI is a simple mobile app that helps users calculate their BMI (Body Mass Index) based on their height and weight. It provides a clear and concise display of the user's BMI, making it easy to understand and interpret.",
    technologies: "reactnative, JavaScript,Tailwind CSS",
    githubLink: "https://github.com/llaxmi/bmi-native.git",
    date: "Dec 2024",
    image: p2,
  },
  {
    title: "💡 IdeaPulse",
    description:
      "IdeaPulse is a tool that helps users quickly explore if similar startup ideas have been funded by Y Combinator. It searches through a large collection of YC-funded projects.",
    technologies: "React.js, Vite, LangChain,Ollama, Vector Store",
    githubLink: "https://github.com/llaxmi/IdeaPulse.git",
    date: "Oct 2024",
    image: p3,
  },
  {
    title: "🗺 Wander Pokhara",
    description:
      "Wander Pokhara is a web app for travel enthusiasts to discover and share hidden gems in Pokhara, Nepal. Users can find lesser-known destinations, learn about their history and culture. ",
    technologies: "Express, Node.js, Tailwind CSS,HTML",
    githubLink: "https://github.com/llaxmi/wander-pokhara.git",
    date: "Aug 2024",
    image: p4,
  },
  {
    title: "📽 Cinemate",
    description:
      "Cinemate is a user-friendly movie site that connects to a public movie database (TMDB API). Users can easily search for movies, add them to a watchlist, or mark them as watched.",
    technologies: "React, Tailwind CSS, JavaScript",
    githubLink: "https://github.com/llaxmi/MovieApp.git",
    date: "January 2024",
    image: p5,
  },
];
export const skills: Skill[] = [
  {
    src: "https://icons.veryicon.com/png/o/application/skills-section/javascript-1.png",
    alt: "JavaScript",
  },
  {
    src: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript.png",
    alt: "TypeScript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png",
    alt: "C",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
    alt: "C++",
  },
  {
    src: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg",
    alt: "ReactNative",
  },
  {
    src: "https://www.devtopics.com/wp-content/uploads/2023/01/React-icon.svg_.png",
    alt: "Reactjs",
  },
  {
    src: "https://icons.veryicon.com/png/o/business/office-icon-series/css-3-4.png",
    alt: "CSS",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    alt: "HTML",
  },
  {
    src: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png",
    alt: "Tailwind",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
    alt: "Git",
  },
  {
    src: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/storybook.png",
    alt: "Storybook",
  },
  {
    src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    alt: "Node.js",
  },
  {
    src: "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
    alt: "MongoDB",
  },
  {
    src: "https://res.cloudinary.com/dg3gyk0gu/image/upload/v1683914713/tags/tanstack.png",
    alt: "Tanstack Query",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D4D12AQF8MwWNbgUZ_g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697534805076?e=2147483647&v=beta&t=oidQ7KQtMb1CVUj-mRzfSaKSFlAHdvzu4z0FZ1VsU10",
    alt: "Langchain",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    alt: "Next.js",
  },
];
export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Hour of Code",
    issuer: "Code.org",
    date: "Jan 2025",
    imageUrl: c4,
  },
  {
    id: "2",
    title: "Codefest- HACKATHON 2024",
    issuer: "Code For Change",
    date: "Dec 2024",
    imageUrl: c2,
  },
  {
    id: "3",
    title: "Git & Github Mentor",
    issuer: "Gces Girls Tech",
    date: "Dec 2024",
    imageUrl: mentor,
  },
  {
    id: "4",
    title: "Provincial Ideathon",
    issuer: "CFC",
    date: "Nov 2024",
    imageUrl: ideathon,
  },

  {
    id: "5",
    title: "30 Days Learning Challange",
    issuer: "KEC",
    date: "Sep-Oct 2024",
    imageUrl: c1,
  },
  {
    id: "6",
    title: "Project Exhibition",
    issuer: "10th GCES IT Expo",
    date: "June 2023",
    imageUrl: sisu,
  },
];
