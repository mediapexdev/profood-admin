import { useEffect, useState } from "react"
import { BoxOrder } from "./BoxOrder"
import { ContentBody } from "./ContentBody"
import { NavigationTab } from "./Navigation"
import api from "../../api/api"
import { Order } from "../../interfaces/Interfaces"
import { useParams } from "react-router-dom"


export const OrderDetailPage:React.FC=()=>{
    const [order,setOrder]=useState<Order>();
    const params=useParams();
    console.log(params);
    const loadOrder=async ()=>{
        try {
            const res=await api.get('admin-order-details/'+params.id);
        setOrder(res.data);
        console.log(res)
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(()=>{
            loadOrder();
    },[params.id]);
    return(
        <div className="col">
            <div className="row">
                <NavigationTab/>
            </div>
            <div className="row">
            <ContentBody order={order!}/>
            </div>
            <div className="row">
            <BoxOrder/>
            </div>
        </div>
    )
}