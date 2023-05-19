import { useContext, useEffect, useState } from "react";
import OrderListContext, { OrderListContextType } from "./OrderListContext";
import { Order } from "../interfaces/Interfaces";
import api from "../api/api";

/**
 * 
 */
interface Props {
    children : React.ReactNode;
}

/**
 * 
 * @returns 
 */
export const useOrderListContext = () => useContext(OrderListContext);

/**
 * Create the provider component
 *
 * @param param0 
 * @returns 
 */
const OrderListProvider = ({ children } : Props) => {
    /**
     * 
     */
    const [orders, setOrders] = useState<Order[]>([]);
    const [currentOrderKey,setCurrentOrderKey]=useState<number>(-1);
    const [allOrders,setAllOrders]=useState<Order[]>([]);

    /**
     * Define the function to add an item to the cart
     *
     * @param itemToAdd 
     */
    const updateOrderList = (items : Array<Order>) => {
        setOrders(items);
        setAllOrders(items);
    };

    const loadOrders = async () => {
        try {
            const res = await api.get('admin-get-orders');
            updateOrderList(res.data[0]);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadOrders();
    }, [])

    const setOnEdit = (index: number) => {
        const newOrders=[...orders];
        if(currentOrderKey!==-1){
            newOrders[currentOrderKey].onEdit=false;
            }
        setCurrentOrderKey(index);
        newOrders[index].onEdit=true;        
        setOrders(newOrders);
    };

    const setOnNotEdit=(index:number)=>{
        const newOrders=[...orders];
        newOrders[index].onEdit=false; 
        setOrders(newOrders);
        console.log(newOrders);
    }

    const updateStatus=async (id:number,status:number,index:number)=>{
        const data={
            order_id:id,
            status_id:status
        }
        try {
            const res=await api.post('admin-update-order-status',data)
            if(res.status===200){
                console.log(res.data);
            }
        } catch (error) {
            console.log(error);
        }
        loadOrders();
        setOnNotEdit(index);
    }


    const filterByStatus=(status:string)=>{
        if(status!=='tout'){
        const newOrders=[...allOrders].filter((order)=>order.statut===status);
        setOrders(newOrders);}
        else{
            setOrders(allOrders);
        }
    }
    /**
     * Define the context value
     */
    const contextValue : OrderListContextType = {
        orders,
        currentOrderKey,
        updateOrderList,
        setOnEdit,
        updateStatus,
        filterByStatus
    };

    /**
     * 
     */
    return <OrderListContext.Provider value={contextValue}>{children}</OrderListContext.Provider>;
};

export default OrderListProvider;