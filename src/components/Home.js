import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    const history = this.props.history;

    const scrollToNext = e => {
      if (e.deltaY > 0) {
        document.removeEventListener("wheel", scrollToNext);
        const home = document.querySelector(".home");
        home.classList.add("exit");
        setTimeout(() => {
          history.push("/screen1");
        }, 200);
      }
    };
    document.addEventListener("wheel", scrollToNext);
  }

  render() {
    return (
      <div className="section home">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam molestias sed nostrum delectus laborum quas!
        </p>
        <Link to="/shop">Go to shop</Link>
      </div>
    );
  }
}
export default Home;
