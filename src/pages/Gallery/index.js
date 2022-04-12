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
    caption: "Next generatio Stake Pool",
    source: images["m1-star-forge.jpg"],
  },
  {
    title: "IMG_4985.HEIC",
    caption: "3.9 MB",
    source: images["m2-star-forge.jpg"],
  },
  {
    title: "IMG_4985.HEIC",
    caption: "3.9 MB",
    source: images["m3-star-forge.jpg"],
  },
  {
    title: "IMG_4985.HEIC",
    caption: "3.9 MB",
    source: images["m4-star-forge.jpg"],
  },
  {
    title: "IMG_4985.HEIC",
    caption: "3.9 MB",
    source: images["m1-star-forge.jpg"],
  },
  {
    title: "IMG_4985.HEIC",
    caption: "3.9 MB",
    source: images["m1-star-forge.jpg"],
  },
  {
    title: "IMG_4985.HEIC",
    caption: "3.9 MB",
    source: images["m1-star-forge.jpg"],
  },
  {
    title: "IMG_4985.HEIC",
    caption: "3.9 MB",
    source: images["m1-star-forge.jpg"],
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
      <div className="container mt-36">
        <ul className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group block w-full aspect-w-12 aspect-h-10 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 overflow-hidden">
                <img
                  src={file.source}
                  alt=""
                  className="object-cover pointer-events-none group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
              <p className="mt-2 block text-sm font-mediumtruncate pointer-events-none">
                {file.title}
              </p>
              <p className="block text-sm font-medium pointer-events-none">
                {file.caption}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
