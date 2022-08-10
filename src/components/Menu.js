import Menulist from "./Menulist";
import Tosi_Matrix from "../pages/Home/Tosi_Matrix.mp4";

const Menu = () => {
  return (
    <>
      <div className="flex hidden xl:block">
        <div className="flex absolute inset-x-10 bottom-2/3">
          <ul className="menu menu-compact p-2 w-48 rounded-box mb-1 border-t-2 border-2 border-accent">
            <Menulist />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Menu;
