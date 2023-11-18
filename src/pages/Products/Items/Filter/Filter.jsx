import React, { useState } from 'react';

import cl from "./Filter.module.scss"

const Filter = ({setFilter, filter}) => {



    const options = [
        {value:"title", name:"By name"},
        {value:"price", name:"By price"},
    ]


    return (
        <>
            <h2 className={cl.title}>{filter.query ? `Search by: ${filter.query}` : "Our products"}</h2>
            <div className={cl.navigation}>
                <div className={cl.sort}>
                    <p>Sort by:</p>
                    <select value={filter.sort} onChange={e => setFilter({...filter, sort: e.target.value})}>
                        {filter.sort
                        ?
                        null
                        :
                        <option value="" disabled>Select a filter</option>
                        }
                        {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
                    </select>
                </div>
                <div className={cl.search}>
                    <input value={filter.query} type="text" placeholder='Search...' onChange={e => setFilter({...filter, query: e.target.value})} />
                    {filter.query
                    ?
                    <span onClick={() => setFilter({...filter, query:""})}>
                        <img src="./img/close-rectangle.svg" alt="search" />
                    </span>
                    :
                    <img src="./img/search.svg" alt="search" />
                    }

                </div>
            </div>
        </>
    );
}

export default Filter;
