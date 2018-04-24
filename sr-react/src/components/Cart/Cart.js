import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './Cart.css';
import CartItem from './CartItem/CartItem';

class Cart extends Component {
  state = {cartIds: []}

  componentDidMount = () => {
    // this.setState((prevState) => {
    //   return {cartIds: prevState.cartIds};
    // })
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    
    let cartVisibility = "CartContainerHidden";
    if (this.props.cartOpen) {
      cartVisibility = "CartContainer"
    }
    let cart = this.props.cart.map(item => {
      //console.log(prevProps)
      //console.log(this.props.prevProps)
      // console.log(this.props.cartIds);
      // console.log(item.id);
      // if (this.props.cartIds.includes(item.id)) {
      //   console.log("includes in cart");
      //   return null;
      // }
      return <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      img={item.img} />
    
    });
    

    return (
      <div className={cartVisibility}>
        <div className="CartArea">
          <div className="Cart">
            <Scrollbars>{cart}</Scrollbars>
            <div className="CheckoutButton"><button>PROCEED TO CHECKOUT</button></div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Cart;