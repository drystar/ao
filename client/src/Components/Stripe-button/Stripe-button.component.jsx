import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios"
import { response } from "express";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_SP0F533sYcVFXJBjGE3rat9v00fEy5pKQi";

  // Pass token to backend to create the charge | alert prompt to demo
  const onToken = (token) => {

    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token 
      }
    }).then(response => {
      alert('Payment Successful')
    }).catch(error => {
      console.log('Payment Error: ', JSON.parse(error))
      alert('Payment Unsuccessful - Check your Details & Try Again')
    })
    };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ao"
      billingAddress
      shippingAddress
      image="https://svgshare.com/s/LEu"
      description={`Your total today is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
