import React, {useState} from 'react';

import cl from "./Pagination.module.scss"

const Item = ({totalItems, itemsPerPage, paginate, activePage}) => {

    // const [isActive, setIsActive] = useState(false);

    // const test =() =>{
    //     onPage(id);
    //     setIsActive(true);
    // }
    const paginationPageNumber =[]

    for (let i=1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        paginationPageNumber.push(i)
    }


    return (
            <ul className={cl.pagination}>
                {paginationPageNumber.map((number, index) => (
                    <li key={index} onClick={() => paginate(number)} className={activePage === number ? cl.active : null} >{number}</li>
                ))}
            </ul>
    );
}

export default Item;







