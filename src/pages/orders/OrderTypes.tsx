import { Badge, Card, Row } from "react-bootstrap";

export const OrderTypes:React.FC=()=>{
    const Orders=[{id:1,class:'Primary',title:'validées'},{id:2,class:'Warning',title:'payées'},{id:3,class:'Success',title:'mises en condition'},{id:4,class:'Danger',title:'achevées'}]
    return(
        <>
        <Row>
        {Orders.map((order) => (
            <Card
              bg={order.class.toLowerCase()}
              key={order.id}
              text={order.class.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem' }}
              className="m-2"
            >
              <Card.Header>{order.title} <Badge pill bg="secondary">
     <span>voir <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg></span>
      </Badge></Card.Header>
              <Card.Body>
                <Card.Title> Nombre de commandes: 132 </Card.Title>
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text> */}
              </Card.Body>
            </Card>
          ))}
          </Row>
          </>
    );
}