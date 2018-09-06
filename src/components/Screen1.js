import React from "react";

class Screen1 extends React.Component {
  render() {
    return (
      <div className="section one">
        <div className="container">
          <div className="about">
            <div className="aboutDescription">
              <h1 className="page__header">About</h1>
              <p>
                ‘The Contemporary Christmas Tree are created from high quality
                Acrylic and are designed for a modern living environment’
                Utilising human intelligent (”HI”) design in its construction
                and assembly, its’s elegant and smart structure delivers
                durability, transparency and longevity.
              </p>
              <p className="aboutSecondP">
                The copyright design delivers an aesthetically desirable
                alternative to the ‘traditional’ Christmas Tree through its'
                simplicity of construction, structural integrity and managed
                floor size ‘footprint’. The design also provides a convenient
                storage solution delivering a product that can be re-used over
                many years with the appropriate attention to handling, care and
                storage
              </p>
            </div>
            <div className="aboutPhoto" />
          </div>
        </div>
      </div>
    );
  }
}

export default Screen1;
