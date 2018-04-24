import React from 'react';

import './CartItem.css';

const cartItem = (props) => (
  <div className="CartItem">
      <div><img src={props.img} alt="ski" height="50"/></div>
      <div>{props.name}</div>
      <div>{"€"+props.price}</div>
      <button>+</button>
      <button>-</button>
    </div>
)

export default cartItem;