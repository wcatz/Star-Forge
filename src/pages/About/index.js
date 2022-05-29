import * as React from "react";
import Topnav from "../../components/Topnav";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Menu from "../../components/Menu";
import M3 from "./images/m3-star-forge.jpg";
import CP from "./images/completed-packs.jpg";
import Stake from "../../components/DelegateNami";

//import { Suspense } from "react";
//const EpochClock = React.lazy(() => import("../../components/EpochClock"));

export function AboutPage() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <Topnav />
      <Menu />

      <div className="py-16 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block font-semibold tracking-wider text-3xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-500 lg:text-4xl">
                Few details about the pool
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8">
              Pool operated by{" "}
              <a
                rel="nofollow"
                className="underline"
                href="https://armada-alliance.com/identities/wcat-otg"
              >
                WCat
              </a>
              . I run a totally off the grid stakepool using solar panels,
              LiFePo4 batteries Apple Silicon and Starlink. I am a founding
              member of the{" "}
              <a className="underline" href="https://armada-alliance.com">
                Armada Alliance
              </a>{" "}
              & on the core dev team for{" "}
              <a
                rel="nofollow"
                href="https://tosidrop.io/"
                className="underline"
              >
                Tosidrop
              </a>
              . I spend most of my time helping single stake pool operators run
              on efficient arm based computers.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg mx-auto">
            <p>
              Learn how to run cardano-node on a Raspberry Pi 4 & interact with
              the blockchain or build a stake pool.
            </p>
            <ul>
              <li>
                <a
                  className="underline"
                  rel="nofollow"
                  href="https://www.ionos.com/digitalguide/server/security/dns-over-tls"
                >
                  DNS over TLS (DoT)
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  rel="nofollow"
                  href="https://www.ionos.com/digitalguide/server/know-how/dnssec-internet-standards-for-authenticated-name-resolution"
                >
                  DNSSEC
                </a>
              </li>
              <li>
                <a
                  className="underline"
                  rel="nofollow"
                  href="https://tools.ietf.org/html/bcp38"
                >
                  Source Address Spoofing Protection (BCP38)
                </a>
              </li>
            </ul>
            <p>
              The block producer is isolated on a seperate vlan with it's own 1
              Gbps interface connected directly to Starlinks power brick.
            </p>
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
            
            <h2 className="font-semibold tracking-wider text-3xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-500 lg:text-4xl">
              Security & Privacy
            </h2>
            <p>
              The Turris Omnia is an amazing router with{" "}
              <a
                className="underline"
                rel="nofollow"
                href="https://www.knot-dns.cz/"
              >
                Knot Resolver
              </a>{" "}
              providing{" "}
              <a
                className="underline"
                rel="nofollow"
                href="https://www.ionos.com/digitalguide/server/security/dns-over-tls"
              >
                DNS over TLS (DoT)
              </a>{" "}
              and{" "}
              <a
                className="underline"
                rel="nofollow"
                href="https://www.dnssec.net/"
              >
                DNSSEC
              </a>{" "}
              validating '
              <a
                className="underline"
                rel="nofollow"
                href="https://dnssec-debugger.verisignlabs.com/adamantium.online"
              >
                adamantium.online
              </a>
              '.
            </p>
            <blockquote>
              <p>
                All communication to the Core is through a Wireguard UDP VPN.
                Essentially the pool looks like a couple encrypted webcam feeds
                on the wire. Network failover to broadband ISP with DDNS
                updating DNS records.
              </p>
            </blockquote>
            <figure>
              <img
                className="rounded-lg shadow-lg object-cover object-center outline outline-2 outline-accent"
                src={M3}
                title="Cardano Stake Pool"
                alt="M1 Mini Stake Pool"
              />
              <figcaption>
                You know you wanna stake here.. <Stake />
              </figcaption>
            </figure>
            <h2 className="font-semibold tracking-wider text-3xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-500 lg:text-4xl">
              Powerwall Specs (Deprecated)
            </h2>
            <p>
              Originally I had built a Tesla style Powerwall with lithium ion
              cells reclaimed from old laptop batteries. it was capable of
              running 3 raspberry Pi's on two solar panels. The power
              requirements for Starlink sealed the handmade batteries fate. I
              hope to use it soon with another project.
            </p>
            <figure>
              <img
                className="rounded-lg shadow-lg object-cover object-center outline outline-2 outline-accent"
                src={CP}
                title="Homemade Powerwall"
                alt="Lithium Ion Battery pack"
              />
              <figcaption>3.8 kWh capacity</figcaption>
            </figure>
            <p>
              Building this battery took hundreds of hours and I do not
              recommend it. Each cell has to be obtained, taken apart and fully
              charged. Then discharged while measuring it's capacity and charged
              back up to a storage charge untill all the rest are processed.
              Then the banks need to be balanced, assembled and then soldered
              with 5 amp fast blow glass fuses on both sides. The soldering
              itself took over 50 hours.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
