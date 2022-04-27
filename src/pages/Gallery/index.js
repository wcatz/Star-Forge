//import Gallery from "../../components/Gallery";
import Topnav from "../../components/Topnav";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Menu from "../../components/Menu";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const files = [
  {
    title: "Star Forge",
    caption: "Next generation ARM64 Cardano Stake Pool",
    source: images["m1-star-forge.jpg"],
  },
  {
    title: "Off The Grid",
    caption: "110 Watt Power Consumption",
    source: images["m2-star-forge.jpg"],
  },
  {
    title: "Apple Silicon Arch Linux",
    caption: "Mac M1 Mini 6 watt draw each",
    source: images["m3-star-forge.jpg"],
  },
  {
    title: "Original Forge Box",
    caption: "Berry group nostalgia",
    source: images["delegate-cardano.jpg"],
  },
  {
    title: "12 Watt Stake Pool",
    caption: "Raspberry Pi 4 Stake Pool",
    source: images["stake-cardano.jpg"],
  },
  {
    title: "Learn to Build",
    caption: "Guide and Image for Pi-Node",
    source: images["star-forge-cardano-stake-pool.jpg"],
  },
];

export function GalleryPage() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <Topnav />
      <Menu />
      <div className="container mb-24 mt-36">
      <div className="flex items-center justify-center">
        <ul className="grid w-3/4 grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group block w-full aspect-w-12 aspect-h-10 rounded-lg outline outline-2 outline-accent overflow-hidden">
                <img
                  title={file.title}
                  src={file.source}
                  alt={file.caption}
                  className="object-cover"
                />
                <button
                  type="button"
                  className="absolute inset-0"
                >
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
              <p className="mt-2 block text-sm font-medium text-center truncate">
                {file.title}
              </p>
              <p className="block text-center text-sm font-medium">
                {file.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}
