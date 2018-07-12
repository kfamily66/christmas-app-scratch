import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Shop from "../components/Shop";
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";
import Screen3 from "../components/Screen3";
import Screen4 from "../components/Screen4";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/screen1" component={Screen1} />
        <Route path="/screen2" component={Screen2} />
        <Route path="/screen3" component={Screen3} />
        <Route path="/screen4" component={Screen4} />
        <Route path="/shop" component={Shop} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
