import Menulist from "./Menulist";


const Menu = () => {
  return (
    <>
      <div className="flex hidden xl:block ">
        <div className="flex absolute inset-x-10 bottom-2/3">
          <ul className="menu menu-compact p-2 w-48 rounded-box mb-1 border-t-2 border-2 border-accent bg-secondary bg-opacity-50">
            <Menulist />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Menu;
