import React from "react";
import ModalCheckout from "./ModalCheckout";

class Shop extends React.Component {
  state = { isOpen: false };
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
  componentDidMount() {
    const history = this.props.history;
    const scrollToNext = e => {
      if (e.deltaY < 0) {
        document.removeEventListener("wheel", scrollToNext);
        setTimeout(() => history.push("/screen4"), 300);
      }
    };
    document.addEventListener("wheel", scrollToNext);
  }
  render() {
    return (
      <div className="section shop">
        <p>This is a shop page!</p>
        <button onClick={this.handleOpenModal}>Checkout</button>
        <ModalCheckout id="modal" isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default Shop;
