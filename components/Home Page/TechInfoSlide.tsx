import React from 'react'
import { Container,Row,Image,Col, Button } from 'react-bootstrap'


export default function TechInfoSlide({toggleSlide,slideImg,slideTitle,slideContent}) {
    return (
        <section className="dark-section">
        <Container >
                     

            <Row style={{'justifyContent':'center'}}>
            <Image
        src={slideImg}
        alt="Picture of the author"
        width={120}
        height={120}
      />
            </Row>
            <Row style={{'padding':'3rem'}}>
            <h2 className="text-center border-bottom border-light">{slideTitle}</h2>
            <div dangerouslySetInnerHTML={{__html:slideContent}}  />

            <Button style={{"width":"5rem"}} onClick={()=>toggleSlide(false)}>Back</Button>

            </Row>
            <Row>
                {/* Projects with technology will generate buttons/links to projects
            <Button varient="success" className="m-2" href="/about">Restaurant</Button>  */}
            </Row>
        </Container>
        </section>
    )
}
