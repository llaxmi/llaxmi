import { Link } from "react-scroll";
import { navigation } from "../constants/data";

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <nav className="pt-4 self-center px-2 flex flex-1 max-w-6xl ">
        {navigation.map((item) => (
          <Link
            key={`link_${item.id}`}
            activeClass="active"
            to={item.title.toLowerCase()}
            spy={true}
            smooth={true}
            offset={5}
            className="text-base font-poppins font-normal mx-2 text-black  hover:bg-slate-200  rounded-lg p-2 "
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
