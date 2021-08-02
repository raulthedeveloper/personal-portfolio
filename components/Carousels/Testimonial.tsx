import React,{useState} from 'react'
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Container,Image, Card, Button, Modal } from 'react-bootstrap';
import AppModal from '../AppModal';





const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1
  };

const Testimonial = ({data, dataType}) => {
    return (
      <section className="dark-section">

      
        <Container>
          <h2 className="section-header">Testimonial</h2>
        <div>
            <Slider {...settings} >

              {
                  // Maps Through prop sent from Home page filled with wp api
                  data.map((e:object[],index:number) =>{
                    const [show, setShow] = useState(false);
                    const handleClose = () => setShow(false);
                    const handleShow = () => setShow(true);


                    return <Card key={index + e.title} >

                    <Card.Body style={{"height": "360px",
    "overflow": "hidden"}}>
                        <Image width="100" className="m-auto rounded-circle" src={e.ACF.head_shot.sizes.thumbnail} />
                        <h2 className="text-dark text-center">{e.title.rendered}</h2>
                        <div className="testimonial-text" dangerouslySetInnerHTML={{__html:e.excerpt.rendered}} />
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-center">
                          {/* checks what datatype is provide  */}
                          <Button className="m-auto" variant="primary" onClick={handleShow}>
                            See Full
                          </Button>

                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Testimonial</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                              <h3 className="text-center text-dark">{e.title.rendered}</h3>
                            <Image width="100" className="m-auto rounded-circle" src={e.ACF.head_shot.sizes.thumbnail} />
                              <div className = "modal-p mt-3" dangerouslySetInnerHTML={{__html:e.content.rendered}} />
                              
                              </Modal.Body>
                            <Modal.Footer className="m-auto bg-light w-100 d-flex justify-content-center">
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                            
                            </Modal.Footer>
                          </Modal>

                          {
                            dataType == 'array' ? <AppModal data={data}/> : null
                          }
                            
                        </Card.Footer>
                </Card>
                  })
              }
            

            
           

          

        
      </Slider>
        </div>
        </Container>
        </section>
    )
}

export default Testimonial
