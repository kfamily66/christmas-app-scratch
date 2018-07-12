import React from "react";
import ReactModal from "react-modal";
import CustomerForm from "./CustomerForm";

class ModalCheckout extends React.Component {
  render() {
    return (
      <ReactModal isOpen={this.props.isOpen} appElement={document.getElementById("root")}>
        <div>
          <button id="close-modal">X</button>
          <CustomerForm />
        </div>
      </ReactModal>
    );
  }
}
export default ModalCheckout;
