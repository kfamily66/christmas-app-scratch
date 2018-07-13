import React from "react";

class Screen2 extends React.Component {
  componentDidMount() {
    const history = this.props.history;
    const scrollToNext = e => {
      document.removeEventListener("wheel", scrollToNext);
      if (e.deltaY > 0) {
        setTimeout(() => history.push("/screen3"), 300);
      }
      if (e.deltaY < 0) {
        setTimeout(() => history.push("/screen1"), 300);
      }
    };
    document.addEventListener("wheel", scrollToNext);
  }

  render() {
    return (
      <div className="section two">
        <h1>Screen2</h1>
      </div>
    );
  }
}

export default Screen2;
