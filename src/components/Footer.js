import React from "react";

const Footer = props => (
  <footer>
    <div className="row">
      <p>Arrows</p>
      <p>Scroll down</p>
      <div className="inline">
        <h2>{props.counter.current + 1}</h2>/6
      </div>
    </div>
  </footer>
);

export default Footer;
