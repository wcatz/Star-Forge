import Typer from "./CursorImitator";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Hud from "./Hud";
import Topnav from "./Topnav";

//import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Newhero() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="relative h-3/4">
      <div className="absolute bottom-0 z-10 left-1/2 transform -translate-x-1/2">
        <Hud />
      </div>
      <div
        className="bg-cover bg-center relative starscreen overflow-hidden rounded-b-[100px] md:rounded-b-[200px] border-b-4 border-accent"
        style={{ backgroundImage: "url(../../stake-pool-hero.jpg)" }}
      >
        <Topnav />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="flex transform translate-x-1/2 -ml-44 overflow-hidden">
            <Typer
              heading=""
              messages={[
                "Welcome user",
                "Core authenticated",
                "with Ouroboros",
                "All systems are nominal",
                "Have a nice day.",
              ]}
              speed={175}
              infinite={false}
            ></Typer>
          </div>
        </div>
      </div>
    </div>
  );
}
