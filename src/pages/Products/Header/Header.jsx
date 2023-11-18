import React from 'react';

import cl from "./Header.module.scss";

const Header = () => {
    return (
        <header className={cl.header}>
                    <img className={cl.headerBg} src="./img/about-us.jpg" alt="header" />
                    <div className={cl.headerInfo}>
                        <h1 className={cl.title}>Here you can find the very donut you've been looking for.</h1>
                </div>
            </header>
    );
}

export default Header;
