//import Hero from "../../components/Hero";

import NewHero from "../../components/Newhero";
import Hometop from "../../components/Hometop";
import Homemiddle from "../../components/Homemiddle";
import Menu from "../../components/Menu";

import "./style.css";

export function HomePage() {
  return (
    <>
      <NewHero />
      <Menu />
      <Hometop />
      <Homemiddle />
    </>
  );
}
