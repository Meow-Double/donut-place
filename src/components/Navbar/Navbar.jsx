import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

import IconFavorite from "../../../public/img/heart-ico.svg?react"
import cl from "./Navbar.module.scss"
import Drawer from '../Drawer/Drawer';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className={cl.inner}>
             <div className={cl.logo}>
              <img src="./img/logo.svg" alt="logo" />
              <span>Donut place</span>
            </div>
            <ul className={cl.menu}>
              <li>
                <NavLink to="/" className={({isActive}) => isActive? cl.active : ""}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/products" className={({isActive}) => isActive? cl.active : ""}>Products</NavLink>
              </li>
              <li>
              <NavLink to="/about-us" className={({isActive}) => isActive? cl.active : ""}>About us</NavLink>
              </li>
              <li>
              <NavLink to="/my-order" className={({isActive}) => isActive? cl.active : ""}>My Order</NavLink>
              </li>
            </ul>
            <div className={cl.services}>
                <button onClick={() => setIsOpen(true)}>
                  <img src="./img/cart-ico.svg" alt="ico" />
                  <span>Cart</span>
                </button>
                  <NavLink to="/my-favorite" className={({isActive}) => isActive? cl.activeFavorite : ""}>                  
                    <IconFavorite />
                    <span>Favorite</span>
                  </NavLink>
            </div>
            <Drawer open={isOpen} setOpen={setIsOpen}/>
        </nav>
    );
}

export default Navbar;
