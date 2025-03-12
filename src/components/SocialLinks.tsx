import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import { GITHUB_URL, LINKEDIN_URL, MAIL, X } from "../constants/url";

export const SocialLinks = () => {
  return (
    <div className="flex space-x-2 cursor-pointer align-bottom max-w-6xl justify-end">
      <IconContext.Provider value={{ size: "5rem" }}>
        <a
          href={GITHUB_URL}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <BsGithub size={24} />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <BsLinkedin size={24} />
        </a>
        <a
          href={X}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <BsTwitterX size={24} />
        </a>
        <a
          href={`mailto:${MAIL}`}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <LuMail size={24} />
        </a>
      </IconContext.Provider>
    </div>
  );
};
export default SocialLinks;
