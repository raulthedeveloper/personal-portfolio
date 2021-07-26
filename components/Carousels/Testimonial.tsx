import React from 'react'
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Container,Image, Card, Button } from 'react-bootstrap';
import AppModal from '../AppModal';





const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1
  };

const Testimonial = ({data}) => {
    return (
      <section className="dark-section">

      
        <Container>
          <h2 className="section-header">Testimonial</h2>
        <div>
            <Slider {...settings} >

              {
                  // Maps Through prop sent from Home page filled with wp api
                  data.map((e:object[],index:number) =>{

                    return <Card key={index + e.title} >
                    <Card.Body>
                        <Image width="100" className="m-auto rounded-circle" src={e.ACF.head_shot.sizes.thumbnail} />
                        <h2 className="text-dark text-center">{e.title.rendered}</h2>
                        <div className="testimonial-text" dangerouslySetInnerHTML={{__html:e.excerpt.rendered}} />
                        </Card.Body>
                        <Card.Footer className="d-flex">
                            <AppModal data={data}/>
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
