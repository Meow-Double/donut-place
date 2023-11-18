import React from 'react';

import cl from "./EmptyFavorited.module.scss";

const EmptyFavorited = () => {
    return (
        <>
            <h2 className={cl.title}>My favorites</h2>
            <div className={cl.decor}>
                <div className={cl.circle}></div>
                <img src="./img/donut.png" alt="" className={cl.image} />
            </div>
            <h2 className={cl.subtitle}>You don't have a favorite</h2>
            <p className={cl.text}>Add the item you like so you can buy it later. When your product is here, it warms our hearts.
            </p>
        </>
    );
}

export default EmptyFavorited;
