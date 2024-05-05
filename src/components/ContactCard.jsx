import { GrMail } from "react-icons/gr";
import SocialLinks from "../components/SocialLinks";
import { MAIL } from "../constants/url";

const ContactCard = () => {
  return (
    <section className="  flex flex-col  items-center bg-gradient-to-r from-gradient1 to-gradient2 rounded-xl p-6 md:py-10 m-1 ssm:min-w-min ">
      <div className="md:w-max m-2 flex items-center md:justify-start ">
        <h3 className="lg:text-6xl lg:m-4 font-dancing font-bold text-center md:text-left text-pri whitespace-nowrap ssm:text-2xl">
          Together, crafting solutions!
        </h3>
      </div>
      <div className=" w-full text-left md:p-4 rounded-lg m-2 md:m-0 grid place-content-center">
        <h2 className="text-lg md:text-xl font-semibold text-pri mb-2 md:mb-4">
          Mail me at
        </h2>
        <a
          href={`mailto:${MAIL}`}
          className="flex items-center font-lexend text-lg hover:underline cursor-alias"
        >
          <GrMail size={22} className="mr-2" />
          {MAIL}
        </a>
        <h2 className="text-lg md:text-xl font-semibold text-pri mt-4 mb-2 md:mb-4">
          Social Media
        </h2>
        <SocialLinks />
      </div>
    </section>
  );
};

export default ContactCard;
