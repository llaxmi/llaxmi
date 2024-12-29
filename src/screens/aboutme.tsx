import PageTitle from "../components/PageTitle";
import Skills from "./skills";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="justify-center items-center flex flex-wrap flex-col"
    >
      <PageTitle title="ABOUT ME" />
      <main className="max-w-6xl min-h-80 flex justify-center flex-col">
        <section className="mt-8 rounded-md  border-gray-100 bg-gray-50 p-4 transition-all hover:scale-105 duration-500 shadow-inner">
          <h2 className="leading-snug font-semibold text-gray-500 font-pixel text-3xl">
            Welcome to my digital playground! 👩🏻‍💻
          </h2>
          <p className="font-marcellus text-xl text-sec leading-relaxed mt-4">
            I&apos;m currently cruising through my Software Engineering degree
            at Gandaki College of Engineering and Science, a branch of Pokhara
            University.
          </p>
          <p className="font-marcellus text-xl text-sec leading-relaxed mt-4">
            With a passion for both app and web development, I love exploring AI
            and creating innovative solutions that push the boundaries of
            technology and open up endless possibilities in the digital world.
          </p>
        </section>
        <Skills />
      </main>
    </div>
  );
};

export default AboutMe;
