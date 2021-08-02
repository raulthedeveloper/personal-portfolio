import React from 'react'
import { Container,Form, Col, Row, Button } from 'react-bootstrap'

export default function HireMe({text,dark}) {
    return (
        <section style={{"marginBottom":"0","paddingBottom":"3rem"}} className={dark ? "dark-section" : null}>
            <Container>
                <Row>
                    <Col md={6}>
                      {
                        text ? <div dangerouslySetInnerHTML={{__html:text}}></div> : 
                        <div>
                          <h2 className="section-header">Contact</h2> 
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolor, perferendis, illum ut consequatur sit tenetur placeat beatae nihil hic fuga dicta. Aut, laboriosam architecto eum harum quibusdam adipisci repellat!</p>
                          </div>
                      }
                        
                    </Col>
                    <Col md={6}>
                                            
                      <Form action="https://formspree.io/f/xzbyjvny"  method="POST" className="hire-form p-4 rounded">
                        

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" name="name" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" name="email" placeholder="Enter email" />
                          
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Control name="message" placeholder="Enter message" as="textarea" rows={4} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </Col>
                </Row>
            </Container>
            
            </section>
    )
}
