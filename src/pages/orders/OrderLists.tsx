import { Badge } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Order } from '../../interfaces/Interfaces';
import { useOrderListContext } from '../../context/OrderListProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface OrderPropsList {
  orders: Order[]
}

export const OrderList: React.FC = () => {
  const{orders,setOnEdit,updateStatus}=useOrderListContext(); 
  const [status,setStatus]=useState<number>(0);
  const navigate=useNavigate();
  const navigateToDetail=()=>{
  navigate('/order-detail/1');
  }
  return (
    <div className='m-4'>
      <Table bordered hover striped responsive="sm">
        <thead>
          <tr>
            <th>ID Commande</th>
            <th>Montant</th>
            <th>Adresse</th>
            <th>Date commande</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order,index)=>
            <tr key={index}>
            <td>{order.code}</td>
            <td>{order.montant} F CFA</td>
            <td>{order.address}</td>
            <td>{new Date(order.created_at).toLocaleDateString()}</td>
            <td>
              {!order.onEdit?<><Badge pill bg="warning">
                    {order.statut}
                  </Badge><span onClick={() => { setOnEdit(index); } }><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg></span></>:
            <><select onChange={(e)=>setStatus(Number(e.target.value))}>
                      <option value={1}>valider</option>
                      <option value={2}>confirmer</option>
                      <option value={3}>en cours</option>
                      <option value={4}>terminer</option>
                      <option value={5}>annuler</option>
                    </select><span color='success' onClick={()=>updateStatus(order.id,status,index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>
                      </span></>
            }
            
            </td>
            <td><button className='btn btn-success' onClick={()=>navigateToDetail()}>Voir</button></td>
          </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default OrderList;