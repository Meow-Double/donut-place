import React, { useContext, useEffect, useState } from "react";

import Item from "./Item/Item";
import contextCart from "../../context/contextCart";
import contextOrder from "../../context/contextOrder";
import axios from "axios";

import cl from "./Drawer.module.scss";
import EmptyCart from "./EmptyCart/EmptyCart";
import Order from "./Order/Order";
import Modal from "./Modal/Modal";
import SuccsessfulOrder from "./succsessfulOrder/succsessfulOrder";

const Drawer = ({ open, setOpen }) => {

  const [isModal, setIsModal] = useState(false);
  const [orderCount, setOrderCount] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [popUp, setPopUp] = useState(false);
  const [orderSuccessfully, setOrderSuccessfully] = useState(false);
  const [loading, setLoading] = useState(true)

  const {cartItems, setCartItems } = useContext(contextCart);
  const {orderItems} = useContext(contextOrder);

  const removeCartItem = (obj) => {
    setCartItems(cartItems.filter((item) => item.id !== obj.id));
    setOrderCount(orderCount.filter(item => item.id !== obj.id));
    try {
      axios.delete(`http://localhost:3000/cart/${obj.id}`,);    
    } catch (err) {
        console.log(err.message);
    }
  };

  const allPrice = () => {
    setTotalPrice(orderCount.reduce((sum, item) => (Number(item.price) * Number(item.count)) + sum, 0));
  }

  useEffect(() => {
    if (orderSuccessfully){
      setOrderSuccessfully(false);
    }
  },[open]);

  useEffect(() => {
    ( async () => {
      try {
        setLoading(true);
        const {data} = await axios.get("http://localhost:3000/cart");
        setCartItems(data);     
        setLoading(false);
      } catch (err) {
          console.log(err.message);
      }
    })()
  },[]);

  const renderItems = () =>{
    return (loading ? [...Array(3)] : cartItems.map((obj,index) => <Item key={index} onRemove={ () => removeCartItem(obj)} {...obj} items={orderCount} setOrderCount={setOrderCount} loading={loading}/>))
  }

  return (
    <>
        <div
        className={`${cl.overlay} ${open ? cl.active : ""}`}
        onClick={() => setOpen(false)}
        >
          <div className={`${cl.popUpContent} ${popUp && open ? cl.activePopUp : null}`}>
            <h3 className={cl.popUpTitle}>Thank you for your purchase!</h3>
          </div>
          <div className={cl.content} onClick={(e => e.stopPropagation())}>
                  <div className={cl.drawerRow}>
                    <div>
                        <h2 className={cl.title}>Shopping cart</h2>
                    </div>
                    <span className={cl.close} onClick={() => setOpen(false)}>
                      <img src="./img/close.svg" alt="close" onClick={() => setIsModal(false)} />
                    </span>
                  </div>
            {
              cartItems.length 
              ?
              <>
                <ul className={cl.items}>
                  {renderItems()}
                </ul>
                <Order setIsModal={setIsModal} allPrice={allPrice}/>
              </>
              :
              orderSuccessfully 
              ?
              <SuccsessfulOrder onClose={setOpen} idOrder={orderItems.length}/>
              :
              <EmptyCart onClose={setOpen} setOrderCount={setOrderCount}/>
            }
          </div>
        </div>
        <Modal totalPrice={totalPrice} setIsModal={setIsModal} isModal={isModal} cartItems={cartItems} orderCount={orderCount} setPopUp={setPopUp} setOrderSuccessfully={setOrderSuccessfully}/>
    </>
  );
};

export default Drawer;



