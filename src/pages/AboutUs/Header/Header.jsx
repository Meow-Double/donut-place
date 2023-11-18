import React from 'react';

import cl from "./Header.module.scss";

const Header = () => {
    return (
        <>
        <header className={cl.header}>

            <video src="./about-us.mp4" autoPlay loop muted className={cl.headerBg}></video>
            <span></span>
            <div className={cl.headerInfo}>
                <h1 className={cl.title}>About us</h1>
                <p className={cl.text}>
                    Our company makes handmade confectionery products. Here you can find any doughnut to suit your taste. A large assortment and relatively inexpensive prices will make your day a little better. We try to make everyone in this world a little happier. Trying a doughnut, you can feel the taste of childhood.
                </p>
            </div>
        </header>

    </>
    );
}

export default Header;
