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
    title: "📄 Summarizer",
    description:
      "The File Summarizer is a web-app, simplifies document analysis by generating concise summaries, leveraging OpenAI's model and LangChain for efficient text processing. Ideal for professionals, students, and researchers.",
    technologies: "Next.js, OpenAI Model, LangChain. Tailwind CSS",
    link: "https://github.com/llaxmi/summarizer",
    date: "Jan 2025",
  },
  {
    title: "📲 BMI",
    description:
      "BMI is a simple mobile app that helps users calculate their BMI (Body Mass Index) based on their height and weight. It provides a clear and concise display of the user's BMI, making it easy to understand and interpret.",
    technologies: "reactnative, JavaScript, Tailwind CSS",
    link: "https://github.com/llaxmi/bmi-native.git",
    date: "Dec 2024",
  },
  {
    title: "💡 IdeaPulse",
    description:
      "IdeaPulse is a tool designed to help users quickly explore if similar startup ideas have been funded by Y Combinator. It searches a large collection of YC-funded projects and presents insights.",
    technologies: "React.js, Vite, LangChain, Vector Store, and Ollama models.",
    link: "https://github.com/llaxmi/IdeaPulse.git",
    date: "Oct 2024",
  },
  {
    title: "🗺 Wander Pokhara",
    description:
      "Wander Pokhara is a web app for travel enthusiasts to discover and share hidden gems in Pokhara, Nepal. Users can find lesser-known destinations, learn about their history and culture. ",
    technologies: "Express, Node.js, HTML, Tailwind CSS",
    link: "https://github.com/llaxmi/wander-pokhara.git",
    date: "Aug 2024",
  },
  {
    title: "📽 Cinemate",
    description:
      "Cinemate is a user-friendly movie site that connects to a public movie database (TMDB API). Users can easily search for movies, add them to a watchlist, or mark them as watched.",
    technologies: "React, Tailwind CSS, JavaScript",
    link: "https://github.com/llaxmi/MovieApp.git",
    date: "January 2024",
  },
  {
    title: "📜 Todo App",
    description:
      "Work To Do is a task management web app that lets users easily add, organize, and complete tasks. The app’s simple design makes it ideal for quickly managing daily to-dos.",
    technologies: "React, JavaScript, CSS",
    link: "https://work-to-do-red.vercel.app",
    date: "March 2024",
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
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png",
    alt: "C",
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
    src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    alt: "HTML",
  },
  {
    src: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png",
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
    src: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png",
    alt: "MongoDB",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    alt: "React Native",
  },
  {
    src: "https://media.licdn.com/dms/image/v2/D4D12AQF8MwWNbgUZ_g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697534805076?e=2147483647&v=beta&t=oidQ7KQtMb1CVUj-mRzfSaKSFlAHdvzu4z0FZ1VsU10",
    alt: "Langchain",
  },
];
