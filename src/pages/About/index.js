import Topnav from "../../components/Topnav";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Menu from "../../components/Menu";
import M3 from "./images/m3-star-forge.jpg";


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
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">
                About
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8">
              Hello, my name is 
              <a rel="nofollow" href="https://armada-alliance.com/identities/wcat-otg"> WCat (Wayne)</a>
              . I run a totally off the grid stakepool using solar panels,
              LiFePo4 batteries Apple Silicon and Starlink. I am a founding member of the <a href="https://armada-alliance.com">Armada
              Alliance</a> & spend most of my time helping single stake pool
              operators run on efficient arm based computers.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg mx-auto">
            <p>
              Learn how to run cardano-node on a Raspberry Pi 4 & interact with
              the blockchain or build a stake pool.
            </p>
            <ul>
              <li>
                <a rel="nofollow" href="https://www.ionos.com/digitalguide/server/security/dns-over-tls">DNS over TLS (DoT)</a>
              </li>
              <li>
                <a rel="nofollow" href="https://www.ionos.com/digitalguide/server/know-how/dnssec-internet-standards-for-authenticated-name-resolution">DNSSEC</a>
              </li>
              <li>
                <a rel="nofollow" href="https://tools.ietf.org/html/bcp38">Source Address Spoofing Protection (BCP38)</a>
              </li>
            </ul>
            <p>
              The block producer is isolated on a seperate vlan with it's own 1
              Gbps interface connected directly to Starlinks power brick.
            </p>
            <h2>🌟 Security & Privacy</h2>
            <p>
              The Turris Omnia is an amazing router with
              <a rel="nofollow" href="https://www.knot-dns.cz/"> Knot Resolver</a>
              providing
              <a rel="nofollow" href="https://www.ionos.com/digitalguide/server/security/dns-over-tls"> DNS over TLS (DoT)</a>
              and
              <a rel="nofollow" href="https://www.dnssec.net/">DNSSEC</a>
               validating '
              <a rel="nofollow" href="https://dnssec-debugger.verisignlabs.com/adamantium.online">adamantium.online</a>
              '.
            </p>
            <blockquote>
              <p>
              All communication to the M1 Mini core is through Wireguard UDP
              VPN's. Essentially the pool looks like a couple encrypted webcam
              feeds on the wire. Network failover to a broadband ISP with DDNS
              updating DNS records.
              </p>
            </blockquote>
            <figure>
              <img
                className="rounded-lg shadow-lg object-cover object-center outline outline-2 outline-indigo-500 hover:outline-indigo-400"
                src={M3}
                title="Cardano Stake Pool"
                alt="M1 Mini Stake Pool"
              />
              <figcaption>
                You know you wanna stake here..
              </figcaption>
            </figure>
            <h2>⚡ Powerwall Specs (Deprecated)</h2>
            <p>
              Purus morbi dignissim senectus mattis <a href="https://dnssec-debugger.verisignlabs.com/adamantium.online">adipiscing</a>.
              Amet, massa quam varius orci dapibus volutpat cras. In amet eu
              ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut
              viverra ridiculus non molestie. Gravida quis fringilla amet eget
              dui tempor dignissim. Facilisis auctor venenatis varius nunc,
              congue erat ac. Cras fermentum convallis quam.
            </p>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
