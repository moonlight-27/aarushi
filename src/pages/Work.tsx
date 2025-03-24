import { works } from "../data/works";

const Work = () => {
  return (
    <div className="mt-11 lg:mt-16">
      <div className="font-unbounded space-y-2">
        <h1 className="text-white font-bold text-3xl font-unbounded lg:text-5xl text-center">
          WORKS
        </h1>
        <h1 className="text-white lg:max-w-3xl mx-auto font-bold text-xl lg:text-3xl text-center">
          A glimpse into the journey of Aarushi's creativity, travels, and hard
          work!
        </h1>
      </div>

      {/* works we did section */}
      <div className="flex flex-col gap-11 mt-11 lg:mt-16 px-4 md:px-7 lg:px-12">
        {works.map((work) => (
          <div key={work.name} className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src={work.image}
                className="w-full object-cover h-96 lg:h-[39rem]"
              />
            </div>
            <div className="lg:w-1/2 bg-white p-3 lg:p-16 text-black">
              <h1 className="text-3xl md:text-4xl font-bold lg:text-5xl font-unbounded">
                {work.name}
              </h1>

              <div className="mt-6 lg:mt-9 space-y-1 lg:space-y-2 divide-y divide-gray-400">
                <div className="flex flex-row justify-between p-1">
                  <h1 className="text-lg lg:text-xl">Client</h1>
                  <h1 className="text-lg lg:text-xl font-bold">
                    {work.client}
                  </h1>
                </div>

                <div className="flex flex-row justify-between p-1 lg:p-2">
                  <h1 className="text-lg lg:text-xl">Role</h1>
                  <h1 className="text-lg lg:text-xl font-bold">{work.role}</h1>
                </div>

                <div className="flex flex-row justify-between p-1 lg:p-2">
                  <h1 className="text-lg lg:text-xl">Date</h1>
                  <h1 className="text-lg font-bold lg:text-xl">{work.date}</h1>
                </div>

                <div className="flex flex-row justify-between p-1 lg:p-2">
                  <h1 className="text-lg lg:text-xl">Location</h1>
                  <h1 className="text-lg font-bold lg:text-xl">
                    {work.location}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
