import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {};
  }
  async submit(ev) {
    this.setState(() => ({ complete: "pending" }));
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        token: token.id,
        basket: this.props.basket,
        ...this.props.customer
      })
    });
    if (response.ok) this.setState({ complete: true });
  }

  render() {
    let btnText;
    if (this.state.complete === "pending") {
      btnText = (
        <span className="icon">
          <FontAwesomeIcon pulse={true} icon="spinner" />
          Sending
        </span>
      );
    } else if (this.state.complete === true) {
      btnText = (
        <span className="icon">
          <FontAwesomeIcon icon="check-circle" />
          Success
        </span>
      );
    } else {
      btnText = "Send";
    }
    return (
      <div className="stripe-form">
        <CardElement />
        <button onClick={this.submit}>{btnText}</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
