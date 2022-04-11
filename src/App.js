import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { GalleryPage } from "./pages/Gallery";
//import Menu from "./components/Menu";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/gallery" exact component={GalleryPage} />
      <Route path="/about" exact component={AboutPage} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
