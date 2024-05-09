import './cart.scss';
import {cart} from '../data';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartData = cart;
  if(cartData.length === 0){
    return(
      <div className='empty-cart'>
        <div className='empty-cart-container'>
        <i class='bx bx-cart'></i>
        <p className='empty-title'>Your cart is empty!</p>
        <p className='empty-desc'>Browse our categories and discover our best deals</p>
        <Link to='/' className='link'>
        <button>Start Shopping</button>
        </Link>
        </div>
      </div>
    )
  }
  return (
    <div>Cart</div>
  )
}

export default Cart;