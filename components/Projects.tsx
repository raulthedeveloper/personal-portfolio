import React from 'react'
import styles from '../styles/Projects.module.scss'
import { Container,Row,Col,Image } from 'react-bootstrap'
import Link from 'next/link'


export default function Projects() {
    return (
        <Container>
        <section id="projects">
            <h2>Projects</h2>
            <Row>
                
                <Col md={7}>
               <Link href="/AllProjects"><a>
                <Image fluid className="gutters" src="https://www.websitetooltester.com/wp-content/uploads/2018/01/000webhost-homepage.png" alt="" />
                    </a>
                    </Link>                  
                </Col>
                <Col md={5}>
                <Link href="/AllProjects"><a>
                    <Image fluid className={styles.smallerImage}  src="https://www.websitetooltester.com/wp-content/uploads/2018/01/000webhost-homepage.png" alt="" />
                    </a>
                    </Link>
                    <Link href="/AllProjects"><a>
                    <Image fluid className={styles.smallerImage}  src="https://www.websitetooltester.com/wp-content/uploads/2018/01/000webhost-homepage.png" alt="" />
                    </a>
                    </Link>
                </Col>
                <Link href="/AllProjects">See More</Link>
            </Row>
        </section>
    </Container>
    )
}
