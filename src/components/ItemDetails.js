import React from "react";
import img from "../img/ab.jpg";

const ItemDetails = props => (
  <div className="shop__details">
    <h2>{props.item.name}</h2>
    <img src={img} className="shop__details-img" alt="item showcase" />
    <div className="row ">
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
