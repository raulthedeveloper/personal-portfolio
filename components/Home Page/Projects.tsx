import React from 'react'
import { Container,Row, Button, Card } from 'react-bootstrap'
import Link from 'next/link'


export default function Projects({recentProject}) {
    // console.log(recentProject[0].ACF.screen_shot_1.sizes.medium)
    return (
        <Container>
        <section id="projects">
            <h2 className="section-header">Recent Projects</h2>
            <Row >
                
                

            <div className="parent">
                    <div className="div1"> 
                    <Link  href={'./AllProjects/0'}>
                                    <Card className="bg-dark text-white project-thumbnail h-100">
                                        <Card.Img
                                        
                                            src={recentProject[0].ACF.screen_shot_1.sizes.large}
                                            alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title>{recentProject[0].ACF.title}</Card.Title>
                                            
                                        </Card.ImgOverlay>
                                    </Card>
                                    </Link>
                    </div>

                    <div className="div2">
                    <Link  href={'./AllProjects/1'}>
                                    <Card className="bg-dark text-white project-thumbnail h-100 mb-0">
                                        <Card.Img
                                            src={recentProject[1].ACF.screen_shot_1.sizes.medium}
                                            alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title>{recentProject[1].ACF.title}</Card.Title>
                                            
                                        </Card.ImgOverlay>
                                    </Card>
                                    </Link>
                         </div>


                    <div className="div3"> 
                    <Link  href={'./AllProjects/2'}>
                                    <Card className="bg-dark text-white project-thumbnail h-100">
                                        <Card.Img
                                            src={recentProject[2].ACF.screen_shot_1.sizes.medium}
                                            alt="Card image" />
                                        <Card.ImgOverlay>
                                            <Card.Title>{recentProject[2].ACF.title}</Card.Title>
                                            
                                        </Card.ImgOverlay>
                                    </Card>
                                    </Link>
                    </div>
                    </div>

                    


                        

            </Row>
            <Row>
            <Button varient="success" className="m-auto" href="/AllProjects">See All</Button> 

            </Row>
        </section>
    </Container>
    )
}
