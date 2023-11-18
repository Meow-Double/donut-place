import React, { useContext, useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';

import cl from "./Products.module.scss"
import Card from '../../../components/Card/Card';

const Products = () => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        try {
            ( async () => {
                setLoading(true);
                const {data} = await axios.get("http://localhost:3000/items?_limit=3");
                setItems(data);
                setLoading(false);
            })()
        } catch (err) {
            console.log(err.message);
            alert("error products for home")
        }
    }, [])

    const nav = useNavigate();

    const renderItems = () => {
        return (loading ? [...Array(6)] : items).map((obj, index) => <Card key={index} {...obj} loading={loading}/>);
    }

    return (
        <div className={cl.products}>
        <h2 className={cl.title}>Our products</h2>
        <ul className={cl.cards}>
            {renderItems()}
        </ul>
        <button className={cl.btn} onClick={() => nav("/products")}>Products</button>
    </div>
    );
}

export default Products;
