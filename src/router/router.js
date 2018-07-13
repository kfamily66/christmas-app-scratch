import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Shop from "../components/Shop";
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";
import Screen3 from "../components/Screen3";
import Screen4 from "../components/Screen4";

const MainScreen = withRouter(({ location }) => (
  <div className="screen">
    <Header />
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={5000} classNames="main" mountOnEnter={true} unmountOnExit={true}>
        <Switch location={location}>
          <Route path="/" component={Home} exact={true} />
          <Route path="/screen1" component={Screen1} />
          <Route path="/screen2" component={Screen2} />
          <Route path="/screen3" component={Screen3} />
          <Route path="/screen4" component={Screen4} />
          <Route path="/shop" component={Shop} />
          <Route render={() => <div>Not Found</div>} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    <Footer />
  </div>
));

const AppRouter = () => (
  <Router>
    <MainScreen />
  </Router>
);

export default AppRouter;
