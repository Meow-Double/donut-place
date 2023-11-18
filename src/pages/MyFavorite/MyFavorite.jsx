import React, { useContext, useEffect } from "react";
import axios from "axios"

import cl from "./MyFavorite.module.scss";
import contextFavorite from "../../context/contextFavorite";
import Card from "../../components/Card/Card";
import EmptyFavorited from "./EmptyFavorited/EmptyFavorited";


const MyFavorite = () => {

    const {favoritedItems, setFavoritedItems} = useContext(contextFavorite);
    
    useEffect(() => {
        ( async () => {
            try {
                const {data} = await axios.get("http://localhost:3000/favorites");
                setFavoritedItems(data);
            } catch (err) {
                console.log(err.message)
                alert("error favorites")
            }

          })()
    }, []);

  return (
        <div className="inner">
            <div className={cl.content}>

                {
                    favoritedItems.length
                    ?
                    <ul className={cl.items}>
                        {favoritedItems.map(obj => <Card key={obj.id} {...obj}/>)}
                    </ul>
                    :
                     <EmptyFavorited />
                }
            </div>
        </div>
  );
};

export default MyFavorite;
