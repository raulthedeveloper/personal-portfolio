import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Image } from 'react-bootstrap';




export default function Carousel_1({images}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
    <div className="mt-5 mb-5">
      <h2> Screen Shots </h2>
      <Slider {...settings}>
      {     
            images.map((e,index)=>{
              return <div>
              <Image key={index} fluid style={{'width':'95%','margin':'auto','height':'400px'}}
              src={e.url} />
              </div>
            })
          }
       
        
      </Slider>
    </div>
  );
}

