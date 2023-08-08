import { Card, Nav } from "react-bootstrap";
import { BoxList } from "./BoxList";

export const BoxOrder: React.FC = () => {
    return (
        <div className="container detail-box-card">
            <Card>
                <Card.Header>
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link className="active">Boxes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Découpes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">
                                Résumé
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <BoxList />
                </Card.Body>
            </Card>
        </div>
    );
}