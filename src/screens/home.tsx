import Name from "../components/Name.tsx";
import SocialLinks from "../components/SocialLinks.tsx";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:w-4/5 w-4/5 mt-8 max-w-6xl min-h-50 py-2 self-center"
    >
      <Name text="Laxmi Lamichhane" />
      <section>
        <p className="font-lexend text-pri text-justify text-lg px-4">
          a passionate software engineering student with a big passion for
          learning and creating cool stuff.
        </p>
      </section>
      <section className="mt-2 px-4 text-right max-w-6xl ">
        <h2 className="text-lg font-medium font-lexend">Connect with Me</h2>
        <SocialLinks />
      </section>
    </div>
  );
};

export default Home;
