import React from 'react'
import {Container,Row,Col,Image,Button} from 'react-bootstrap'

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
             <h2 className="section-header">Lorem ipsum</h2>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident praesentium iure temporibus dolor delectus cumque. Placeat adipisci dignissimos error a quisquam maiores suscipit, odio ratione vero, nisi, blanditiis asperiores id.</p>
             <Button varient="success" className="m-2" href="/about">Read More</Button> 
             </Col>
          }
          

          <Col md={4} sm={12}>
            {
              image ? <Image fluid className="profile-img" src={image} alt="My Headshot" /> : <Image fluid src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=" alt="blank profile image" />
            }
            
          </Col>
          

        </Row>
        </Container>
        
      </section>
        </div>
    )
}
