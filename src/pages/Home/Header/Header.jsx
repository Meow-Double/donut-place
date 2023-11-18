import React from 'react';
import {useNavigate} from "react-router-dom"

import IconArrow from "../../../../public/img/arrow.svg?react"
import cl from "./Header.module.scss"

const Header = () => {

    const nav = useNavigate();

    return (
        <>
            <header className={cl.header}>
                    <img className={cl.headerBg} src="./img/header.jpg" alt="header" />
                    <div className={cl.headerInfo}>
                        <h1 className={cl.title}>A doughnut is a piece of happiness</h1>
                        <button className={cl.btn} onClick={() => nav("/products")}>
                            <span>products</span>
                            <IconArrow />
                        </button>
                </div>
            </header>

        </>

    );
}

export default Header;
