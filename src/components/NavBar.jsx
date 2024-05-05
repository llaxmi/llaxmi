import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { navigation } from "../constants/data";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="bg-tertiary py-2 px-4 font-poppins fixed flex flex-col lg:flex-row w-full justify-between items-center">
      <div>
        <div className="lg:hidden flex absolute top-2 left-2">
          <div className="block lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <AiOutlineMenu size={28} />
            </button>
          </div>
        </div>

        <div className="uppercase font-mono font-bold text-primary ">
          <Typewriter
            words={["HI", "WELCOME", "TO MY CORNER OF THE INTERNET"]}
            loop={5}
            cursor
            cursorStyle="!"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </div>
      </div>

      <div className="lg:flex lg:flex-row lg:items-center lg:w-auto ssm:hidden cursor-pointer">
        {navigation.map((item) => (
          <Link
            key={`link_${item.id}`}
            activeClass="active"
            to={item.title.toLowerCase()}
            spy={true}
            smooth={true}
            offset={5}
            className="uppercase font-poppins font-semibold mx-2 text-primary  hover:bg-slate-600 hover:p-2 rounded-lg p-2"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {open && (
        <div className="bg-tert flex flex-col justify-center items-center min-h-screen lg:hidden ">
          <ul className="p-0 m-0">
            {navigation.map((item) => (
              <li key={item.id} className="py-2 cursor-pointer">
                <Link
                  key={`link_${item.id}`}
                  activeClass="active"
                  to={item.title.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  onClick={toggleMenu}
                  className="block px-4 py-2 bg-teal-700 text-white font-poppins font-semibold hover:bg-secondary rounded-lg transition-all duration-200 text-center my-10"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
