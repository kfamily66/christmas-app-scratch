import React from "react";
import { Link } from "react-router-dom";
import preventScroll from "../js/preventScroll";

class Home extends React.Component {
  goToShopHandler = e => {
    e.preventDefault();
    console.log("Click");
  };
  componentDidMount() {
    const history = this.props.history;
    document.addEventListener("wheel", preventScroll);
    const scrollToNext = e => {
      if (e.deltaY > 0) {
        document.removeEventListener("wheel", scrollToNext);
        setTimeout(() => {
          history.push("/screen1");
        }, 500);
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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam molestias sed nostrum delectus laborum quas!
        </p>
        <Link to="/shop">Go to shop</Link>
      </div>
    );
  }
}
export default Home;
