import React from "react";
import ModalCheckout from "./ModalCheckout";
import BasketItem from "./BasketItem";

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  handleOpenModal = () => {
    this.setState(() => ({
      isOpen: true
    }));
    document.querySelector(".ReactModalPortal").addEventListener("click", e => {
      if (e.target.id === "close-modal") {
        this.setState(() => ({
          isOpen: false
        }));
      }
    });
  };
  render() {
    return (
      <div className="shop__checkout">
        <h2 className="center">Your selection</h2>

        <div className="basket">
          <ul>
            {this.props.basketItems.map((item, index) => (
              <BasketItem
                index={index}
                item={item}
                items={this.props.items}
                key={item[0]}
                handleMinusItem={this.props.handleMinusItem}
                handlePlusItem={this.props.handlePlusItem}
                handleRemoveItem={this.props.handleRemoveItem}
              />
            ))}
          </ul>
          <h3 className="basket__total">
            Order total: £
            {this.props.basketItems.reduce((acc, item, index) => acc + this.props.items[item[0]].price * item[1], 0)}
          </h3>
          <h5 className="basket__business">
            Are you business customer? Please use email ict@order.co.uk to contact with us
          </h5>
        </div>
        <div className="basket__bottom">
          <button onClick={this.handleOpenModal}>Checkout</button>
        </div>

        <ModalCheckout id="modal" isOpen={this.state.isOpen} basket={this.props.basket} />
      </div>
    );
  }
}

export default Basket;
