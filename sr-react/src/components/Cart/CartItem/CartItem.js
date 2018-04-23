import React from 'react';

import './CartItem.css';

const cartItem = (props) => (
  <div className="CartItem">
      <div><img src={props.img} alt="ski" height="50"/></div>
      <div>{props.name}</div>
      <div>{"€"+props.price}</div>
    </div>
)

export default cartItem;