
import './style.css';
import bttr from './../Gallery/images/better-img.png';

export function AboutPage() {
  return (
    <div className="container mt-40">
      <div class="flex flex-wrap -mx-2 overflow-hidden">

        <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h1 class="text-4xl mb-4">🌟 About</h1>
          <p>Hello, my name is <a href="https://armada-alliance.com/identities/wcat-otg">WCat</a>. I run a totally off
            the grid stakepool using solar panels, batteries and Starlink. I am a founding member of the Armada Alliance
            & spend most of my time helping single stake pool operators run on efficient arm based computers.</p>
          <p>Learn how to run cardano-node on a Raspberry Pi 4 & interact with the blockchain or build a stake pool. My
            image & guide can be found here.
          </p>
          <a href="https://docs.armada-alliance.com/learn/intermediate-guide/pi-pool-tutorial"></a>
          <p>I have a post that was <a href="https://twitter.com/IOHK_Charles/status/1413841059507998722?s=09">retweeted
            by Charles</a> that I am proud of. I have met so many awesome people, most of which are stake pool
            operators.
          </p>
          <h1 class="text-4xl mt-4 mb-4">🌟 Durability</h1>
          <p>Running a block producer from home allows for the greatest level of security & a few tricks for failover.
            Protected by the latest version of <a rel="nofollow" href="https://openwrt.org/">OpenWRT</a> and the <a
              rel="nofollow" href="https://www.turris.com/en/omnia/overview/">Turris Omnia</a> the block producer is
            isolated on a seperate vlan with
            it's own 1 Gbps interface connected directly to Starlinks power brick.</p>
          <p>The entire stake pool uses less than 100 watts of electricity, including Starlink!
          </p>
          <p>The original battery I hand built from reclaimed laptop batteries has been retired due to Starlinks
            requirements. The pool now has 22KwH's of LiFePo4 starage and can run for over 15 days without any sunlight.
          </p>
          <h1 class="text-4xl mt-4 mb-4">🌟 Security & Privacy</h1>
          <p>The Turris Omnia is an amazing router with <a rel="nofollow" href="https://www.knot-dns.cz/">Knot
            Resolver</a> providing <a rel="nofollow"
              href="https://www.ionos.com/digitalguide/server/security/dns-over-tls/">DNS over TLS (DoT)</a> &
            <a rel="nofollow" href="https://www.dnssec.net/">DNSSEC</a> validating '<a rel="nofollow"
              href="https://dnssec-debugger.verisignlabs.com/adamantium.online">adamantium.online</a>'.
          </p>
          <h2>OpSec</h2>
          <p>All communication to the M1 Mini core is through Wireguard UDP VPN's. Essentially the pool looks like a
            couple encrypted webcam feeds on the wire. Network failover to a broadband ISP with DDNS updating DNS
            records.</p>
          <ul>
            <li><a rel="nofollow" href="https://www.ionos.com/digitalguide/server/security/dns-over-tls/">DNS over TLS
              (DoT)</a></li>
            <li><a rel="nofollow"
              href="https://www.ionos.com/digitalguide/server/know-how/dnssec-internet-standards-for-authenticated-name-resolution/">DNSSEC</a>
            </li>
            <li><a rel="nofollow" href="https://tools.ietf.org/html/bcp38">Source Address Spoofing Protection
              (BCP38)</a></li>
          </ul>
          <h2>Powerwall Specs</h2>
          <p>The current list of hardware can be found on the <a class="btn btn-large btn-outline-info"
            aria-current="true"
            href="https://armada-alliance.com/stake-pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae">Armada
            Alliance</a> website under my pools page.</p>
          <h2>Thank you for checking out my project. Please support my work by delegating your ada to my pool. <a
            class="btn btn-large btn-outline-success" type="button" onclick="handleDelegate()">Stake With Me</a></h2>
        </div>

        <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div class="w-full col-span-2 row-span-2 rounded">
            <img
              className="mt-12 rounded"
              src={bttr}
              title="Cardano Stake Pool"
              alt="M1 Mini Stake Pool"
            ></img>
          </div>
        </div>

        <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">

        </div>
        <div class="my-2 px-2 w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2">
        </div>
      </div>
    </div>
  );
}
