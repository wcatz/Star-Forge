import { NavLink } from "react-router-dom";
import { HomeIcon, PhotographIcon, ChipIcon } from "@heroicons/react/outline";


const Menulist = () => {
  return (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
        >
          <HomeIcon className="h-5 w-5" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/gallery"}
          className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
        >
          <PhotographIcon className="h-5 w-5" />
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
        >
          <ChipIcon className="h-5 w-5" />
          About
        </NavLink>
      </li>
    </>
  );
};
export default Menulist;
