import NotifyUserInfo from "../components/Card";
import SocialLinks from "../components/SocialLinks";
import Skills from "./skills";

const AboutMe = () => {
  return (
    <>
      {/* false div */}
      <div id="about" className="p-8"></div>
      <div className="justify-center items-center flex flex-wrap flex-col ">
        <main className="max-w-6xl min-h-80 flex justify-center flex-col md:px-0 px-4">
          <NotifyUserInfo aiName="Hi, Welcome to my digital playground! 👩🏻‍💻" />
          <section className="mt-2 px-4 text-right max-w-6xl ">
            <h2 className="text-lg font-medium font-marcellus">
              Connect with Me
            </h2>
            <SocialLinks />
          </section>
          <Skills />
        </main>
      </div>
    </>
  );
};

export default AboutMe;
