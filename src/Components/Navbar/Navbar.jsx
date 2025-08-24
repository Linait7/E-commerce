import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './../Assets/logo.png'; 
import cart_icon from './../Assets/cart_icon.png';
const Navbar = () => {
    const [menu ,setMenu] = useState('shop');
    return (
        <div className="navbar">
            <div className ="navbar_logo">  
                <img src= {logo} alt="Logo" className="logo" />
                <p>SHOPPER</p>
            </div>
            <ul className ="links">
 < li onClick={() => setMenu("shop")}> <Link style = {{textDecoration: 'none'}} to="/">Shop</Link>  {menu === "shop" ? <hr /> : null}</li>
<li onClick={() => setMenu("Men")}><Link style = {{textDecoration: 'none'}} to="/men">Men</Link>{menu === "Men" ? <hr /> : null}</li>
<li onClick={() => setMenu("Women")}><Link style = {{textDecoration: 'none'}} to="/women">Women</Link>{menu === "Women" ? <hr /> : null}</li>
<li onClick={() => setMenu("Kids")}><Link style = {{textDecoration: 'none'}}  to="/kids">Kids</Link>{menu === "Kids" ? <hr /> : null}</li>

            </ul>
            <div className='cart'>
                <button className="cart-button"><Link style = {{textDecoration: 'none'}} to='/login'>login</Link></button>
               <Link style = {{textDecoration: 'none'}} to='/Cart'> <img src={cart_icon} alt="Cart-Icon" className="cart-icon" /></Link>
                <div className ="count">
                0
           </div>
            </div>
            
        </div>
    );
};

export default Navbar;