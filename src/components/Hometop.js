import * as React from "react";
import { Suspense } from "react";
import Cover from "../pages/About/images/better-img.png";
import { ReactComponent as Logo } from "../pages/Gallery/images/Star-Forge-Logo-06.svg";
import Stake from "./DelegateNami";
import DelegateNow from "./DelegateNamiLarge";
import TosiDropwbm from "../pages/Home/TosiDrop.webm";
import TosiDropmp4 from "../pages/Home/TosiDrop.mp4";

const EpochClock = React.lazy(() => import("./EpochClock"));

const Hometop = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative py-2 sm:py-3 lg:py-4">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="hidden md:block"></div>

          <h1 className="text-4xl mt-5 uppercase font-extrabold tracking-wider bg-clip-text lg:text-5xl">
            🌟{" "}
            <span className="mt-5 uppercase font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-500 text-4xl lg:text-5xl">
              Star Forge
            </span>{" "}
            ⚡
          </h1>
          <div className="flex items-center justify-center">
            <Logo className="m-4 h-28" />
          </div>

          <p className="mt-2 font-semibold tracking-wider text-3xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-500 lg:text-4xl">
            Cardano Stake Pool
          </p>
          <p className="mt-2 font-semibold tracking-tight text-xl">
            Ticker = OTG
          </p>
          <span className="inline-grid gap-4 md:gap-0 md:grid-cols-6 grid-cols-2 justify-center relative m-5 z-0">
            <Stake />
            <a
              rel="nofollow"
              href="https://tosidrop.io/"
              tabIndex="0"
              type="button"
              className="-ml-px relative justify-center items-center px-4 py-2 rounded-md md:rounded-none border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 btn-ghost border-accent hover:border-accent"
            >
              Tosidrop ☔
            </a>
            <a
              rel="nofollow"
              type="button"
              href="https://pool.pm/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"
              className="-ml-px relative justify-center items-center px-4 py-2 rounded-md md:rounded-none border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 btn-ghost border-accent hover:border-accent"
            >
              PoolPM
            </a>
            <a
              rel="nofollow"
              href="https://cardanoscan.io/pool/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"
              type="button"
              className="-ml-px relative justify-center items-center px-4 py-2 rounded-md md:rounded-none border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 btn-ghost border-accent hover:border-accent"
            >
              Cardanoscan
            </a>
            <a
              rel="nofollow"
              href="https://pooltool.io/pool/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"
              type="button"
              className="-ml-px relative justify-center items-center px-4 py-2 rounded-md md:rounded-none border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 btn-ghost border-accent hover:border-accent"
            >
              PoolTool
            </a>
            <a
              rel="nofollow"
              href="https://adatools.io/pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"
              type="button"
              className="-ml-px relative justify-center items-center px-4 py-2 rounded-md md:rounded-none border md:rounded-r-md text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 btn-ghost border-accent hover:border-accent"
            >
              AdaTools
            </a>
          </span>

          <p className="container-fluid mb-10 mt-5 max-w-prose mx-auto text-xl">
            The Star Forge is a fully ARM'ed solar powered Starlink connected
            Off The Grid Cardano Stake Pool with 2 weeks of LiFePo4 battery
            storage.
          </p>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />

        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-2 right-2 -mt-20 -mr-20 text-accent"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className=""
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center outline outline-2 outline-accent"
                    src={Cover}
                    alt="Cardano Stake Pool Star Forge"
                    width={599}
                    height={839}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <a
                rel="nofollow"
                href="https://tosidrop.io/"
                tabIndex="0"
                type="button"
                className=""
              >
                <video
                  className="mb-5 rounded-xl outline outline-2 outline-accent"
                  width="750"
                  height="500"
                  autoPlay
                  muted
                  playsInline
                  loop
                >
                  <source src={TosiDropmp4} type="video/mp4" />
                  <source src={TosiDropwbm} type="video/webm" />
                </video>
              </a>
              <div>
                <div>
                  {" "}
                  <h4 className="text-center leading-8 tracking-tight">
                    Next Drop In
                  </h4>
                </div>
                <div className="-mb-5 flex justify-center items-center">
                  <Suspense
                    fallback={
                      <div className="flex justify-center items-center mb-10">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
                      </div>
                    }
                  >
                    <EpochClock />
                  </Suspense>
                </div>
              </div>
              <p className="mb-10 mt-8 max-w-prose mx-auto text-xl">
                To be eligible to claim all you have to do is stake your ADA to
                the Star Forge. That's it, then at the beggining of every epoch
                go to{" "}
                <a
                  rel="nofollow"
                  href="https://tosidrop.io/"
                  tabIndex="0"
                  type="link"
                  className="underline"
                >
                  https://tosidrop.io
                </a>
                .
              </p>
              <p className="mb-10 mt-5 max-w-prose mx-auto text-xl">
                From there you can either connect your dapp capable wallet or
                manually enter your wallets stake key or a recieving address
                from the wallet currently staked to the pool You will be
                presented with a list of current token distributions. You can
                choose to claim all of them or only the ones you want.
              </p>
            </div>
            <div className="justify-center items-center">
              <DelegateNow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometop;
