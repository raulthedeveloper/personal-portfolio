import React from 'react'
import styles from '../styles/Review.module.scss'
import { Container, Carousel, Row, Col } from 'react-bootstrap'
import Image from 'next/image'


export default function Reviews() {
    return (
        <Container>
            <section id="reviews">
            {/* <div  style={{'justifyContent':'center'}}>
                <h2>Reviews</h2>

                <div className={styles.reviewBox}>

                <div className={styles.imgBox}>
                <Image
                    src="/images/review_image.jpg"
                    alt="SASS Logo"
                    width={120}
                    height={120}
                 />
                </div>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fugiat assumenda, non eius perspiciatis, illo deserunt repellendus voluptates, officiis optio minima delectus harum alias. Accusantium ea placeat aspernatur suscipit error.</p>
                </div>
                

            </div> */}

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </section>
            
        </Container>
    )
}
