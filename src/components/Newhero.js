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
      <div className="nudge absolute bottom-0 z-10 left-1/2 transform -translate-x-1/2">
        <Hud />
      </div>
      <div
        className="bg-cover bg-center relative starscreen overflow-hidden rounded-b-[100px] md:rounded-b-[200px] border-b-4 border-accent"
        style={{ backgroundImage: "url(../../stake-pool-hero.jpg)" }}
      >
        <Topnav />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-7xl">
          <div className="flex justify-center text-center sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
            <Typer
              heading=""
              messages={[
                "Welcome user",
                "Core is authenticated",
                "Validating transactions",
                "All systems are nominal",
                "Have a nice day.",
              ]}
              speed={125}
              infinite={false}
            ></Typer>
          </div>
        </div>
      </div>
    </div>
  );
}
