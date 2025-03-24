import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const LetsTalkInfiniteScroll = ({ speed = 20000 }) => {
  const [translateX, setTranslateX] = useState(0);
  const text = "Let's Talk";
  const repeatedText = Array(10).fill(text);

  useEffect(() => {
    const animate = () => {
      setTranslateX((prevTranslateX) => {
        if (prevTranslateX <= -100) {
          return 0;
        }
        return prevTranslateX - 1;
      });
    };

    const intervalId = setInterval(animate, speed / 100);

    return () => clearInterval(intervalId);
  }, [speed]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden bg-black py-6">
      <div
        className="flex whitespace-nowrap transition-transform duration-1000 ease-linear"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {repeatedText.map((item, index) => (
          <div key={index} className="flex-none inline-block px-6">
            <Link
              onClick={scrollToTop}
              to="/contact"
              className="text-4xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 font-extrabold hover:text-yellow-400 hover:scale-110 transform transition-all duration-300 inline-flex items-center gap-3"
            >
              <span className="text-shadow-md">{item}</span>
              <FaExternalLinkAlt
                size={30}
                className="transform group-hover:rotate-45 transition-all"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetsTalkInfiniteScroll;
