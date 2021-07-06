import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


interface Props {
    iconsLinks:string
}

 const technologies:React.FC<Props> = ({iconLinks}) =>{
     
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: iconLinks.length < 3 ? iconLinks.length : 3 ,
    slidesToScroll: 3
  };


  return (
    <div className="d-flex justify-content-center">
      <Slider {...settings} >
          {
              
              iconLinks.map(link =>{
                  
                  return <Card className="bg-dark">
                  <Card.Body>
                      <Card.Header style={{'border':"none"}}>
                          <a href="https://reactjs.org/"><h5 className="text-center">{link.title}</h5></a>
                      </Card.Header>
                      <Image style={{"width":"100px","margin":"auto","display":"block"}}
                          src={link.src} />

                  </Card.Body>

              </Card>
              })
              
          }

          

        
      </Slider>
    </div>
  );
}

export default technologies