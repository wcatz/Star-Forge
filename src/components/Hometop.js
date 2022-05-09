import Cover from "../pages/About/images/better-img.png";
import { ReactComponent as Logo } from "../pages/Gallery/images/Star-Forge-Logo-06.svg";

const Hometop = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative py-2 sm:py-3 lg:py-4">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">

          <div className="hidden md:block">
            <a
              rel="nofollow"
              href="https://vm.adaseal.eu/"
              tabIndex="0"
              className="mx-5 mt-5 btn btn-outline btn-success animate-pulse"
            >
              Vending Machine
            </a>
          </div>
          <h1 className="text-4xl mt-5 uppercase font-extrabold tracking-wider bg-clip-text">
            🌟{" "}
            <span className="mt-5 uppercase font-extrabold tracking-wider">
              Star Forge
            </span>{" "}
            ⚡
          </h1>
          <p className="mt-2 font-semibold tracking-tight sm:text-3xl">
            Cardano Stake Pool
          </p>

          <p className="mt-5 max-w-prose mx-auto text-xl">
            The Star Forge was built to showcase just how efficient EVERYONES
            favorite blockchain is.
          </p>
          <p className="mt-2 font-semibold tracking-tight sm:text-3xl">
            Ticker = OTG
          </p>
                    <div className="flex items-center justify-center">
            <Logo className="h-24" />
          </div>
          <div className="inline-grid lg:grid-cols-3 sm:grid-cols-1 justify-center">
            <a
              rel="nofollow"
              href="https://pool.pm/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"
              className="mx-5 mt-5 btn btn-ghost border-accent hover:border-accent"
            >
              pool pm
            </a>
            <a
              rel="nofollow"
              href="https://cardanoscan.io/pool/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"
              className="mx-5 mt-5 btn btn-ghost border-accent hover:border-accent"
            >
              Cardanoscan
            </a>
            <a
              rel="nofollow"
              href="https://pooltool.io/pool/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"
              className="mx-5 mt-5 btn btn-ghost border-accent hover:border-accent"
            >
              Pool Tool
            </a>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              Off The Grid Stake Pool
            </h3>
          </div>
        </div>
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
              <p className="text-lg">
                The{" "}
                <a
                  className="underline"
                  href="https://cardanoscan.io/pool/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae"
                >
                  Star Forge
                </a>{" "}
                is solar powered with 2 weeks of LiFePo4 battery storage and
                connected to the internet through Starlink with a failover onto
                cable internet provider. The pool consumes just 110 watts of
                power.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                There is a{" "}
                <a href="https://testnet.cardanoscan.io/pool/62b968226866ba28af09bd9e6cb700df979aff5b51aedbd49ee90cb6">
                  Star Forge testnet pool
                </a>
                , 2 <a href="https://www.freeloaderz.io/">Freeloaderz</a> submit
                endpoints,{" "}
                <a className="underline" href="https://www.koios.rest/">
                  Koios
                </a>{" "}
                and of course my work with the{" "}
                <a href="https://armada-alliance.com/">Armada Alliance</a>.
              </p>
              <p>
                Proud sponsor of <a href="https://espiga.org">espiga.org</a>{" "}
                thanks to the{" "}
                <a href="https://white.topopool.com/">White project</a> and{" "}
                <a href="https://twitter.com/CriptogirlB">(@CriptogirlB)</a> for
                the opportunity.
              </p>
              <p>
                I provide support to other Stake Pool operators, writing guides
                and providing a flashable image to quickly spin up and{" "}
                <a href="https://docs.armada-alliance.com/learn/stake-pool-guides/pi-pool-tutorial/pi-node-full-guide">
                  sync a node within an hour on a Raspberry Pi.
                </a>
              </p>
              <ul className="">
                <li>
                  <a href="https://www.apple.com/shop/buy-mac/mac-mini/apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb">
                    Mac M1 Mini
                  </a>{" "}
                  x3 <a href="https://asahilinux.org">Asahi Arch Linux</a>
                </li>
                <li>
                  <a href="https://www.turris.com/en/omnia/overview/">
                    Turris Omnia
                  </a>{" "}
                  open source router
                </li>
                <li>
                  <a href="https://www.starlink.com/">Starlink</a> internet
                  service provider
                </li>
                <li>
                  <a href="https://www.victronenergy.com/">Victron Solar</a>{" "}
                  MPPT charge controller and inverter
                </li>
              </ul>
              <p>
                True decentralization of the Cardano blockchain provides
                security to everyones investment. Staking to a baremetal single
                pool operator is extremely important and it is up to you to
                stake responsibly. The Star Forge is doing it's part by
                providing an extremely efficient and secure option. Please
                support my work by delegating to my pool. Thank you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometop;
