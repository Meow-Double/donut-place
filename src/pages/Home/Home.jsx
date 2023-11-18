import React from 'react';

import Header from "./Header/Header";
import Info from './Info/Info';
import Products from './Products/Products';

import cl from "./Home.module.scss"


const Home = () => {
    return (
        <>
            <Header />
            <div className='inner'>
                <Info />
                <Products />
            </div>
        </>
    );
}

export default Home;
