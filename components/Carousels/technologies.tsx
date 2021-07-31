import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Image, Card } from 'react-bootstrap';


interface Props {
    iconsLinks:string
}

 const technologies:React.FC<Props> = ({iconLinks}) =>{
     
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: iconLinks.length < 3 ? iconLinks.length : 3 ,
    slidesToScroll: 3,
    responsive: [
      
      {
        breakpoint: 747,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="d-flex justify-content-center">
      <Slider {...settings} >
          {
              
              iconLinks.map((link,index) =>{
                  
                  return <Card key={index + link} className="bg-dark">
                    
                  <Card.Body>
                      <Card.Header style={{'border':"none"}}>
                      <a className="icon-link" target="__blank" href={link.link}>
                          <h5 className="text-center">{link.title}</h5>
                          </a>
                      </Card.Header>
                      <a className="icon-link" target="__blank" href={link.link}>
                      <Image style={{"height":"100px","margin":"auto","display":"block"}}
                          src={link.src} alt={link.alt} />
                      </a>
                  </Card.Body>
                  
                  </Card>
              })
              
          }

          

        
      </Slider>
    </div>
  );
}

export default technologies