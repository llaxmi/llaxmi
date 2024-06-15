import { IconContext } from "react-icons";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
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
          href={INSTAGRAM_URL}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <BsInstagram size={22} />
        </a>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          className="hover:scale-125 transition duration-500"
        >
          <BsFacebook size={22} />
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
