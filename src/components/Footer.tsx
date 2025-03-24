import LetsTalkInfiniteScroll from "./LetsTalkInfiteScroll";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "WORKS", url: "/works" },
    { name: "ABOUT", url: "/about" },
    { name: "CONTACT", url: "/contact" },
  ];

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white mt-20 lg:mt-24">
      <LetsTalkInfiniteScroll />

      <div className="mt-11 lg:mt-16 px-4 md:px-7 lg:px-12">
        <h1 className="text-2xl lg:text-3xl text-center font-bold text-[#111111] font-unbounded">
          AARUSHI SINHA
        </h1>

        <div className="mt-6 flex flex-col items-center gap-2 md:flex-row justify-center flex-wrap gap-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              className="text-black text-lg hover:font-bold"
              onClick={handleClick}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <h1 className="my-16 text-center text-sm text-gray-800">
        ©2025 AARUSHI SINHA - ALL RIGHTS RESERVED
      </h1>
    </div>
  );
};

export default Footer;
