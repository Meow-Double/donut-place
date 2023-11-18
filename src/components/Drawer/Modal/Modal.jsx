import React, { useContext, useEffect, useState } from "react";
import MyModal from "../../../UI/MyModal/MyModal";
import cl from "./Modal.module.scss";
import axios from "axios";

import contextOrder from "../../../context/contextOrder";
import contextCart from "../../../context/contextCart";

const Modal = ({
  isModal,
  setIsModal,
  totalPrice,
  orderCount,
  cartItems,
  setPopUp,
  setOrderSuccessfully,
}) => {
  const [method, setMethod] = useState("0");

  const options = [
    { value: "0", name: "Within 3 days - free" },
    { value: "2", name: "Within 2 days - 2$" },
    { value: "5", name: "Within 24 hours - $5" },
  ];

  const total = (totalPrice + 1 + Number(method)).toFixed(2);

  const { orderItems ,setOrderItems} = useContext(contextOrder);
  const { setCartItems } = useContext(contextCart);

  const callPopUp = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 2400);
  };
  
  const addItemOrder = (arr) => {
    const date = new Date();
    const newItem ={
      id:orderItems.length + 1,
      orders: arr,
      total: total,
      date: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    };
    setOrderItems((prev) => [
      ...prev,
      newItem
    ]);
    try {
      axios.post("http://localhost:3000/order", newItem);
    } catch (err) {
        console.log(err.message);
    }
  };

  const addOrder = () => {
    callPopUp();
    setOrderSuccessfully(true);
    setIsModal(false);
    const cart = cartItems.map((obj) => obj);
    const order = orderCount.map((obj) => obj);
    const arr = [];

    for (let i = 0; i < cart.length; i++) {
      for (let j = 0; j < order.length; j++) {
        if (cart[i].id === order[j].id) {
          const obj = {
            title: cart[i].title,
            image: cart[i].image,
            info: cart[i].info,
            id: cart[i].id,
            price: order[j].price,
            count: order[j].count,
          };
          arr.push(obj);
        }
      }
    }      
    addItemOrder(arr);
    setCartItems([]);
    cartItems.forEach(item => {
      try {
          axios.delete(`http://localhost:3000/cart/${item.id}`);
      } catch (err) {
          console.log(err.message);
      }
    });
  };

  return (
    <MyModal visible={isModal} setVisible={setIsModal}>
      <div className={cl.content}>
        <span className={cl.close}>
          <img
            src="./img/close.svg"
            alt="close"
            onClick={() => setIsModal(false)}
          />
        </span>
        <select
          className={cl.select}
          onChange={(event) => setMethod(event.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <div className={cl.menu}>
          <p>Your products:</p>
          <span></span>
          <p>{totalPrice}$</p>
        </div>
        <div className={cl.menu}>
          <p>Delivery:</p>
          <span></span>
          {Number(method) === 0 ? (
            <p>free</p>
          ) : Number(method) === 2 ? (
            <p>2$</p>
          ) : (
            <p>5$</p>
          )}
        </div>
        <div className={cl.menu}>
          <p>Taxion:</p>
          <span></span>
          <p>1$</p>
        </div>
        <div className={cl.menu}>
          <p>Total:</p>
          <span></span>
          <p>{total}$</p>
        </div>
        <button className={cl.btn} onClick={addOrder}>
          Place an order
        </button>
      </div>
    </MyModal>
  );
};

export default Modal;

