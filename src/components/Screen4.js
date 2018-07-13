import React from "react";

class Screen4 extends React.Component {
  componentDidMount() {
    const history = this.props.history;
    const scrollToNext = e => {
      document.removeEventListener("wheel", scrollToNext);
      if (e.deltaY > 0) {
        setTimeout(() => history.push("/shop"), 300);
      }
      if (e.deltaY < 0) {
        setTimeout(() => history.push("/screen3"), 300);
      }
    };
    document.addEventListener("wheel", scrollToNext);
  }
  render() {
    return (
      <div className="section four">
        <h1>Screen4</h1>
      </div>
    );
  }
}

export default Screen4;
