import React from 'react'
import styles from '../../styles/Footer.module.scss'
import { Container } from 'react-bootstrap'

export default function Footer() {
    return (
        
            <footer className={styles.footer}>
                <Container>
                <span style={{'color':'white'}}>copyright</span>
                <ul>
                    <li>logo</li>
                </ul>
                </Container>
                
            </footer>
            
        
    )
}
