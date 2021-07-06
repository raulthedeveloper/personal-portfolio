import React,{ useState,useEffect } from 'react'
import Layout from '../../components/layouts/Layout'
import Link from 'next/link'
import { Container, Row, Col, Card } from 'react-bootstrap'
import GitHubCta  from '../../components/GitHubCta'


export async function getStaticProps(context) {
    const res = await fetch(`http://portfoliobackend.local/wp-json/wp/v2/portfolio_item`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }


            export default function AllProjects({data}) {


            return (
            <div >
                <Layout>
                    <h2 className="mt-3">Hey Im the projects page</h2>
                    <Container style={{"height":"100vh"}}>
                        <Row>

                            {
                                data.map((e,index) => {
                                   return <Col key={index} md={4} className="mb-1">
                                <Link  href={'./AllProjects/' + index}>
                                    <Card className="bg-dark text-white">
                                        <Card.Img
                                            src={e.ACF.screen_shot_1.url}
                                            alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title>{e.ACF.title}</Card.Title>
                                            
                                        </Card.ImgOverlay>
                                    </Card>
                                    </Link>
                                    </Col>
                                })
                            }

                            
                        </Row>
                    </Container>

                    <GitHubCta />
                </Layout>

            </div>
            )
            }