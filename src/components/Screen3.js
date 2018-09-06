import React from "react";
import Basket from "./Basket";
import ShopItemsList from "./ShopItemsList";
import ItemDetails from "./ItemDetails";

class Screen3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      basket: {
        // id:count
      }
    };
  }
  onItemClick = itemId => {
    this.setState(() => ({
      selected: itemId
    }));
  };
  addToBasketHandler = itemId => {
    this.setState(prevState => {
      const newItem = {};
      if (prevState.basket[itemId]) {
        newItem[itemId] = prevState.basket[itemId] + 1;
      } else {
        newItem[itemId] = 1;
      }
      return { basket: { ...prevState.basket, ...newItem } };
    });
  };
  handleMinusItem = itemId => {
    this.setState(prevState => {
      const newItem = {};
      if (prevState.basket[itemId] === 1) {
        return prevState;
      } else {
        newItem[itemId] = prevState.basket[itemId] - 1;
        return { basket: { ...prevState.basket, ...newItem } };
      }
    });
  };
  handlePlusItem = itemId => {
    this.setState(prevState => {
      const newItem = {};
      newItem[itemId] = prevState.basket[itemId] + 1;
      return { basket: { ...prevState.basket, ...newItem } };
    });
  };
  handleRemoveItem = itemId => {
    this.setState(prevState => {
      const newBasket = prevState;
      delete newBasket.basket[itemId];
      return newBasket;
    });
  };
  items = [
    { id: 1, name: "Emperor", price: "4250", parameters: "9'10\"f / 3.0m, 10mm" },
    { id: 2, name: "Tsar", price: "3250", parameters: "9'f / 2.7m, 10mm" },
    { id: 3, name: "King", price: "2250", parameters: "7'f / 2.14m, 8mm" },
    { id: 4, name: "Duke", price: "1750", parameters: "6'f / 1.83m, 8mm" },
    { id: 5, name: "Prince", price: "1000", parameters: "5'f / 1.52m, 8mm" },
    { id: 6, name: "Earl", price: "700", parameters: "4'f / 1.22m, 5mm" },
    { id: 7, name: "Baron", price: "325", parameters: "3'f / 0.91m, 5mm" },
    { id: 8, name: "Knight", price: "225", parameters: "2'f / 0.61m, 5mm" }
  ];
  render() {
    return (
      <div className="section three">
        <div className="container">
          <h1 className="page__header">Shop</h1>
          <div className="shop row">
            <ShopItemsList items={this.items} selected={this.state.selected} clickHandler={this.onItemClick} />
            <ItemDetails selected={this.state.selected} addToBasketHandler={this.addToBasketHandler} />
            <Basket
              items={this.items}
              basket={this.state.basket}
              basketItems={Object.entries(this.state.basket)}
              handleMinusItem={this.handleMinusItem}
              handlePlusItem={this.handlePlusItem}
              handleRemoveItem={this.handleRemoveItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Screen3;
