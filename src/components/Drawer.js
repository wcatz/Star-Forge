import { Link } from "react-router-dom";

import React, { Component } from 'react';


const Drawer = () => {

  return (

  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
  );
}
export default Drawer;