import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = e => {
    const obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(() => obj);
  };
  render() {
    return (
      <React.Fragment>
        <h3 className="modal-header">Please enter your details:</h3>
        <div className="container">
          <div className="small">
            <div className="form-row">
              <label className="required" htmlFor="firstname">
                First name
              </label>
              <input name="firstname" onChange={this.onChange} type="text" />
            </div>
            <div className="form-row">
              <label className="required" htmlFor="lastname">
                Last name
              </label>
              <input name="lastname" onChange={this.onChange} type="text" />
            </div>
            <div className="form-row">
              <label className="required" htmlFor="email">
                Email address
              </label>
              <input name="email" onChange={this.onChange} type="email" />
            </div>
            <div className="form-row">
              <label className="required" htmlFor="street">
                Street address
              </label>
              <input name="street" onChange={this.onChange} placeholder="House number and street name" type="text" />
            </div>
            <div className="form-row">
              <label className="required" htmlFor="city">
                Town / City
              </label>
              <input name="city" onChange={this.onChange} type="text" />
            </div>
            <div className="form-row">
              <label className="required" htmlFor="postcode">
                Postcode
              </label>
              <input name="postcode" onChange={this.onChange} type="text" />
            </div>
            <div className="form-row">
              <label className="required">Card details</label>
              <StripeProvider apiKey="pk_test_nZcqYGUuVPbbdWZiq5IHb9XU">
                <Elements>
                  <CheckoutForm customer={this.state} basket={this.props.basket} />
                </Elements>
              </StripeProvider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomerForm;
