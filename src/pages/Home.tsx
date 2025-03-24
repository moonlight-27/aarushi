import Works from "../components/Works";
import homeVideo from "../images/aarushi.mp4";
import Services from "../components/Services";
import testmonialImage from "../images/testmonial.avif";
import { ImQuotesLeft } from "react-icons/im";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@AARUSHI_SINHA",
    icon: <FaYoutube size={30} color="#FF0000" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/arushehh_?igsh=cWhraW52ZGVyN2Jy",
    icon: <FaInstagram size={30} color="#E4405F" />,
  },
];

const Home = () => {
  return (
    <div>
      {/* Home video with text on top */}
      <div className="h-screen relative">
        <div className="h-full w-full">
          <video
            src={homeVideo}
            muted
            autoPlay
            playsInline
            loop
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-white absolute top-0 bottom-0 font-unbounded right-0 left-0 flex flex-col items-center justify-center space-y-1">
          <h1 className="text-6xl lg:text-[20rem] font-semibold">AARUSHI</h1>
          <h1 className="text-4xl lg:text-9xl font-semibold">SINHA</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="text-white mt-11 lg:mt-16 px-4 md:px-7 lg:px-12">
        <h1 className="text-2xl lg:text-4xl lg:max-w-5xl lg:mx-auto font-bold text-center font-unbounded">
          "The world is full of creative souls, and I’m here to inspire yours."
        </h1>

        {/* Social Media Links Section */}
        <div className="mt-11 lg:mt-16 flex flex-col items-center gap-y-7">
          <h2 className="text-3xl font-unbounded font-semibold">Follow Me</h2>
          <div className="flex gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Aarushi's ${social.name}`}
                className="transition duration-300 transform hover:scale-110 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Works section */}
        <Works />

        {/* Services section */}
        <Services />

        {/* Testimonial section */}
        <div className="flex flex-col lg:flex-row mt-20 lg:mt-28">
          <div className="lg:w-1/2 bg-white w-full p-3 md:p-5 relative">
            <span>
              <ImQuotesLeft size={40} color="black" />
            </span>

            <div className="space-y-4 mt-9 lg:absolute bottom-4">
              <h1 className="text-lg lg:text-2xl font-bold text-[#030303]">
                "Aarushi’s creativity and energy bring a unique spark to
                everything she does. Her content has inspired so many, and
                working with her has been an unforgettable experience."
              </h1>
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-[#030303]">
                  Khushi
                </h1>
                <h1 className="text-[#9D9EA1] text-lg font-bold">
                  Collaborator
                </h1>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src={testmonialImage}
              className="w-full h-96 lg:h-[39rem] object-cover"
              alt="Aarushi's testimonial"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
