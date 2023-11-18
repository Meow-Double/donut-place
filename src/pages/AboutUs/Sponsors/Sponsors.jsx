import React from 'react';

import cl from "./Sponsors.module.scss";
import Card from './Card/Card';

const arr =[
    {image:"./img/sponsors/burger-king.png"},
    {image:"./img/sponsors/starbucks.png"},
    {image:"./img/sponsors/dominos.png"},
    {image:"./img/sponsors/kfc.png"},
    {image:"./img/sponsors/mc-donalds.png"},
    {image:"./img/sponsors/nestle.png"},
    {image:"./img/sponsors/pizza.png"},
    {image:"./img/sponsors/disney.png"},
]
const Sponsors = () => {
    return (
        <div className={cl.content}>
            <h2 className={cl.title}>Our sponsors </h2>
            <ul className={cl.cards}>
                {arr.map((obj, index) => <Card key={index} image={obj.image}/>)}
            </ul>
        </div>
    );
}

export default Sponsors;
