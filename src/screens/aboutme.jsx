import PageTitle from "../components/PageTitle";
import Skills from "./skills";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="justify-center items-center flex flex-wrap flex-col min-h-screen p-2 ssm:p-0 text-wrap"
    >
      <PageTitle title="ABOUT ME" />
      <main className="max-w-6xl px-2 min-h-80 flex justify-center flex-col">
        <section className="mt-8 bg-secondary p-8 sm:p-10 md:p-8 lg:rounded-br-full ssm:rounded-2xl sm:max-w-full ">
          <h2 className="md:text-4xl leading-snug  font-medium text-white font-pixel ssm:text-2xl text-center">
            Welcome to my digital playground! 👩🏻‍💻
          </h2>
          <p className="font-lexend ssm:text-base lg:text-xl text-sec leading-relaxed mt-4">
            I&apos;m currently cruising through my Software Engineering degree
            at Gandaki College Of Engineering and Science, a branch of Pokhara
            University.
          </p>
          <p className="font-lexend ssm:text-base lg:text-xl text-sec leading-relaxed mt-4">
            With a passion for app development and a sprinkle of joy found in
            web development,
            <br /> I&apos;m always exploring the endless possibilities of the
            digital world.
          </p>
          <p className="font-lexend ssm:text-bse lg:text-xl text-sec leading-relaxed mt-4 overflow-hidden">
            When I&apos;m not coding, you&apos;ll find me immersed in
            nature&apos;s whispers <br /> and captivated by the pages of books,
            where every word sparks a new adventure.🚀
          </p>
        </section>
        <Skills />
      </main>
    </div>
  );
};

export default AboutMe;
