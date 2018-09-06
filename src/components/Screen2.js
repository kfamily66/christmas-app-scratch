import React from "react";
import Carousel from "nuka-carousel";

class Screen2 extends React.Component {
  render() {
    return (
      <div className="section two" id="gallery">
        <div className="container">
          <h1 className="page__header">GALLERY</h1>
          <Carousel>
            <img
              className="gallery__image"
              src={require("./../img/gal.jpg")}
              alt=""
            />
            <img
              className="gallery__image"
              src={require("./../img/bg111.jpg")}
              alt=""
            />
            <img
              className="gallery__image"
              src={require("./../img/ab11.jpg")}
              alt=""
            />
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Screen2;
