import Logo from "../images/aarushi-logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "WORKS", url: "/works" },
  { name: "ABOUT", url: "/about" },
  { name: "CONTACT", url: "/contact" },
];

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => setOpenNav(!openNav);

  return (
    <div
      className={`bg-[#000000] py-4 lg:py-6 px-4 md:px-7 lg:px-12 font-unbounded ${
        openNav ? "h-screen" : ""
      }`}
    >
      <nav>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={Logo} className="w-8 lg:w-11" />
          </Link>
          <button
            onClick={toggleNav}
            className="font-unbounded hover:bg-white transition ease-in-out delay-200 duration-200 hover:text-black  text-white border-2 border-white py-0.5 px-3 rounded-full text-lg"
          >
            {openNav ? (
              <span className="animate-fade-right">CLOSE</span>
            ) : (
              <span className="animate-fade-left">MENU</span>
            )}
          </button>
        </div>
      </nav>

      {openNav ? (
        <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-7 mt-11 lg:mt-16">
          {navLinks.map((link) => (
            <div key={link.url}>
              <Link
                onClick={toggleNav}
                to={link.url}
                className="text-white text-2xl md:text-3xl lg:text-7xl animate-fade-right animate-delay-100 animate-ease-in-out"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
