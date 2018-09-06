import React from "react";

const ItemDetails = props => (
  <div className="shop__details">
    <div className="shop__details-img" />
    <div className="row ">
      <h1>{props.selected}</h1>
      <button
        onClick={() => {
          props.addToBasketHandler(props.selected - 1);
        }}
      >
        Add to basket
      </button>
    </div>
  </div>
);

export default ItemDetails;
