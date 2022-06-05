import * as React from "react";
import Typer from "./CursorImitator";
import { Suspense } from "react";
import Topnav from "./Topnav";

//const EpochClock = React.lazy(() => import("./EpochClock"));
const Hud = React.lazy(() => import("./Hud"));

const Newhero = () => {
  return (
    <>
      <div className="relative h-3/4">
        <div className="absolute top-10 z-10 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 z-10 left-1/2 transform -translate-x-1/2">
          <Suspense
            fallback={
              <div className="flex justify-center items-center mb-10">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
              </div>
            }
          >
            <Hud />
          </Suspense>
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
                  "Welcome traveler.",
                  "Forge authenticated",
                  "All systems nominal.",
                  "Have a nice day.",
                ]}
                speed={175}
                infinite={false}
              ></Typer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newhero;
