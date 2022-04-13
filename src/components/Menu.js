import Menulist from "./Menulist";


const Menu = () => {
  return (
    <div className="absolute w-36 inset-x-10 inset-y-48 hidden xl:block">
      <ul className="menu menu-compact p-2 w-48 rounded-box bg-secondary bg-opacity-50 mb-1 border-t-2 border-2 border-accent overflow-hidden">
        <Menulist />
      </ul>
    </div>
  );
};
export default Menu;
