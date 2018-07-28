import React from "react";

const Header = props => (
  <header>
    <div className="row">
      {props.counter.current !== 0 && <p>Home</p>}
      <div className="menu">Menu</div>
    </div>
  </header>
);

export default Header;
