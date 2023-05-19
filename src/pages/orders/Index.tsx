import OrderListProvider from "../../context/OrderListProvider";
import { ContentBody } from "./contentBody";

export const OrdersPage: React.FC = () => {

    return(
        <OrderListProvider>
            <ContentBody />
        </OrderListProvider>
    );
}