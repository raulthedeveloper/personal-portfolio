import React from 'react'
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';




export default function technologies() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  

  return (
    <div>
      <Slider {...settings}>
      <Card style={{"border":"none"}}>
                        <Card.Body>
                            <Card.Header style={{'border':"none"}}>
                                <a href="https://reactjs.org/"><h5 className="text-center">React</h5></a>
                            </Card.Header>
                            <Image style={{"width":"100px","margin":"auto","display":"block"}}
                                src="../../images/nuxt-logo.png" />

                        </Card.Body>

                    </Card>
                    <Card style={{"border":"none"}}>
                        <Card.Body>
                            <Card.Header style={{'border':"none"}}>
                                <a href="https://reactjs.org/"><h5 className="text-center">React</h5></a>
                            </Card.Header>
                            <Image style={{"width":"100px","margin":"auto","display":"block"}}
                                src="../../images/nuxt-logo.png" />

                        </Card.Body>

                    </Card>
                    <Card style={{"border":"none"}}>
                        <Card.Body>
                            <Card.Header style={{'border':"none"}}>
                                <a href="https://reactjs.org/"><h5 className="text-center">React</h5></a>
                            </Card.Header>
                            <Image style={{"width":"100px","margin":"auto","display":"block"}}
                                src="../../images/nuxt-logo.png" />

                        </Card.Body>

                    </Card>
                    <Card style={{"border":"none"}}>
                        <Card.Body>
                            <Card.Header style={{'border':"none"}}>
                                <a href="https://reactjs.org/"><h5 className="text-center">React</h5></a>
                            </Card.Header>
                            <Image style={{"width":"100px","margin":"auto","display":"block"}}
                                src="../../images/nuxt-logo.png" />

                        </Card.Body>

                    </Card>
                    <Card style={{"border":"none"}}>
                        <Card.Body>
                            <Card.Header style={{'border':"none"}}>
                                <a href="https://reactjs.org/"><h5 className="text-center">React</h5></a>
                            </Card.Header>
                            <Image style={{"width":"100px","margin":"auto","display":"block"}}
                                src="../../images/nuxt-logo.png" />

                        </Card.Body>

                    </Card>
        
      </Slider>
    </div>
  );
}

