import React from 'react';

import './CartItem.css';

const cartItem = (props) => (
  <div className="CartItem">
    <div><img src={props.img} alt="ski" height="50"/></div>
    <div className="CartItemDescription">{props.name}</div>
    <div className="ButtonArea">
      <button className="More">+</button>
      <button className="Less">-</button>
    </div>
    <div className="CartItemPrice">{"€"+props.price}</div>
  </div>
)

export default cartItem;