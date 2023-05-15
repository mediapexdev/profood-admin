import { Header } from "../layout/Header";
import OrderList from "./OrderLists";

export const OrdersPage:React.FC=()=>{
    return(
        <>
        <Header />
        <h1>Liste des commandes</h1>
        <OrderList />
        </>
    );
}