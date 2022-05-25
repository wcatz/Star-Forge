//import Hero from "../../components/Hero";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import NewHero from "../../components/Newhero";
import Hometop from "../../components/Hometop";
import Homemiddle from "../../components/Homemiddle";
import Menu from "../../components/Menu";

import "./style.css";

export function HomePage() {
    useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <NewHero />
      <Menu />
      <Hometop />
      <Homemiddle />
    </>
  );
}
