import React, { useContext, useEffect, useState } from 'react';
import IconLike from '../../../public/img/unlike.svg?react';
import IconAdd from '../../../public/img/plus.svg?react';
import IconTick from '../../../public/img/tick.svg?react';

import contextCart from "../../context/contextCart"

import axios from "axios"
import cl from "./Card.module.scss"
import MyModal from '../../UI/MyModal/MyModal';
import contextFavorite from '../../context/contextFavorite';
import {MyLoader} from "../../UI/MyLoader/MyLoader"

const Card = ({image, title, price, info, id, orderItem = null, loading}) => {

    const [isModal, setIsModal] = useState(false);

    const {cartItems, isCartAdded, setCartItems} = useContext(contextCart);
    const {favoritedItems, setFavoritedItems, isProductFavorited} = useContext(contextFavorite);


    const addItem = () => {
        if (cartItems.find(obj => obj.id === id)){
            setCartItems(prev => prev.filter(item => item.id !== id));
            try {
                axios.delete(`http://localhost:3000/cart/${id}`);
            } catch (err) {
                console.log(err.message);
            }
        }else{
            setCartItems(prev => [...prev, dataCard]);
            try {
                axios.post("http://localhost:3000/cart", dataCard);
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    const addFavorite = () => {
        if (favoritedItems.find(obj => obj.id === id)){
            setFavoritedItems(prev => prev.filter(item => item.id !== id));
            try {
                axios.delete(`http://localhost:3000/favorites/${id}`);
            } catch (err) {
                console.log(err.message);
            }
        }else{
            setFavoritedItems(prev => [...prev, dataCard]);
            try {
                axios.post("http://localhost:3000/favorites", dataCard);
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    const isAdded = isCartAdded(id);
    const isFavorited = isProductFavorited(id);
    const dataCard = {image, title, price, info, id};
    
    return (
        <>       
        {orderItem
            ?
            <li className={cl.card}>
            <img src={image} alt="img" />
            <h3>{title}</h3>
            <div className={cl.price}>
                <div>
                    <p>Price:</p>
                    <p>{price}$</p>
                </div>
                <div>
                    <p>Count:</p>
                    <p>{orderItem.count}</p>
                </div>
            </div>
            <div className={cl.price}>

            </div>
            <div className={cl.productsBtn}>
                <button className={cl.btnInfo} onClick={() => setIsModal(true)}>
                information
                </button>
                
                <MyModal visible={isModal} setVisible={setIsModal}>
                    <div className={cl.content}>
                        <div>
                            <span className={cl.close}>
                                <img src="./img/close.svg" alt="close" onClick={() => setIsModal(false)} />
                            </span>
                            <img src={image} alt="" />
                            <div className={cl.modalPrice}>
                                <span>Price: {price}$</span>
                            </div>
                        </div>
                        <div className={cl.modalIndo}>
                            <h2>{title}</h2>
                            <p>{info}</p>
                        </div>
                    </div>
                </MyModal>
            </div>
        </li>
            :
            loading
            ?
            <MyLoader />
            :
            <li className={cl.card}>
            <button className={cl.favorite} onClick={addFavorite}>
                {isFavorited
                ?
                <IconLike className={cl.activeFavorite}/>
                :
                <IconLike />
                }
               
            </button>
            <img src={image} alt="img" />
            <h3>{title}</h3>
            <div className={cl.price}>
                <p>Price:</p>
                <p>{price}$</p>
            </div>
            <div className={cl.productsBtn}>
                <button className={cl.btnAdd} onClick={addItem}>
                    {isAdded
                     ?
                    <IconTick className={cl.activeAdded}/>
                    :
                    <IconAdd />
                    }
                </button>
                <button className={cl.btnInfo} onClick={() => setIsModal(true)}>
                information
                </button>
                
                <MyModal visible={isModal} setVisible={setIsModal}>
                    <div className={cl.content}>
                        <div>
                            <span className={cl.close}>
                                <img src="./img/close.svg" alt="close" onClick={() => setIsModal(false)} />
                            </span>
                            <img src={image} alt="" />
                            <div className={cl.modalPrice}>
                                <span>Price: {price}$</span>
                                {isAdded 
                                ?
                                <p>Products added to cart ✓</p>
                                :
                                <button onClick={addItem}>Add to cart</button>
                                }
                            </div>
                        </div>
                        <div className={cl.modalIndo}>
                            <h2>{title}</h2>
                            <p>{info}</p>
                        </div>
                    </div>
                </MyModal>
            </div>
            </li>
        }
        </>
    );
}

export default Card;
