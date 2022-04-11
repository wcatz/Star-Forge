import Menulist from "./Menulist";


const Menu = () => {
  return (
    <div className="absolute w-48 inset-x-10 inset-y-48 hidden lg:block">
      <ul className="menu menu-compact p-2 w-48 rounded-box bg-secondary bg-opacity-50 mb-1 border-t-2 border-2 border-indigo-500 rounded-t-lg overflow-hidden">
        <Menulist />
      </ul>
    </div>
  );
};
export default Menu;
