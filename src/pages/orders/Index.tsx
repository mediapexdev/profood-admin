import { Header } from "../layout/Header";
import OrderList from "./OrderLists";
import { OrderTypes } from "./OrderTypes";

export const OrdersPage:React.FC=()=>{
    return(
        <>
        <Header />
        <h1 className="ms-5 center">Résumé Commandes</h1>
        <div className="ms-5">
        <OrderTypes />
        </div>
        <h1 className="ms-5">Liste des commandes</h1>
        <OrderList />
        </>
    );
}