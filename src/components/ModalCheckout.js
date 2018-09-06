import React from "react";
import ReactModal from "react-modal";
import CustomerForm from "./CustomerForm";

class ModalCheckout extends React.Component {
  render() {
    return (
      <ReactModal
        isOpen={this.props.isOpen}
        appElement={document.getElementById("root")}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button id="close-modal" aria-label="Close payment modal box">
          &times;
        </button>
        <CustomerForm basket={this.props.basket} />
      </ReactModal>
    );
  }
}
export default ModalCheckout;
