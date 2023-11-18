import React, {useContext, useEffect, useState} from 'react';

import IconPlus from "../../../../public/img/plus.svg?react"
import IconMinus from "../../../../public/img/minus.svg?react"
import cl from "./Item..module.scss"
import { MyLoaderCart } from '../../../UI/MyLoader/MyLoader';

const Item = ({image, title, price, onRemove, id,  setOrderCount, items, loading}) => {

    const [countProduct, setCountProduct] = useState(1);


    useEffect(() => {
        setOrderCount(prev => [...prev, {count: countProduct, id: id, price: price}])
    }, []);

    const plusCount = () =>{
        setCountProduct(prev => prev + 1);
    }
    const minusCount = () =>{
        setCountProduct(prev => prev - 1);
    }
    
    useEffect(() => {
        items.find(item => item.id === id ? item.count = countProduct : null)
        // setOrderCount(prev => [...prev, prev.find(obj => obj.id === id ? {...obj, count:countProduct} : null)])
    }, [countProduct]);


    return (
        <>
        {loading
        ?
        <MyLoaderCart />
        :
        <li className={cl.item}>
        <img className={cl.image} src={image} alt="" />
        <div className={cl.info}>
            <div className={cl.cardTitle}>
                <h3>{title}</h3>
                <button onClick={onRemove}>
                    <img src="./img/close.svg" alt="" />
                </button>
            </div>
            <div className={cl.priceInfo}>
                <div className={cl.priceBtn}>
                    <button disabled={countProduct < 10 ? false : true } onClick={plusCount}>
                        <IconPlus />
                    </button>
                    <p>{countProduct}</p>
                    <button disabled={countProduct > 1 ? false : true } onClick={minusCount}>
                        <IconMinus />
                    </button>
                </div>
                <p className={cl.price}>Price: {(Number(price) * countProduct).toFixed(2)}$</p>
            </div>
        </div>
        </li>
        }
        </>
    );
}

export default Item;
