import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

type Props ={
  image:string,
  text:string
}


export default function Introduction({image,text}:Props) {
    return (
        <div>
            <section className="intro">
        <Container>
        <Row>
          {
            text ? <Col md={8} sm={12} dangerouslySetInnerHTML={{__html:text}} /> :
             <Col md={8} sm={12}> 
             <h1>Lorem ipsum</h1>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident praesentium iure temporibus dolor delectus cumque. Placeat adipisci dignissimos error a quisquam maiores suscipit, odio ratione vero, nisi, blanditiis asperiores id.</p>
             </Col>
          }
          

          <Col md={4} sm={12}>
            {
              image ? <img className="profile-img" src={image} alt="My Headshot" /> : <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
            }
            
          </Col>
          

        </Row>
        </Container>
        
      </section>
        </div>
    )
}