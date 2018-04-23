import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './Cart.css';
import CartItem from './CartItem/CartItem';

class Cart extends Component {


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    
    let cart = this.props.cart.map(item => {
      return <CartItem
      name={item.name}
      price={item.price}
      img={item.img} />
    });

    return (
      <div className="CartContainer">
        <div className="Cart">{cart}</div>
      </div>
      
    );
  }
}

export default Cart;