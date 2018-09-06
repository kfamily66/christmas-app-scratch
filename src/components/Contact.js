import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="section contact">
        <div className="container no-bg">
          <h1 className="page__header">Contact</h1>
          <div className="moveRight">
            <h3 className="moveRight--paragraph">
              <a href="mailto:hello@TCCTREE.com">hello@TCCTREE.com</a>
            </h3>
            <h3 className="moveRight--paragraph">
              <a href="mailto:commercial@TCCTREE.com">commercial@TCCTREE.com</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
