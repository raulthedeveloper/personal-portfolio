import React from 'react'
import Navigation from './Navigation'
import AppFooter from './AppFooter'
import Head from 'next/head'

export default function Layout(props) {
    return (
        <div className="bg-dark">
            {/* <Head>
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
             <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head> */}

            <Navigation></Navigation>

        {props.children}
            <AppFooter></AppFooter>
            
        </div>
    )
}
