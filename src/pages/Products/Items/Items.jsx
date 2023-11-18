import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import {useFilter} from "../../../hooks/useFilter"
import Card from "../../../components/Card/Card"
import Pagination from "./Pagination/Pagination"
import Filter from './Filter/Filter';
import contextCart from "../../../context/contextCart"

import cl from "./Items.module.scss"

const Items = () => {

    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState({sort:"", query:""});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [loading, setLoading] = useState(true);


    const lastItemsIndex = currentPage * itemsPerPage;
    const firstItemsIndex = lastItemsIndex- itemsPerPage;
    const currentItems = items.slice(firstItemsIndex, lastItemsIndex)

    useEffect(()=>{
        ( async () => {
            try {
                setLoading(true)
                const {data} = await axios.get("http://localhost:3000/items");
                setItems(data);
                setLoading(false);
            } catch (err) {
                console.log(err.message);
                alert("Error items");
            }
          })()
    }, []);


    const paginate = (pageNumber) => setCurrentPage(pageNumber) 

    const sortedAndSearchedItems = useFilter(currentItems, filter.sort, filter.query);



    const renderItems = () => {
            return (loading ? [...Array(6)] : sortedAndSearchedItems).map((obj, index) => (
                <Card key={index} {...obj} loading={loading}/>
            ));
        }


    return (
        <div className={cl.products}>
            <Filter setFilter={setFilter} filter={filter}/>
            <ul className={cl.cards}>
                {renderItems()}
            </ul>
            <Pagination totalItems={items.length} itemsPerPage={itemsPerPage} paginate={paginate} activePage={currentPage}/>
        </div>
    );
}

export default Items;
