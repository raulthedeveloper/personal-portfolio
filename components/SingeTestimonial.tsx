import React from 'react'
import { Card, Image,Container,Button } from 'react-bootstrap'
import AppModal from './AppModal'

const SingeTestimonial = ({data,divider}) => {
    return (
        <section className="dark-section mb-0 mt-0" style={divider ? {'borderBottom': '#00000045 .5rem solid'} : null}>
            <Container>
            <h2 className="section-header">Testimonial</h2>
            <Card className="text-center">
                    <Card.Body>
                        <Image width="100" className="m-auto rounded-circle" src={data[0].sizes.thumbnail} />
                        <h2 className="text-dark text-center">{data[1]}</h2>
                        <div className="testimonial-text" dangerouslySetInnerHTML={{__html:data[2]}} />
                        </Card.Body>
                        <Card.Footer className="d-flex">
                            <AppModal />
                        </Card.Footer>
                </Card>
            </Container>
        
                </section>
    )
}

export default SingeTestimonial
