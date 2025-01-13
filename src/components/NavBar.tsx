import { Link } from "react-scroll";
import { navigation } from "../constants/data";
import ResumeButton from "./ResumeButton";

const NavBar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-10 py-2 justify-center flex items-center">
      <nav className=" self-center px-2 flex flex-1 max-w-6xl justify-between">
        <div className="flex flex-wrap">
          {navigation.map((item) => (
            <Link
              key={`link_${item.id}`}
              activeClass="active"
              to={item.title.toLowerCase()}
              spy={true}
              smooth={true}
              offset={5}
              className="text-sm md:text-xl font-marcellus font-normal mx-2 text-black hover:bg-slate-100 rounded-lg p-2 cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <ResumeButton title="CV" />
      </nav>
    </div>
  );
};

export default NavBar;
