import { NavLink } from "react-router-dom";
import { HomeIcon, PhotographIcon, ChipIcon } from "@heroicons/react/outline";
const Menulist = () => {
  return (
    <>
      <li>
        <NavLink
          exact
          to={"/"}
          activeClassName="bordered"
          className="hover-bordered"
        >
        <HomeIcon className="h-5 w-5"/>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to={"/gallery"}
          activeClassName="bordered"
          className="App-NavLink hover-bordered"
        >
         <PhotographIcon className="h-5 w-5"/>
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to={"/about"}
          activeClassName="bordered"
          className="App-NavLink hover-bordered"
        >
         <ChipIcon className="h-5 w-5"/>
          About
        </NavLink>
      </li>
    </>
  );
};
export default Menulist;
