import { NavLink } from "react-router-dom";


const Menu = () => {

  return (
    <div className="relative">
      <div class="absolute inset-y-48 left-5 w-16 hidden md:block">
        <ul class="menu bg-secondary bg-opacity-50 indigo-500 ring-inset ring-2 w-56 rounded-box">
          <li>
            <NavLink exact to={'/'}
              activeClassName="bordered"
              className="App-NavLink">
              Home
            </NavLink></li>
          <li><NavLink exact to={'/gallery'}
            activeClassName="bordered"
            className="App-NavLink">
            Gallery
          </NavLink></li>
          <li>
            <NavLink exact to={'/about'}
              activeClassName="bordered"
              className="App-NavLink">
              About
            </NavLink></li>
          <li><label htmlFor="my-drawer-4" className="">View pool Stats</label>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
export default Menu;