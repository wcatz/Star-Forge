import Menulist from "./Menulist";
import Tosi_Matrix from "../pages/Home/Tosi_Matrix.mp4";

const Menu = () => {
  return (
    <>
      <div className="flex hidden xl:block">
        <div className="flex absolute overflow-hidden inset-x-10 bottom-2/3">
          <ul className="menu menu-compact p-2 w-48 rounded-box mb-1 border-t-2 border-2 border-accent overflow-hidden">
            <Menulist />
          </ul>
        </div>
        <div className="hidden xl:block">
          <div class="flex justify-end absolute overflow-hidden inset-x-10 bottom-2/3 rounded-xl">
            <video
              className="opacity-50 rounded-xl"
              width="170"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={Tosi_Matrix} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
