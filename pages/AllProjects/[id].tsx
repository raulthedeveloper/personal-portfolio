import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container,Row,Image,Col,Card } from 'react-bootstrap'
// import Image from 'next/image'
import Layout from '../../components/layouts/Layout'
import Carousel_1 from '../../components/Carousels/Carousel_1';
import Carousel_2 from '../../components/Carousels/Carousel_2';






export async function getStaticPaths() {
const res = await fetch(`http://portfoliobackend.local/wp-json/wp/v2/portfolio_item`)
const data = await res.json()


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
return (
<div>
    <Layout>
        <section className="project-hero">
            <Container className="project-hero-container" fluid>
                <Row>
                    <Image style={{"width":"100%"}} src={item.screen_shot_1.url} alt="" />

                </Row>
                <h2>Technology</h2>
                    <Carousel_2 />

                

                <Carousel_1 />

                <Row>

                    <Col>
                    <ul>
                        <li>Feature</li>
                        <li>Feature</li>
                        <li>Feature</li>
                        <li>Feature</li>
                        <li>Feature</li>
                    </ul>
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