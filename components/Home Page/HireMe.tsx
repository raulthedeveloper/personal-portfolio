import React from 'react'
import { Container,Form, Col, Row, Button } from 'react-bootstrap'

export default function HireMe({text,title}) {
    return (
        <section>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </Col>
                    <Col md={6}>
                        {/* <form>
                            <input type="text" />
                            <input type="email" />
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <input type="submit" value="submit" />
                        </form> */}

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
