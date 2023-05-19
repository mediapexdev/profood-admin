import { useEffect, useState } from "react";
import api from "../../api/api";
import { Order } from "../../interfaces/Interfaces";
import { Header } from "../layout/Header";
import OrderList from "./OrderLists";
import { OrderTypes } from "./OrderTypes";
import { useOrderListContext } from "../../context/OrderListProvider";

export const ContentBody:React.FC=()=>{
    const {updateOrderList}=useOrderListContext();
    
    

    
    return (
        <>
            <Header />
            <h1 className="ms-5 center">Résumé Commandes</h1>
            <div className="ms-5">
                <OrderTypes />
            </div>
            <h1 className="ms-5">Liste des commandes</h1>
            <OrderList/>
        </>
    );
}

