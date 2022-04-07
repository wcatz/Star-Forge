import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { GalleryPage } from './pages/Gallery';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";


const App = () => (

  <BrowserRouter>

    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle"></input>
      <div className="drawer-content">
        <Navbar
          className="relative">
        </Navbar>
        <Menu />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/gallery" exact component={GalleryPage} />
          <Route path="/about" exact component={AboutPage} />
        </Switch>
      </div>
      <Drawer />
  
    </div>
    <Footer />
  </BrowserRouter>

);

export default App;