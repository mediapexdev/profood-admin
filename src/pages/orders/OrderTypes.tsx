import { Card, Row } from "react-bootstrap";

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
              <Card.Header>{order.title}</Card.Header>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>
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