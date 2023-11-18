import React from 'react';

import Header from './Header/Header';

import cl from "./Products.module.scss"
import Items from './Items/Items';

const Products = () => {
    return (
        <>
            <Header />
            <div className='inner'>
                <Items />
            </div>
        </>
    );
}

export default Products;
