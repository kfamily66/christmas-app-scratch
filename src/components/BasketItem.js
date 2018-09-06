import React from "react";

const BasketItem = props => (
  <li className="basket__item" key={props.item[0]}>
    <div className="basket__item--name">{props.items[props.item[0]].name}</div>

    <div className="basket__item--quantity">
      <div
        className="basketItem__button quantity__minus"
        onClick={() => {
          props.handleMinusItem(props.item[0]);
        }}
      >
        -
      </div>
      {props.item[1]}
      <div
        className="basketItem__button quantity__plus"
        onClick={() => {
          props.handlePlusItem(props.item[0]);
        }}
      >
        +
      </div>
    </div>

    <div
      className="basket__item--remove basketItem__button"
      onClick={() => {
        props.handleRemoveItem(props.item[0]);
      }}
    >
      remove
    </div>
    <div className="basket__item--price">£{props.items[props.item[0]].price * props.item[1]}</div>
  </li>
);

export default BasketItem;
