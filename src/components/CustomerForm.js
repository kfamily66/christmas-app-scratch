import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class CustomerForm extends React.Component {
  state = {};
  onChangeEmail = e => {
    const email = e.target.value;
    this.setState(() => ({
      email
    }));
  };
  onChangeAddress = e => {
    const address = e.target.value;
    this.setState(() => ({
      address
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>React Stripe Elements Example</h2>
        <div className="small">
          <input onChange={this.onChangeEmail} placeholder="E-mail" type="email" />
          <input onChange={this.onChangeAddress} placeholder="Address" type="text" />
          <StripeProvider apiKey="pk_test_nZcqYGUuVPbbdWZiq5IHb9XU">
            <Elements>
              <CheckoutForm customer={this.state} />
            </Elements>
          </StripeProvider>
        </div>
      </div>
    );
  }
}

export default CustomerForm;
