import { useState } from 'react';
import './navbar.scss';
import { Badge, IconButton } from '@mui/material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { categories } from '../data';
const Navbar = () => {
  const[isOpen,setIsOpen] = useState(false);
  const[isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleDropDown =()=>{
    setIsOpen(!isOpen);
  }
  const mobileOpen=()=>{
    setIsMobileOpen(!isMobileOpen);
  }
  return (
    <div className='navbar'>
      {
        isMobileOpen &&(
          <div className='mobile-menu'>
          <div className='mobile-menu-wrapper'>
          <div className='menu-header'>
          <img onClick={mobileOpen} src="./icon-close.svg" alt="" />
          <div className='menu-logo'>
          <Link to='/' className='link logo'>
          <h1>E-Store</h1>
          <i class='bx bx-store-alt'></i>
          </Link>
          </div>
          </div>
          <div className='menu-section-1'>
            <Link to='/dashboard' className='link'><p className='account-menu'>My E-Store Account</p></Link>
            <Link to='./cart' className='link menu-orders'>
            <i class='bx bxs-inbox'></i>
            <p>Orders</p>
            </Link>
          </div>
          <div className='menu-section-2'>
            <p className='menu-section-2-title'>Our Categories</p>
            {
              categories.map((items)=>(
                <Link to={`/products/${items.cat}`} className='link' >
                <div className='menu-cat-item' key={items.id}>
                  <img src={items.img} alt="" />
                  <span>{items.title}</span>
                  </div>
                </Link>
                  
              ))
            }
          </div>
          </div> 
        </div>
        )
      }
     
      <div className="left">
      <div className='mobile-open'>
          <img onClick={mobileOpen} src="./icon-menu.svg" alt="" />
        </div>
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
        <Link to='/login' className='link'><button className='mobile-account'><i class='bx bx-user' ></i></button></Link>
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
            <span className='cart-word'>Cart</span>
            </div>
          </Link>

      </div>
    </div>
  )
}

export default Navbar;