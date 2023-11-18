import React from 'react';

import cl from "./SuccsessfulOrder.module.scss";

const SuccsessfulOrder = ({onClose, idOrder}) => {
    return (
        <div className={cl.content}>
            <div className={cl.ico}>
                <img className={cl.img} src="./img/successful.png" alt="image" />
            </div>
            <h2 className={cl.title}>Order placed!</h2>
            <p className={cl.text}>Thank you for ordering. Your order is #{idOrder}, expect delivery within 24 hours.</p>
            <button className={cl.btn} onClick={() => onClose(false)}>Go back</button>
        </div>
    );
}

export default SuccsessfulOrder;
