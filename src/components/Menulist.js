import { NavLink } from "react-router-dom";
import { HomeIcon, PhotographIcon, ChipIcon } from "@heroicons/react/outline";

const Menulist = () => {
  return (
    <>
      <li>
        <NavLink
          to={"/"}
          activeclassname="bordered"
          className="hover-bordered"
        >
          <HomeIcon className="h-5 w-5" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/gallery"}
          activeclassname="bordered"
          className="hover-bordered"
        >
          <PhotographIcon className="h-5 w-5" />
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          activeclassname="bordered"
          className="hover-bordered"
        >
          <ChipIcon className="h-5 w-5" />
          About
        </NavLink>
      </li>
    </>
  );
};
export default Menulist;
