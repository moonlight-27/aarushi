import { whatishare } from "../data/whatishare";

const Services = () => {
  return (
    <div className="mt-20 lg:mt-28">
      <h1 className="text-white font-bold text-3xl font-unbounded lg:text-5xl mb-7 lg:mb-11">
        What I Share
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-x-7">
        {whatishare.map((service) => (
          <div key={service.name} className="flex flex-col gap-y-6">
            <h1 className="text-2xl font-bold">{service.name}</h1>

            <div className="text-lg space-y-2">
              <h1 className="border-t border-b border-b-gray-700 border-t-gray-700 p-2 text-lg">
                {service.service1}
              </h1>
              <h1 className="border-b p-2 text-lg border-b-gray-700">
                {service.service2}
              </h1>
              <h1 className="border-b p-2 text-lg border-b-gray-700">
                {service.service3}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
