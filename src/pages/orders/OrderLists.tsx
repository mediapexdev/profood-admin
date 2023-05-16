import { Badge } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export const OrderList:React.FC=()=> {
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
        <tr>
          <td>1</td>
          <td>123 000 F CFA</td>
          <td>Parcelles Assainies</td>
          <td>21/6/2023</td>
          <td><Badge pill bg="warning">
        validée
      </Badge> <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></span></td>
          <td><button className='btn btn-success' >Actions</button></td>
        </tr>
        <tr>
        <td>2</td>
          <td>Mbour</td>
          <td>21/6/2023</td>
          <td>150 000 F CFA</td>
          <td><Badge pill bg="warning">
        validée
      </Badge></td>
          <td><button className='btn btn-success' >Actions</button></td>
        </tr>
        <tr>
        <td>3</td>
          <td>Thiès</td>
          <td>21/5/2023</td>
          <td>90 000 F CFA</td>
          <td><Badge pill bg="warning">
        validée
      </Badge></td>
          <td><button className='btn btn-success' >Actions</button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default OrderList;