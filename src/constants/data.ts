import p1 from "../assets/p1.png";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.png";
export const navigation = [
  {
    id: "0",
    title: "Home",
  },
  {
    id: "1",
    title: "About",
  },
  {
    id: "2",
    title: "Portfolio",
  },
];
export const fadeinSkills = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export const projects = [
  {
    title: "Movie App",
    description:
      "Cinemate, is a user-friendly website that connects to the TMDB API to fetch movie data. Users can search movies and mark their status (Watched, Watchlist, Hold List).",
    image: p1,
    link: "https://movie-app-bice-five.vercel.app",
    date: "January 2024",
  },
  {
    title: "Todo App",
    description:
      "Work To Do is a simple task management react application which simplifies task management with intuitive features.",
    image: p2,
    link: "https://work-to-do-red.vercel.app",
    date: "March 2024",
  },
  {
    title: "Rock-Paper-Scissors",
    description:
      "This application allows users to play the classic game of rock-paper-scissors, aiming for five consecutive wins.",
    image:
      "https://rock-paper-scissor-game-web-game.netlify.app/image/rock-paper-scissor.png",
    link: "https://rock-paper-scissors-three-smoky.vercel.app/",
    date: "November 2023",
  },

  {
    title: "Vowel Counter",
    description:
      "A simple JavaScript program that counts the number of vowels in a given text or phrase.",
    image: p3,
    link: "#vowel-counter",
    date: "November 2023",
  },
];
export const skills = [
  {
    src: "https://icons.veryicon.com/png/o/application/skills-section/javascript-1.png",
    alt: "JavaScript",
  },
  {
    src: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript.png",
    alt: "TypeScript",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
    alt: "C++",
  },
  {
    src: "https://seeklogo.com/images/R/react-logo-65B7CD91B5-seeklogo.com.png",
    alt: "React/ReactNative",
  },
  {
    src: "https://icons.veryicon.com/png/o/business/office-icon-series/css-3-4.png",
    alt: "CSS",
  },
  {
    src: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png",
    alt: "Tailwind",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
    alt: "Git",
  },
];
