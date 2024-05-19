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
        <section className="mt-8 bg-gradient-to-r from-gray-400  to-primary p-4 rounded-md">
          <h2 className=" leading-snug  font-medium text-white font-pixel text-3xl text-center">
            Welcome to my digital playground! 👩🏻‍💻
          </h2>
          <p className="font-lexend text-lg text-sec leading-relaxed mt-4">
            I&apos;m currently cruising through my Software Engineering degree
            at Gandaki College Of Engineering and Science, a branch of Pokhara
            University.
          </p>
          <p className="font-lexend text-lg text-sec leading-relaxed mt-4">
            With a passion for app development and a sprinkle of joy found in
            web development,
            <br /> I&apos;m always exploring the endless possibilities of the
            digital world.
          </p>
        </section>
        <Skills />
      </main>
    </div>
  );
};

export default AboutMe;
