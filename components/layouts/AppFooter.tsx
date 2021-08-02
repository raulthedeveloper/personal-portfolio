import React from 'react'
import { Container } from 'react-bootstrap'

var currentYear= new Date().getFullYear(); 

export default function Footer() {
    return (
        
            <footer className="footer">
                <Container className="d-flex flex-column justify-content-center">
                <span className="text-center section-header" style={{"fontSize":"4vw"}} >raulthedeveloper&copy;{currentYear}</span>
               
                </Container>
                
            </footer>
            
        
    )
}
