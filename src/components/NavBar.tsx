import { Link } from "react-scroll";
import { navigation } from "../constants/data";
import ResumeButton from "./ResumeButton";

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <nav className="pt-4 self-center px-2 flex flex-1 max-w-6xl justify-between">
        <div className="flex">
          {navigation.map((item) => (
            <Link
              key={`link_${item.id}`}
              activeClass="active"
              to={item.title.toLowerCase()}
              spy={true}
              smooth={true}
              offset={5}
              className="text-[18px] md:text-xl font-marcellus font-normal mx-2 text-black hover:bg-slate-200 rounded-lg p-2 cursor-pointer"
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
