import React, {useState,useEffect} from 'react'

import { Container,Row,Image,Col,Card,ListGroup } from 'react-bootstrap'
// import Image from 'next/image'
import Layout from '../../components/layouts/Layout'
import Screenshots from '../../components/Carousels/screenshots';
import Technologies from '../../components/Carousels/technologies';

import  GitHubCta  from '../../components/GitHubCta'





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



export async function getStaticProps(context) {
    interface galleryProp {
        item:string,
        gallery:string[]
    }

    const id:string = context.params.id
    const [item, gallery] = await Promise.all([
        fetch(`http://portfoliobackend.local/wp-json/wp/v2/portfolio_item`).then(r => r.json()),
        fetch(`http://portfoliobackend.local/wp-json/wp/v2/envira-gallery`).then(r => r.json())
      ]);
    
      return {
        props: {
                item:item[id].ACF,
                gallery:gallery
        }
        }

  };

const screenshotArray:string[] =[];
const techIconLinks:string[] = [];


function getGalleryImages(gallery:string[],type,techIcons:boolean,pageTitle:boolean){

    if(pageTitle){
    gallery.forEach((element:any,index:number) => {

       
            if(element.title.rendered == type.title){
    
                element.gallery_data.gallery.forEach(i =>{
                    screenshotArray.push(i)
                    
                })
            }
       
    });
}

    if(techIcons){
       

        // Retrieves current icons from comparing against icon array from api against Tech Icons gallery
        gallery.forEach(e =>{
            if(e.title.rendered == 'Tech Icons'){
                // console.log(e.gallery_data.gallery)
                e.gallery_data.gallery.forEach( j =>{
                    

                    type.forEach((icons, index)=> {
                        if(j.title == icons ){
                           
                            techIconLinks.push(j)
                        }
                    });

                })
            }
        })


        

        
        
        
    }
    
    
}




export default function Item({item,gallery}) {

    const technologyArray:string[] = item.technologies.split(" ")

    const [iconsData,setIconData] = useState([])



    

    

useEffect(() =>{
    getGalleryImages(gallery,item,false,true)
    setIconData([...iconsData,techIconLinks])
    getGalleryImages(gallery,technologyArray,true,false)
},[])
    

    





return (
<div>
    <Layout>
        <section className="project-hero">
            <Container fluid className="project-hero-container">
                <Row>
                    
                    <div className="jumbotron" style={{"backgroundImage":`url(${item.project_gif.url})`}}>

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
                </Container>
               
                </section>

                
                <Container fluid style={{"width":"90%"}}>
                <h2>Technologies</h2>


                <Technologies iconLinks={techIconLinks}/>


                <h2> Screen Shots </h2>
                <Screenshots images={screenshotArray} />
                <section>
                <Row>

                    <Col>
                    <h2>Features</h2>
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
                </section>
            </Container>
        

                    <GitHubCta dark={true}/>
            

    </Layout>

</div>
)
}