import React from 'react'
import Layout from '../components/layouts/Layout'
import Introduction from '../components/Home Page/Introduction'
import { Container, Row, Col,ListGroup, Button } from 'react-bootstrap'
import GitHubCta from '../components/GitHubCta'
import HireMe from '../components/Home Page/HireMe'



export async function getStaticProps(context) {
  

    const [data] = await Promise.all([
        fetch(`http://portfoliobackend.local/wp-json/wp/v2/personal_portfolio
        `).then(r => r.json()),
        
      ]);
    
  
      return {
        props: {
                data,
               
                
        }
        }
  
  };



const about = ({data}) => {
console.log(data)
console.log(data[0].ACF)

    return (
        <div>
            <Layout>
                <Introduction image={data[0].ACF.about_me_image.sizes.medium} text={data[0].ACF.about_me}/>

            <section className="dark-section">
            <Container>
                    <Row>
                        <Col>
                        <h2 className="section-header">Aspirations</h2>
                        <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        </Col>

                        <Col>
                        <h2 className="section-header">Interest/Hobbies</h2>

                        <ListGroup>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </section>

            <GitHubCta/>
                
        <HireMe dark={true}/>

                
            </Layout>
            
        </div>
    )
}

export default about
