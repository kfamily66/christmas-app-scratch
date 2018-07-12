import React from "react";
import preventScroll from "../js/preventScroll";

class Screen3 extends React.Component {
  componentDidMount() {
    const history = this.props.history;
    document.addEventListener("wheel", preventScroll);
    const scrollToNext = e => {
      document.removeEventListener("wheel", scrollToNext);
      if (e.deltaY > 0) {
        setTimeout(() => history.push("/screen4"), 500);
      }
      if (e.deltaY < 0) {
        setTimeout(() => history.push("/screen2"), 500);
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
        <h1>Screen3</h1>
      </div>
    );
  }
}

export default Screen3;
