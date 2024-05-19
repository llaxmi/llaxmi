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
    <div className="flex my-4 space-x-4 cursor-pointer align-bottom w-full">
      <IconContext.Provider value={{ size: "5rem" }}>
        <a href={GITHUB_URL} target="_blank">
          <BsGithub size={22} />
        </a>
        <a href={INSTAGRAM_URL} target="_blank">
          <BsInstagram size={22} />
        </a>
        <a href={FACEBOOK_URL} target="_blank">
          <BsFacebook size={22} />
        </a>
        <a href={`mailto:${MAIL}`} target="_blank">
          <LuMail size={22} />
        </a>
      </IconContext.Provider>
    </div>
  );
};
export default SocialLinks;
