import React, { useEffect } from 'react';

import cl from "./EmptyCart.module.scss"

const EmptyCart = ({onClose, setOrderCount}) => {

    useEffect(() => {
        setOrderCount([]);
    },[])

    return (
        <div className={cl.content}>
            <div className={cl.ico}>
                <img src="./img/box.png" alt="" />
            </div>
            <h2 className={cl.title}>Shopping cart is empty</h2>
            <p className={cl.text}>To order an item, please add it to your cart! To order an item, please add it to your cart. Simply go to the products section and select your favorite donut. Then click on the plus sign. The product will be in your cart.</p>
            <button className={cl.btn} onClick={() => onClose(false)}>Go back</button>
        </div>
    );
}

export default EmptyCart;
