import Gallery from "../../components/Gallery";
import Topnav from "../../components/Topnav";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Menu from "../../components/Menu";


export function GalleryPage() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <Topnav />
      <Menu />
      <Gallery />
    </>
  );
}
