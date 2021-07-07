import React from 'react'
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Container,Image, Card, Button } from 'react-bootstrap';



// http://portfoliobackend.local/wp-json/wp/v2/testimonials





const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1
  };

const Testimonial = ({data}) => {
    return (
        <Container>
        <div>
            <Slider {...settings} >

              {
                  // Maps Through prop sent from Home page filled with wp api
                  data.map((e:object[],index:number) =>{

                    return <Card key={index + e.title} style={{"backgroundColor":"green"}}>
                    <Card.Body>
                        <Image width="100" className="m-auto rounded-circle" src={e.ACF.head_shot.sizes.thumbnail} />
                        <h2 className="text-dark text-center">{e.title.rendered}</h2>
                        <div className="testimonial-text" dangerouslySetInnerHTML={{__html:e.excerpt.rendered}} />
                        </Card.Body>
                        {/* <Card.Footer className="d-flex">
                            <Button className="m-auto">Read Full</Button>
                        </Card.Footer> */}
                </Card>
                  })
              }
            

            
           

          

        
      </Slider>
        </div>
        </Container>
    )
}

export default Testimonial
