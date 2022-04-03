import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { HomePage } from './pages/Home';
import { About } from './pages/About';

const App = () => (
  <BrowserRouter>
    <Navbar class="container"/>
    <div class="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle"></input>
      <div class="drawer-content">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
      <Drawer />
    </div>
    <Footer />

  </BrowserRouter>

);

export default App;