import React from "react";

class Screen1 extends React.Component {
  componentDidMount() {
    const history = this.props.history;

    const scrollToNext = e => {
      document.removeEventListener("wheel", scrollToNext);
      if (e.deltaY > 0) {
        setTimeout(() => history.push("/screen2"), 300);
      }
      if (e.deltaY < 0) {
        setTimeout(() => history.push("/"), 300);
      }
    };
    document.addEventListener("wheel", scrollToNext);
  }

  render() {
    return (
      <div className="section one">
        <h1>Screen1</h1>
      </div>
    );
  }
}

export default Screen1;
