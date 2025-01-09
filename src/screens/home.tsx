import Name from "../components/Name.tsx";
import SocialLinks from "../components/SocialLinks.tsx";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:w-5/6 w-11/12 mt-8 max-w-6xl min-h-50 self-center"
    >
      <Name text="Laxmi" />
      <section>
        <p className="font-marcellus text-pri text-justify text-lg px-4">
          a passionate software engineering student with a big passion for
          learning and creating cool stuff.
        </p>
      </section>
      <section className="mt-2 px-4 text-right max-w-6xl ">
        <h2 className="text-lg font-medium font-marcellus">Connect with Me</h2>
        <SocialLinks />
      </section>
    </div>
  );
};

export default Home;
