import ContactCard from "../components/ContactCard";
import PageTitle from "../components/PageTitle";
const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="justify-center items-center flex flex-wrap flex-col min-h-screen p-2 text-wrap"
      >
        <PageTitle title="CONTACT ME" />
        <p className="font-lexend sm:text-lg ssm:text-center md:text-xl lg:text-2xl  text-pri leading-relaxed my-10 lg:w-5/6">
          While I&apos;m all about personal growth and my ongoing projects,
          I&apos;m also a huge fan of teamwork and connections. Don&apos;t be
          shy, just say hi or shoot me a message if you&apos;ve got any
          questions or just want to chat!
        </p>
        <div className="place-content-center grid align-middle my-6">
          <ContactCard />
        </div>
      </div>
    </>
  );
};

export default Contact;
