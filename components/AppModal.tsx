import React,{useState} from 'react'
import { Modal, Button, Image } from 'react-bootstrap'

const AppModal = ({data,dataType}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
      <Button className="m-auto" variant="primary" onClick={handleShow}>
        See Full
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Testimonial</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <h3 className="text-center text-dark">{data[1]}</h3>
        <Image width="100" className="m-auto rounded-circle" src={data[0].sizes.thumbnail} />
          <div className = "modal-p mt-3" dangerouslySetInnerHTML={{__html:data[2]}} />
          
          </Modal.Body>
        <Modal.Footer className="m-auto bg-light w-100 d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default AppModal
