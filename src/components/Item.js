import React from "react";

const Item = props => (
  <li
    className={props.selected ? "selected" : "non-selected"}
    onClick={() => {
      props.clickHandler(props.item.id);
    }}
  >
    <div className="shop__list-item">
      <h2>
        {props.item.name}
        <span className="shop__list-item--price"> £{props.item.price}</span>
      </h2>
      <p>{props.item.parameters}</p>
    </div>
  </li>
);

export default Item;
