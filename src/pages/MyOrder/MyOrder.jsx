import React, { useContext, useEffect, useState } from "react";
import axios from "axios"

import cl from "./MyOrder.module.scss";
import contextOrder from "../../context/contextOrder";
import Card from "../../components/Card/Card"
import { useSortNumber } from "../../hooks/useFilter";

const MyOrder = () => {

    const {orderItems, setOrderItems} = useContext(contextOrder);
    const [valueSelect, setValueSelect] = useState("up")

    // const sortedItems = useSortedItems(orderItems, valueSelect);

    const sortedItems = useSortNumber(orderItems, valueSelect);

    const options = [
        {value:"up", name:"In ascending order"},
        {value:"down", name:"In descending order"},
    ]

    useEffect(() => {
        ( async () => {
            try {
                const {data} = await axios.get("http://localhost:3000/order");
                setOrderItems(data);
            } catch (err) {
                console.log(err.message)
                alert("error order")
            }

          })()
    },[])

  return (
        <div className="inner">
            <div className={cl.content}>
                {
                    orderItems.length
                    ?
                    <>
                        <div className={cl.sort}>
                        <h2 className={cl.title}>My orders</h2>
                        <select value={valueSelect}onChange={(e) => setValueSelect(e.target.value)}>
                            {options.map(item => <option key={item.value} value={item.value}>{item.name}</option>)}
                        </select>
                        </div>
                        <ul className={cl.orderItems}>
                                {sortedItems.map((obj, index) => 
                                    <li key={index}>
                                        <div className={cl.info}>
                                            <span>Order: №{obj.id}</span>
                                            <span>Total: {obj.total}$</span>
                                            <span>Date: {obj.date}</span>
                                        </div>
                                        <ul className={cl.items}>
                                        {obj.orders.map(obj => <Card key={obj.id} {...obj} orderItem={obj}/>)}
                                        </ul>
                                    </li>
                                    )
                                }
                        </ul>
                    </>
                    :
                    <>
                    <h2 className={cl.title}>My Order</h2>
                    <div className={cl.decor}>
                        <div className={cl.circle}></div>
                        <img src="./img/donut.png" alt="" className={cl.image} />
                    </div>
                    <h2 className={cl.subtitle}>You don't have any purchases</h2>
                    <p className={cl.text}>We would love to have your orders here. This motivates us to expand our product network.
                    </p>
                    </>
                }
            </div>
        </div>
  );
};

export default MyOrder;
