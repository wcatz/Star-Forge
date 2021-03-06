//import  from "./PoolStats";
import * as React from "react";
import { Suspense } from "react";
import { CakeIcon, LockClosedIcon, LightningBoltIcon } from "@heroicons/react/outline";
const PoolStats = React.lazy(() => import("./PoolStats"));

const features = [
  {
    name: "Efficient",
    description:
      "Apples Mac M1 Mini is a next generation ARM64 platform that provides unparalleled perfomance using 6 Watts each. The pool uses around 110 Watt making it the most efficient pool on the Cardano blockchain.",
    icon: LightningBoltIcon,
  },
  {
    name: "Baremetal",
    description:
      "Baremetal pools are truly decentralized, the Cardano blockchain relies too heavily on service providers like Amazon AWS, Digital Ocean and others. These pools could be shut down without a moments notice.",
    icon: LockClosedIcon,
  },
  {
    name: "Off The Grid",
    description:
      "Solar powered with Starlink satellite mesh failover. The forge is usually connected to three satellites at any given time. With point to point coming soon we should achieve unparalleled propagation times around the globe.",
    icon: CakeIcon,
  },
];

const Homemiddle = () => {
  return (
    <>
      <div className="relative py-2 sm:py-4 lg:py-6">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <Suspense
            fallback={
              <div className="flex justify-center items-center mb-10">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            }
          >
            <PoolStats />
          </Suspense>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-secondary bg-opacity-50 mb-1 border-t-2 border-2 border-accent rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md">
                          <feature.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 leading-8 font-extrabold tracking-tight text-3xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-500">
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
    </>
  );
};

export default Homemiddle;
