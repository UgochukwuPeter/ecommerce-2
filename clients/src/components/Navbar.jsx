import { useState } from 'react';
import './navbar.scss';
import { Badge, IconButton } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const[isOpen,setIsOpen] = useState(false);

  const toggleDropDown =()=>{
    setIsOpen(!isOpen);
  }
  return (
    <div className='navbar'>
      <div className="left">
        <Link to='/' className='link logo'>
        <h1>E-Store</h1>
        <i class='bx bx-store-alt'></i>
        </Link>
      </div>
      <div className="center">
        <div className='search'>
        <i class='bx bx-search'></i>
        <input type="text"  placeholder='search products, brands and categories' />
        </div>
        <button>Search</button>
      </div>
      <div className="right">
        <div className={`dropdown ${isOpen ? 'open': ''}`}>
        <button className='dropdown-toggle' onClick={toggleDropDown}><i class='bx bx-user' ></i>Account <span className={`arrow ${isOpen  ? 'up' :  'down'}`}></span> </button>
        
        {
          isOpen && (
            <div className='dropdown-content'>
              <button className='sign-in'>Sign in</button>
              <div className='dropdown-info'>
                <div className='dropdown-info-content'>
                  <i class='bx bx-user' ></i>
                  <p>Account</p>
                </div>
                <Link to='/cart' className='link'>
                <div className='dropdown-info-content'>
                <i class='bx bxs-inbox'></i>
                <p>Orders</p>
                </div>
                </Link>
               
              </div>
            </div>
          )
        }
        </div>
        <Link to='/cart' className='link'>
            <div className='cart'>
            <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined/>
            </Badge>
            </IconButton>
            <span>Cart</span>
            </div>
          </Link>

      </div>
    </div>
  )
}

export default Navbar;