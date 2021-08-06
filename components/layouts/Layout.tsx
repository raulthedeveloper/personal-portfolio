import React from 'react'
import Navigation from './Navigation'
import AppFooter from './AppFooter'
import Head from 'next/head'

export default function Layout(props) {
    return (
        <div className="bg-dark" style={{"height":"100%"}}>
           
            <Head>
                <title>Raul Rodriguez</title>
            </Head>

            <Navigation></Navigation>

        {props.children}
            <AppFooter></AppFooter>
            
        </div>
    )
}
