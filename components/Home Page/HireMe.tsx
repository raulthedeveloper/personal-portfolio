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
                                            
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Control as="textarea" rows={4} />
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
