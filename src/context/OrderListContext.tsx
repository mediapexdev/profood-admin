import { createContext } from "react";
import { Order } from "../interfaces/Interfaces";


/**
 * 
 */
export type OrderListContextType = {
    orders : Order[];
    currentOrderKey:number,
    updateOrderList : (items : Array<Order>) => void;
    setOnEdit: (index: number) => void;
    updateStatus:(id: number,status:number,index:number) => void;
    filterByStatus:(status:string)=>void;
};

/**
 * Create the cart context
 */
const OrderListContext = createContext<OrderListContextType>({
    orders:[],
    currentOrderKey:-1,
    updateOrderList : () => {},
    setOnEdit:()=>{},
    updateStatus:()=>{},
    filterByStatus:()=>{}
});

export default OrderListContext;
