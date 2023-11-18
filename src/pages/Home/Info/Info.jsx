import React from 'react';

import cl from "./Info.module.scss"

const Info = () => {
    return (
        <div className={cl.content}>
                <div className={cl.decorDonut}>
                    <img src="./img/donut.png" alt="donut" />
                </div>
                <div className={`${cl.text} ${cl.textRight}`}>
                In this day and age, everyone needs to receive happiness. Coming from work, you probably want to relax and enjoy something pleasant. Our company is ready to give you a piece of this happiness - a piece of something you can enjoy.
                </div>
                <div className={cl.decorCup}>
                    <img className={cl.circle} src="./img/circle-cup.png" alt="donut" />
                    <img className={cl.cup} src="./img/cup.png" alt="donut" />
                </div>
                <div className={`${cl.text} ${cl.textLeft}`}>
                The site gives you a large assortment of choices. Here you will be able to find a donut to suit your taste. From chocolate filling, to milk or strawberry. All you have to do is go to the product sections and place the variant you like in your cart. Then place your order and your piece of happiness will be in your hands.
                </div>
            </div>
    );
}

export default Info;
