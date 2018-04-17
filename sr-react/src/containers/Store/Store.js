import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/Product/Product';

class Store extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('/products')
    .then(response => {
      this.setState({products: response.data});
      console.log(response);
    })
  }

  render() {
    const products = this.state.products.map(product => {
      return <Product name={product.name}/>
    });

    return (
      <div className="Store">
        {products}
      </div>
    );
  }
}

export default Store;