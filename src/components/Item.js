import React from "react";

const Item = props => (
  <li
    className={props.selected ? "selected" : "non-selected"}
    onClick={() => {
      props.clickHandler(props.item.id);
    }}
  >
    <div className="shop__list-item">
      <div className="shop__list-item--props">
        <h2>{props.item.name}</h2>
        <p>{props.item.parameters}</p>
      </div>
      <h2 className="shop__list-item--price"> £{props.item.price}</h2>
    </div>
  </li>
);

export default Item;
