import React from 'react';

import './Product.css';

const product = (props) => (
  <div className="Product">
    <h1>{props.name}</h1>
  </div>
)

export default product;