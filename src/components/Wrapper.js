import React from "react";

import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";
import Screen3 from "../components/Screen3";

const views = [".home", ".one", ".two", ".three", ".contact"];
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
    this.state = { current: 0 };
  }

  // state = { current: 0 };
  scrollToNext = e => {
    this.state.current !== 0 &&
      this.state.current !== 4 &&
      document.removeEventListener("wheel", this.scrollToNext);
    if (e.deltaY > 0) {
      this.changeViewToNext();
    }
    if (e.deltaY < 0) {
      this.changeViewToPrev();
    }
  };

  updateCounterinMenu = newMenuVal => {
    console.log(newMenuVal);
    const current = this.state.current;

    document.querySelector(views[newMenuVal]).classList.add("active");
    document.querySelector(views[current]).classList.remove("active");
    this.setState(() => ({ current: newMenuVal }));

    for (let i = 0; i < newMenuVal; i++) {
      document.querySelector(views[i]).classList.add("go-up");
    }
    for (let i = views.length - 1; i >= newMenuVal; i--) {
      document.querySelector(views[i]).classList.remove("go-up");
    }
  };

  changeViewToNext = () => {
    const current = this.state.current;
    const next = current + 1;

    if (current < 4) {
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
        <Header counter={this.state} triggerMenu={this.updateCounterinMenu} />
        <Home />
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Contact />
        <Footer
          counter={this.state}
          triggerArrowDown={this.changeViewToNext}
          triggerArrowUp={this.changeViewToPrev}
        />
      </div>
    );
  }
}

export default Wrapper;
