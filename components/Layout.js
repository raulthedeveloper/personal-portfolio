import React from 'react'
import Navigation from './Navigation'
import AppFooter from './AppFooter'

export default function Layout(props) {
    return (
        <div className="container-fluid">
            <Navigation></Navigation>

        {props.children}
            <AppFooter></AppFooter>
            
        </div>
    )
}
