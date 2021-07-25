import React,{ useState,useEffect } from 'react'
import Layout from '../../components/layouts/Layout'
import Link from 'next/link'
import { Container, Row, Col, Card } from 'react-bootstrap'
import GitHubCta  from '../../components/GitHubCta'


export async function getStaticProps(context) {
    const res = await fetch(process.env.NEXT_PUBLIC_ITEM_API)
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
                    
                    <Container style={{"marginTop":"5rem","marginBottom":"5rem"}}>
                    <h2 className="mt-3 section-header">Projects</h2>
                        <Row style={{"marginTop":"3rem"}}>

                            {
                                data.map((e,index) => {
                                   return <Col key={index} md={4} className="mb-1">
                                <Link  href={'./AllProjects/' + index}>
                                    <Card className="bg-dark text-white project-thumbnail">
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

                    <GitHubCta dark={true} link={"https://github.com/raulthedeveloper"}/>
                </Layout>

            </div>
            )
            }