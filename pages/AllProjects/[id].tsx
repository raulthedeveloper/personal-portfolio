import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container,Row,Image,Col,Card,ListGroup } from 'react-bootstrap'
// import Image from 'next/image'
import Layout from '../../components/layouts/Layout'
import Screenshots from '../../components/Carousels/screenshots';
import Technologies from '../../components/Carousels/technologies';






export async function getStaticPaths() {
const res = await fetch(`http://portfoliobackend.local/wp-json/wp/v2/portfolio_item`)
const data = await res.json()

console.log(data)
const paths = data.map((item,index) =>{
return {
params:{id:index.toString()}
}
})

return {
paths,
fallback:false
}

}



export async function getStaticProps(context){
const id = context.params.id
const res = await fetch(`http://portfoliobackend.local/wp-json/wp/v2/portfolio_item`)
const data = await res.json()
console.log(id)
return {
props: {item: data[id].ACF}
}
}


export default function Item({item}) {
    let screenshots:string[] = [item.screen_shot_1,item.screen_shot_2,item.screen_shot_3]

return (
<div>
    <Layout>
        <section className="project-hero">
            <Container className="project-hero-container" fluid>
                <Row>
                    {/*
                    <Image style={{"width":"100%"}} src={item.screen_shot_1.url} alt="" /> */}
                    <div className="jumbotron" style={{"backgroundImage":"url('https://i.pinimg.com/originals/5f/ee/8e/5fee8e4a9fea271529cfd8828dd990d5.gif')"}}>

                        <div className="see-site">
                        <h1 className="display-4 text-center">{item.title}</h1>
                        <p className="lead text-center">This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Visit Site</a>
                        </p>
                        </div>
                        
                    </div>

                </Row>
                <h2>Technology</h2>
                <Technologies />



                <Screenshots images={screenshots} />

                <Row>

                    <Col>
                    <ListGroup>
                        <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                                            </Col>
                    <Col>
                    <h1>{item.title}</h1>
                    {/* Add dangerously html */}
                    <div dangerouslySetInnerHTML={{__html:item.description}} />
                    </Col>
                </Row>
            </Container>
        </section>



    </Layout>

</div>
)
}