import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const OffCanvas:React.FC=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button  variant="primary" onClick={toggleShow} className="me-2">
      <span className="navbar-toggler-icon"></span>
      </Button>
      <Offcanvas show={show} onHide={handleClose} scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         Content Menu
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
