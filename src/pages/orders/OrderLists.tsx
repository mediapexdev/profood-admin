import Table from 'react-bootstrap/Table';

export const OrderList:React.FC=()=> {
  return (
    <div className='m-4'>
    <Table bordered hover striped responsive="sm">
      <thead>
        <tr>
          <th>ID Commande</th>
          <th>Adresse</th>
          <th>Date commande</th>
          <th>Montant</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Parcelles Assainies</td>
          <td>21/6/2023</td>
          <td>123 000 F CFA</td>
          <td><span className='primary'>validée</span></td>
          <td><button className='btn btn-success' >Actions</button></td>
        </tr>
        <tr>
        <td>2</td>
          <td>Mbour</td>
          <td>21/6/2023</td>
          <td>150 000 F CFA</td>
          <td><span className='primary'>validée</span></td>
          <td><button className='btn btn-success' >Actions</button></td>
        </tr>
        <tr>
        <td>3</td>
          <td>Thiès</td>
          <td>21/5/2023</td>
          <td>90 000 F CFA</td>
          <td><span className='primary'>validée</span></td>
          <td><button className='btn btn-success' >Actions</button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default OrderList;