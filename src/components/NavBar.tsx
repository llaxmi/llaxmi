import { Link } from "react-scroll";
import { navigation } from "../constants/data";
import ResumeButton from "./ResumeButton";

const NavBar = () => {
  return (
    <div className="bg-slate-50 w-full z-50 fixed p-8">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-6 flex gap-4 items-center z-50 border border-gray-200">
        {navigation.map((item) => (
          <Link
            key={`link_${item.id}`}
            activeClass="active"
            to={item.title.toLowerCase()}
            spy={true}
            smooth={true}
            offset={5}
            className="text-sm md:text-base font-marcellus font-normal text-black hover:text-blue-500 cursor-pointer"
          >
            {item.title}
          </Link>
        ))}
        <ResumeButton title="CV" />
      </div>
    </div>
  );
};

export default NavBar;
