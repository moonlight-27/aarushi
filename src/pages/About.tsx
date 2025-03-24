import { aboutData } from "../data/about";

const About = () => {
  return (
    <div className="mt-11 lg:mt-16 px-4 md:px-7 lg:px-12">
      <div className="font-unbounded space-y-2">
        <h1 className="text-white font-bold text-3xl font-unbounded lg:text-5xl text-center">
          ABOUT ME
        </h1>
        <h1 className="text-white lg:max-w-3xl mx-auto font-bold text-xl lg:text-3xl text-center">
          Get to know the face behind the camera, the crazy adventures, and the
          unforgettable moments!
        </h1>
      </div>

      {/* About Content Section */}
      <div className="mt-16 lg:mt-24">
        {aboutData.map((item) => (
          <div
            key={item.name}
            className="flex flex-col lg:flex-row items-center gap-8 mb-12"
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover h-[400px] lg:h-[500px] rounded-xl"
              />
            </div>
            {/* Text Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-white text-3xl font-unbounded font-bold">
                {item.name}
              </h2>
              <p className="text-white text-lg">{item.description}</p>
              {item.description1 && (
                <p className="text-white text-lg">{item.description1}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
