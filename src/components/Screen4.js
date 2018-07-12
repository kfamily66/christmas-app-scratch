import React from "react";
import preventScroll from "../js/preventScroll";

class Screen4 extends React.Component {
  componentDidMount() {
    const history = this.props.history;
    document.addEventListener("wheel", preventScroll);
    const scrollToNext = e => {
      document.removeEventListener("wheel", scrollToNext);
      if (e.deltaY > 0) {
        setTimeout(() => history.push("/shop"), 500);
      }
      if (e.deltaY < 0) {
        setTimeout(() => history.push("/screen3"), 500);
      }
    };
    document.addEventListener("wheel", scrollToNext);
  }
  componentWillUnmount() {
    document.removeEventListener("wheel", preventScroll);
  }
  render() {
    return (
      <div>
        <h1>Screen4</h1>
      </div>
    );
  }
}

export default Screen4;
