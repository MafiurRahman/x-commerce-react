import React from 'react';
import logo from '../../images/xCommerce.PNG';
import './Header.css';
const Header = () => {
    return (
        <><div className='headerLogo'>
            <img src={logo} alt="" />
        </div><div className="navBar">
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
        </div>
        <div className="searchBar">
            <input className='inputBox' type="text" />
            <button className="searchBtn">SEARCH</button>
        </div>
        </>

    );
};

export default Header;