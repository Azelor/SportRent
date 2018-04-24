import React from 'react';

import './CartToggle.css';

const cartToggle = (props) => {
  let cartVisibility = "CartToggle";
    if (props.cartOpen) {
      cartVisibility = "CartToggle CartOpen"
    }

    return (
  <div className={cartVisibility} onClick={props.clicked}>
    <img src="/assets/images/cart.svg" alt="logo" height="40px" />{props.quantity}
  </div>
)};

export default cartToggle;