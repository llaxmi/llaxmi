import blob from "../assets/blob.jpg";
import SocialLinks from "../components/SocialLinks.jsx";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-r from-gradient2 to-gradient1 justify-center items-center flex flex-col min-h-screen p-2 "
    >
      <header className="ssm:mt-10">
        <h1 className="text-4xl ssm:text-4xl lg:text-5xl font-bold text-gray-800 font-lexend mt-2">
          Laxmi Lamichhane
        </h1>
      </header>
      <main className="max-w-6xl px-2 min-h-80 flex justify-center flex-col">
        <div className="flex ssm:flex-col ssm:items-center justify-around my-8">
          <img
            src={blob}
            alt="lx"
            className="object-fill ssm:size-52 lg:size-80 md:size-60 rounded-full my-6 ssm:my-4 md:my-4  "
          />
          <section>
            <p className="font-lexend ssm:text-lg lg:text-2xl md:text-xl text-pri mt-4 text-justify">
              Hey, I&apos;m Laxmi Lamichhane, a passionate software engineering
              student with a big passion for learning and creating cool stuff.
              I&apos;m always eager to expand my knowledge and skills to create
              meaningful and impactful projects. Let&apos;s explore the world of
              tech together and build something amazing!
            </p>
          </section>
        </div>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-pri font-lexend">
            Connect with Me
          </h2>
          <SocialLinks />
        </section>
      </main>
    </div>
  );
};

export default Home;
