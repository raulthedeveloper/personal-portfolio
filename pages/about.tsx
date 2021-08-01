import React from 'react'
import Layout from '../components/layouts/Layout'
import Introduction from '../components/Home Page/Introduction'
import { Container, Row, Col,ListGroup, Button } from 'react-bootstrap'
import GitHubCta from '../components/GitHubCta'
import HireMe from '../components/Home Page/HireMe'



export async function getStaticProps(context) {
  

    const [data] = await Promise.all([
        fetch(process.env.NEXT_PUBLIC_PERSONAL_PORTFOLIO_API
        ).then(r => r.json()),
        
      ]);
    
  
      return {
        props: {
                data,
               
                
        }
        }
  
  };



const about = ({data}) => {
    let aspirations;
    let hobbies;

    if(data[0].ACF.hobbies && data[0].ACF.aspirations){
        hobbies = JSON.parse(data[0].ACF.hobbies)
        aspirations =  JSON.parse(data[0].ACF.aspirations)
    } 

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
                            {
                                
                               aspirations ? aspirations.map((e,index) =>{
                                    return <ListGroup.Item key={index + e}>{e}</ListGroup.Item>
                                }) : 
                                <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>
                                
                            }
                        </ListGroup>
                        </Col>

                        <Col>
                        <h2 className="section-header">Interest/Hobbies</h2>

                        <ListGroup>
                            {
                                
                               hobbies ? hobbies.map((e,index) =>{
                                    return <ListGroup.Item key={index + e}>{e}</ListGroup.Item>
                                }) : 
                                <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>
                                
                            }
                        </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </section>

            <GitHubCta dark={false} link={"https://github.com/raulthedeveloper"}/>
                
        <HireMe dark={true}/>

                
            </Layout>
            
        </div>
    )
}

export default about
