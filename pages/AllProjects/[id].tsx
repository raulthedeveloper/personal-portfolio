import React, {useState,useEffect} from 'react'

import { Container,Row,Image,Col,Card,ListGroup } from 'react-bootstrap'
// import Image from 'next/image'
import Layout from '../../components/layouts/Layout'
import Screenshots from '../../components/Carousels/screenshots';
import Technologies from '../../components/Carousels/technologies';
import SingeTestimonial from '../../components/SingeTestimonial';
import  GitHubCta  from '../../components/GitHubCta'





export async function getStaticPaths() {
const res = await fetch(process.env.NEXT_PUBLIC_ITEM_API)
const data = await res.json()



const paths = data.map((item,index) =>{
    console.log(item['slug'])
return {
params:{
    id:index.toString(),
    slug:item.slug
}
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
        fetch(process.env.NEXT_PUBLIC_ITEM_API).then(r => r.json()),
        fetch(process.env.NEXT_PUBLIC_GALLERY_API).then(r => r.json())
      ]);
      
      console.log(item[id])

      return {
        props: {
                item:item[id].ACF,
                gallery:gallery,
                
        }
        }

  };

let screenshotArray:string[] =[];
const techIconLinks:string[] = [];


function getGalleryImages(gallery:string[],type,techIcons:boolean,pageTitle:boolean){

    if(pageTitle){
    gallery.forEach((element:any,index:number) => {

       
            if(element.title.rendered == type.title){
                // Clears screenshotArray array
                screenshotArray = []
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

    const [testimonialData, setTestimonialData] = useState({})

    

    

useEffect(() =>{
    getGalleryImages(gallery,item,false,true)
    setIconData([...iconsData,techIconLinks])
    getGalleryImages(gallery,technologyArray,true,false)
},[])
    

    





return (
<div>
    <Layout>
        <section className="project-hero mt-0">
            <Container fluid className="project-hero-container">
                <Row>
                    
                    <div className="jumbotron" style={{"backgroundImage":`linear-gradient(90deg, rgba(0,0,0,0.6) 100%, rgba(2,2,15,1) 100%),url(${item.project_gif.url})`}}>

                        <div className="see-site">
                        <h1 className="display-4 text-center">{item.title}</h1>
                        <p className="lead text-center">This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.</p>
                        <p className="lead">
                            <a target="__blank" className="btn btn-primary btn-lg" href={item.site_url} role="button">Visit Site</a>
                        </p>
                        </div>
                        
                    </div>

                </Row>
                </Container>
               
                </section>

                
                <Container>
                <h2 className="section-header">Technologies</h2>


                <Technologies iconLinks={techIconLinks}/>


                <h2 className="section-header"> Screen Shots </h2>
                <Screenshots images={screenshotArray} />
                <section>
                <Row>
                <Col md={6} sm={12}>
                    <h2 className="section-header">{item.title}</h2>
                    {/* Add dangerously html */}
                    <div dangerouslySetInnerHTML={{__html:item.description}} />
                    </Col>
                    
                    <Col md={6} sm={12}>
                    <h2 className="section-header">Features</h2>
                    <ListGroup>
                        <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                                            </Col>
                    
                </Row>
                </section>
            </Container>

                    {
                        item.testimonial ? <SingeTestimonial divider={item.github ? true : false} data={[item.testimonial_headshot,item.testimonial_title,item.testimonial]}/> : null
                    }
        
                    {
                        item.github ? <GitHubCta dark={true} link={item.github}/> : null
                    }

                    
                    
            

    </Layout>

</div>
)
}