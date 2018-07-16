import React from "react";

import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Shop from "../components/Shop";
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";
import Screen3 from "../components/Screen3";
import Screen4 from "../components/Screen4";

const views = [".home", ".one", ".two", ".three", ".four", ".shop"];
let clientY;

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    document.addEventListener("wheel", this.scrollToNext);
    document.addEventListener("touchstart", e => {
      clientY = e.touches[0].clientY;
    });
    document.addEventListener("touchend", e => {
      let deltaY;
      deltaY = e.changedTouches[0].clientY - clientY;

      if (deltaY < -40) {
        this.changeViewToNext();
      }
      if (deltaY > 40) {
        this.changeViewToPrev();
      }
    });
  }

  state = { current: 0 };
  scrollToNext = e => {
    this.state.current !== 0 && this.state.current !== 5 && document.removeEventListener("wheel", this.scrollToNext);
    if (e.deltaY > 0) {
      this.changeViewToNext();
    }
    if (e.deltaY < 0) {
      this.changeViewToPrev();
    }
  };
  changeViewToNext = () => {
    const current = this.state.current;
    const next = current + 1;

    if (current < 5) {
      document.removeEventListener("wheel", this.scrollToNext);
      document.querySelector(views[current]).classList.add("go-up");
      document.querySelector(views[next]).classList.add("active");
      document.querySelector(views[current]).classList.remove("active");
      this.setState(() => ({ current: next }));

      setTimeout(() => {
        document.addEventListener("wheel", this.scrollToNext);
      }, 300);
    }
  };
  changeViewToPrev = () => {
    const current = this.state.current;
    const prev = current - 1;

    if (current > 0) {
      document.removeEventListener("wheel", this.scrollToNext);
      document.querySelector(views[prev]).classList.remove("go-up");
      document.querySelector(views[prev]).classList.add("active");
      document.querySelector(views[current]).classList.remove("active");
      this.setState(() => ({ current: prev }));
      setTimeout(() => {
        document.addEventListener("wheel", this.scrollToNext);
      }, 300);
    }
  };
  render() {
    return (
      <div className="screen">
        <Header />
        <Home />
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
        <Shop />
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
