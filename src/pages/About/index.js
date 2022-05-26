import Topnav from "../../components/Topnav";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Menu from "../../components/Menu";
import M3 from "./images/m3-star-forge.jpg";
import CP from "./images/completed-packs.jpg";
import Stake from "../../components/DelegateNami";

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
