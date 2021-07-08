import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/Technical.module.scss'
import { Image } from 'react-bootstrap'


export default function Technical({toggleSlide,techData}) {
// console.log(techExperience.next.experience)



return (
  <section className="dark-section">

 
<Container >
  <h2 className="section-header">Technical</h2>
  

    <div className="row" style={{"marginBottom":"1.2rem","justifyContent":"space-between"}}>
    
      {
        
        techData.map((e:string[],index:number) =>{
          return <Col key={index + e.title} md={3} onClick={()=>toggleSlide(true,e.ACF.logo.url,e.title.rendered,e.content.rendered)} className={styles.logoBox}>
          <Image src={e.ACF.logo.url} alt="react logo" width={120} height={120} />
          <p>{e.title.rendered}</p>
        </Col>
        })
      }

     



    </div>


    



  
</Container>
</section>
)
}