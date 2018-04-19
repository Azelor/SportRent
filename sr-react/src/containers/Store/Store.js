import React, { Component } from 'react';
import axios from 'axios';

import Product from '../../components/Product/Product';
import SelectedProduct from '../../components/SelectedProduct/SelectedProduct';

class Store extends Component {
  state = {
    products: [],
    category: "skis"
  }

  componentDidMount() {
    axios.get('/products')
    .then(response => {
      this.setState({products: response.data});
      console.log(response);
    })
  }

  toggleSkis = () => {
    this.setState({category: "skis"});
  };

  toggleSnowboards = () => {
    this.setState({category: "snowboards"});
  };


  render() {
    const products = this.state.products.map(product => {
      if (product.category === this.state.category) {
        return <Product 
      key={product.id}
      name={product.name}
      price={product.price}
      brand={product.brand}
      img={product.img} />
      } else {
        return null;
      }
    });

    return (
      <div className="Store">
        <button onClick={this.toggleSkis}>Skis</button>
        <button onClick={this.toggleSnowboards}>Snowboards</button>
        {products}
        <SelectedProduct />
      </div>
    );
  }
}

export default Store;