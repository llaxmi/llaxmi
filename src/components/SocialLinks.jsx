import { IconContext } from "react-icons";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL } from "../constants/url";

export const SocialLinks = () => {
  return (
    <div className="flex my-2 space-x-4 cursor-pointer align-bottom w-full">
      <IconContext.Provider value={{ size: "5rem" }}>
        <a href={GITHUB_URL} target="_blank">
          <BsGithub size={26} />
        </a>
        <a href={INSTAGRAM_URL} target="_blank">
          <BsInstagram size={26} />
        </a>
        <a href={FACEBOOK_URL} target="_blank">
          <BsFacebook size={26} />
        </a>
      </IconContext.Provider>
    </div>
  );
};
export default SocialLinks;
