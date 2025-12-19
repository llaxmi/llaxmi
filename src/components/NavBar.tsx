import { Menu } from "lucide-react";
import { useCallback, useState } from "react";
import { Link } from "react-scroll";
import { navigation } from "../constants/data";
import ResumeButton from "./ResumeButton";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = useCallback(() => {
    setNavOpen((prev) => !prev);
  }, []);

  const handleNavClose = useCallback(() => {
    setNavOpen(false);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-4xl z-50 transition-all">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200 mx-auto">
        <div className="px-4 sm:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-bold font-marcellus text-blue-950 tracking-wide hover:scale-105 transform transition-all"
              >
                Lyx
              </a>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  activeClass="nav-active"
                  to={item.title.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="relative text-base font-marcellus text-blue-950 px-2 py-1 transition-colors duration-200 cursor-pointer hover:text-blue-600 after:transition-transform after:duration-300 after:scale-x-0  after:content-[''] after:block after:h-[2px] after:bg-yellow-600 after:rounded after:w-full after:origin-left"
                >
                  {item.title}
                </Link>
              ))}
              <ResumeButton title="CV" />
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                className="focus:outline-none"
                aria-label="Toggle Navigation"
                onClick={handleNavToggle}
              >
                <Menu size={24} className="text-blue-950 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            navOpen ? "max-h-96 pt-1" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col gap-2 px-6 pb-6">
            {navigation.map((item) => (
              <Link
                key={`mobile_${item.title}`}
                activeClass="nav-active"
                to={item.title.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-lg font-marcellus text-gray-800 py-2 px-1 hover:text-yellow-600 transition-colors cursor-pointer"
                onClick={handleNavClose}
              >
                {item.title}
              </Link>
            ))}
            <ResumeButton title="CV" />
          </div>
        </div>
      </div>
      <style>{`
        .nav-active {
          color: #ca8a04 !important;
          position: relative;
        }
        .nav-active:after {
          content: "";
          display: block;
          height: 2px;
          background: #ca8a04;
          width: 100%;
          border-radius: 9999px;
          transform: scaleX(1);
          transition: transform 0.3s;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
