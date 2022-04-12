import {
  CloudUploadIcon,
  LockClosedIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Efficient",
    description:
      "Apples Mac M1 Mini is next generation ARM processor provides unparalleled perfomance using 6 Watts each. The pool uses around 110 Watt making it the most efficient pool on the Cardano blockchain.",
    icon: RefreshIcon,
  },
  {
    name: "Baremetal",
    description:
      "Baremetal pools are Truly decentralized, the Cardano blockchain relies too heavily on service providers like Amazon AWS, Digital Ocean and others. These pools could be shut down without a moments notice.",
    icon: LockClosedIcon,
  },
  {
    name: "Sustainable",
    description: "Starlink provides a mesh failover. The forge is usually connected to three satellites at any given time. With point to point coming soon we should achieve unparalleled propagation times around the globe.",
    icon: CloudUploadIcon,
  },
];

const Hometop = () => {
  return (
    <div className="relative py-2 sm:py-4 lg:py-6">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-secondary bg-opacity-50 mb-1 border-t-2 border-2 border-accent rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometop;
