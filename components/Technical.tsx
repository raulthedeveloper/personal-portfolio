import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles/Technical.module.scss'
import { Image } from 'react-bootstrap'


export default function Technical({toggleSlide,techData}) {
// console.log(techExperience.next.experience)


return (
  <section>

 
<Container >
  <h2>Technical</h2>
  

    <div className="row" style={{"marginBottom":"1.2rem","justifyContent":"space-between"}}>


      {
        techData.map((e:string[],index:number) =>{
          console.log(e.ACF.logo.url)
          return <Col md={3} onClick={()=>toggleSlide(true,e.ACF.logo.url,e.title.rendered)} className={styles.logoBox}>
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