import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_SP0F533sYcVFXJBjGE3rat9v00fEy5pKQi";

  // Pass token to backend to create the charge | alert prompt to demo
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
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
