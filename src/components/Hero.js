import Typer from "./CursorImitator";
const Hero = () => {
  return (
    <div className="h-5/6">
      <div
        className="hero h-full mb-5 rounded-b-[100px] md:rounded-b-[200px] border-b-4 border-indigo-500"
        style={{ backgroundImage: "url(../../images/stake-pool-hero.jpg)" }}
      >
        <div className="relative inset-y-30">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">
                <Typer
                  heading=""
                  messages={[
                    "Welcome user...",
                    "The Forge is validating transactions",
                    "All systems are nominal.",
                    "Have a nice day.",
                  ]}
                  speed={125}
                  infinite={false}
                ></Typer>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
