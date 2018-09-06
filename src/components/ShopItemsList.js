import React from "react";
import Item from "./Item";

const ShopItemsList = props => (
  <div className="shop__list">
    <h2>Clear / Frosted</h2>
    <ul className="shop__list-ul">
      {props.items.map((item, index) => (
        <Item item={item} clickHandler={props.clickHandler} key={item.name} selected={index + 1 === props.selected} />
      ))}
    </ul>
  </div>
);

export default ShopItemsList;
