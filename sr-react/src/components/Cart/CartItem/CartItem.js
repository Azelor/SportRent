import React from 'react';

import './CartItem.css';

const cartItem = (props) => (
  <div className="CartItem">
    <div><img src={props.img} alt="ski" height="50"/></div>
    <div className="CartItemDescription">{props.name}</div>
    <div className="ButtonArea">
      <button className="More" onClick={() => props.add(props.id)}>+</button>
      <button className="Less" onClick={() => props.remove(props.id)}>-</button>
    </div>
    <div className="CartItemPrice">{props.attributes[0]+" - €"+props.attributes[1].toFixed(2)}</div>
  </div>
)

export default cartItem;