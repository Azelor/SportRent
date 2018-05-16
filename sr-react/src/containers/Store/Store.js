import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Product from '../../components/Product/Product';
import SelectedProduct from '../../components/SelectedProduct/SelectedProduct';
import SelectionButtons from '../../components/Navigation/Sidebar/SelectionButtons/SelectionButtons';
import './Store.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Cart from '../../components/Cart/Cart';
import Backdrop from '../../components/Backdrop/Backdrop';
import Registration from '../Registration/Registration';

class Store extends Component {
  state = {
    products: [],
    category: "all",
    allCategories: ["all"],
    searchValue: "",
    product: null,
    showCart: false,
    cartItems: {}
  }

  componentDidMount() {
    axios.get('/products')
    .then(response => {
      // get unique values from array
      let uniqueCategories = ["all",...new Set(response.data.map(item => item.category))];
      this.setState({
        products: response.data,
        allCategories: uniqueCategories
      });
    })
  }

  searchValueHandler = (event) => {
    const newValue = event.target.value;
    this.setState({searchValue: newValue});
  }

  selectButtonHandler = (buttonId) => {
    this.setState({
      category: buttonId, 
      searchValue: ""});
  };

  selectProductHandler = (productId) => {
    this.setState({product: productId});
  }

  keyPressHandler = (event) => {
    if (event.key === 'Enter') {
      if (this.state.showCart) {
        this.setState({
          category: "all",
          product: null,
          showCart: false
      })} else {
      this.setState({
        category: "all",
        product: null
      });}}
  }

  addToCartHandler = (id) => {
    if (!this.state.cartItems.hasOwnProperty(id)) {
      let updatedCartItems = {...this.state.cartItems,
        [id]: [1, this.state.products[id-1].price, this.state.products[id-1] ]}
        this.setState({
      cartItems: updatedCartItems})
    }
  }

  increaseQuantityHandler = (id) => {
    const prevItemValues = this.state.cartItems[id];
    const newQuantity = prevItemValues[0]+1;
    const newPrice = parseFloat((prevItemValues[1]+this.state.products[id-1].price).toFixed(2));
    const updatedCartItems = {...this.state.cartItems}
    updatedCartItems[id] = [newQuantity, newPrice, prevItemValues[2] ];
    this.setState({cartItems: updatedCartItems});
  }

  decreaseQuantityHandler = (id) => { 
    const updatedCartItems = {...this.state.cartItems}
    const prevItemValues = updatedCartItems[id]
    if (prevItemValues[0] === 1) {
      delete updatedCartItems[id]
      this.setState({
        cartItems: updatedCartItems })
    } else {
    const prevItemValues = this.state.cartItems[id];
    const newQuantity = prevItemValues[0]-1;
    const newPrice = parseFloat((prevItemValues[1]-this.state.products[id-1].price).toFixed(2));
    
    updatedCartItems[id] = [newQuantity, newPrice, prevItemValues[2] ];
    this.setState({cartItems: updatedCartItems});
  } }

  cartClosedHandler = () => {
    this.setState({showCart : false})
  }

  cartToggleHandler = () => {
    this.setState( (prevState) => {
      return {showCart: !prevState.showCart};
    } );
  }

  render() { // If category "all" is selected, render all products, else render conditionally, based on selection
    let products = "";
    if (this.state.category === "all") {
      products = this.state.products.map(product => {
        if (product.name.toLowerCase().includes(this.state.searchValue.toLowerCase())) {
        return <Product 
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        brand={product.brand}
        img={product.img}
        clicked={() => this.selectProductHandler(product.id)}  />
    } else return null;
  
  })} else {
      products = this.state.products.map(product => {
      if (product.category === this.state.category
      && product.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
      ) {
        return <Product 
        key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        brand={product.brand}
        img={product.img}
        clicked={() => this.selectProductHandler(product.id)} />
      } else {
        return null;
      }
    })};

    return (
      <div>
        <Backdrop show={this.state.showCart} clicked={this.cartClosedHandler}/>
        <Cart  
          cartOpen={this.state.showCart}
          cartItems={this.state.cartItems}
          add={this.increaseQuantityHandler}
          remove={this.decreaseQuantityHandler}/>
        <Toolbar 
          changed={this.searchValueHandler} 
          search={this.keyPressHandler}
          quantity={Object.keys(this.state.cartItems).length}
          toggleCart={this.cartToggleHandler}
          cartOpen={this.state.showCart}
        />
        <div className="Sidebar">
          <SelectionButtons 
          categories={this.state.allCategories}
          selectButtonHandler={this.selectButtonHandler} />
        </div>
        <div className="MainArea">
          <Switch>
            <Route 
              path={"/" + this.state.product} 
              exact 
              render={(props) => <SelectedProduct 
                {...props} 
                cartItems={this.state.cartItems}
                add={() => this.addToCartHandler(this.state.product)} /> } />
            <Route 
              exact
              path='/register' 
              component={() => <Registration />} />
            <Route 
              path='/' 
              component={() => <div>{products}</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Store;