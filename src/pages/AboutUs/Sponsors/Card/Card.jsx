import React from 'react';

import cl from "./Card.module.scss";

const Card = ({image}) => {
    return (
        <li className={cl.card}>
            <span>
            </span>
            <img src={image} alt="" />
        </li>
    );
}

export default Card;
