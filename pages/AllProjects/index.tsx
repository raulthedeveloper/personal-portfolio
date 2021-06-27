import React from 'react'
import Layout from '../../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Card } from 'react-bootstrap'



export default function AllProjects() {
return (
<div>
    <Layout>
        <h1>Hey Im the projects page</h1>
        <Container>
            <Row>
                <Col md={4} className="mb-1">
                <Card className="bg-dark text-white">
                    <Card.Img src="https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </Col>

                <Col md={4}>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </Col>

                <Col md={4}>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </Col>

                
                
            </Row>
        </Container>
    </Layout>

</div>
)
}