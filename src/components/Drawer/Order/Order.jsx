import React, {useState} from 'react';

import cl from "./Order.module.scss";


const Order = ({setIsModal, allPrice}) => {

    const addOrder = () => {
        allPrice();
        setIsModal(true);
    }

    return (
        <div className={cl.content}>
            <button className={cl.btn} onClick={addOrder}>Place an order</button>
        </div>
    );
}

export default Order;
