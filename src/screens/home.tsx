import SocialLinks from "../components/SocialLinks.jsx";

const Home = () => {
  return (
    <div
      id="home"
      className=" flex flex-col lg:w-4/5 self-center mt-8 p-4 lg:ml-40"
    >
      <h1 className="text-2xl font-bold text-gray-800 font-lexend mt-2">
        Laxmi Lamichhane
      </h1>
      <section>
        <p className="font-lexend text-pri mt-4 text-justify text-lg">
          a passionate software engineering student with a big passion for
          learning and creating cool stuff.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-lg font-medium font-lexend">Connect with Me</h2>
        <SocialLinks />
      </section>
    </div>
  );
};

export default Home;
