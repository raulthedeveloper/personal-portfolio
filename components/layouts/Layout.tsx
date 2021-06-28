import React from 'react'
import Navigation from './Navigation'
import AppFooter from './AppFooter'
import { Container } from 'react-bootstrap'

export default function Layout(props) {
    return (
        <div className="bg-dark">

            <Navigation></Navigation>

        {props.children}
            <AppFooter></AppFooter>
            
        </div>
    )
}
