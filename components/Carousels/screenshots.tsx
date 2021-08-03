import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Image } from 'react-bootstrap';
import ImageNext from 'next/image'




export default function Screenshots({images}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 747,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mt-5 mb-5 d-flex justify-content-center">
      
      <Slider {...settings}>
      {     
            images.map((e,index)=>{
              return <div key={index + e.name} >
              {/* <Image  fluid style={{'width':'95%','margin':'auto','height':'400px'}}
              src={e.src} /> */}
              <div style={{"width":"95%","height":"400px",'margin':'auto'}}>
              <ImageNext
                src={e.src}
                height={600}
                width={600}
                priority
              />
              </div>
              
              
              </div>
            })
          }
       
        
      </Slider>
    </div>
  );
}

