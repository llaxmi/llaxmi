import { IconContext } from "react-icons";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MAIL,
} from "../constants/url";

export const SocialLinks = () => {
  return (
    <div className="flex my-4 space-x-2 cursor-pointer align-bottom max-w-6xl justify-end">
      <IconContext.Provider value={{ size: "5rem" }}>
        <a
          href={GITHUB_URL}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <BsGithub size={22} />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <BsLinkedin size={22} />
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <BsInstagram size={22} />
        </a>

        <a
          href={`mailto:${MAIL}`}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <LuMail size={22} />
        </a>
      </IconContext.Provider>
    </div>
  );
};
export default SocialLinks;
