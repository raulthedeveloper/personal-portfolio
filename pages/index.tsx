import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import Introduction from '../components/Home Page/Introduction'
import Technical from '../components/Technical'
import Projects from '../components/Home Page/Projects'
import HireMe from '../components/Home Page/HireMe'
import TechInfoSlide from '../components/Home Page/TechInfoSlide'
import Testimonial from '../components/Carousels/Testimonial'


import { useState,useEffect } from 'react'



export async function getStaticProps(context) {
  

  const [data,tech,testimonialData] = await Promise.all([
      fetch(`http://portfoliobackend.local/wp-json/wp/v2/personal_portfolio
      `).then(r => r.json()),
      fetch(`http://portfoliobackend.local/wp-json/wp/v2/tech_skills/`).then(r => r.json()),
      fetch(`http://portfoliobackend.local/wp-json/wp/v2/testimonials/`).then(r => r.json())
    ]);
  

    return {
      props: {
              data,
              tech,
              testimonialData
              
      }
      }

};





export default function Home({data,tech,testimonialData}) {

  let [showSlide, setShowSlide ] = useState(false)
  let [ slideImg, setSlideImg ] = useState(String)
  let [ slideTitle, setSlideTitle ] = useState(String)
  let [ slideContent, setSlideContent ] = useState(String)

  let [pageState, setPageState] = useState(Object)



  useEffect(() => {
    const apiData = data[0].ACF


      setPageState:setPageState({
        introImg:apiData.about_me_image.url,
        introtitle:apiData.about_me,
        hireTitle:apiData.hire_title,
        hiretitle:apiData.hire_me
      })


  } ,[])

  



  function toggleSlide(bool:boolean,logo:string,title:string,content:string):void{
    setShowSlide(bool)
    setSlideImg(logo)
    setSlideTitle(title)
    setSlideContent(content)

  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <Introduction image={pageState.introImg} text={pageState.introtitle}></Introduction>

      {
        showSlide ? <TechInfoSlide toggleSlide={toggleSlide} slideImg={slideImg} slideTitle={slideTitle} slideContent={slideContent}/> : <Technical techData={tech} toggleSlide={toggleSlide} />
      }
      
   
    <Projects></Projects>
   
     
    
     <Testimonial data={testimonialData}/>
    

      
     
      <HireMe title={pageState.hireTitle} text={pageState.hiretitle}></HireMe>
     
     
    </Layout>
    </div>

      
   
  )
}


interface techExperience {
  obj:{
    react:{
     react:{
      experience:string
    },
    swift:{
      experience:string
    },
    php:{
      experience:string
    },
    sass:{
      experience:string
    },
    next:{
      experience:string
    },
    vue:{
      experience:string
    },
    wordpress:{
      experience:string
    },
    nuxt:{
      experience:string
    }
    },
    swift:{
      experience:string
    },
    php:{
      experience:string
    },
    sass:{
      experience:string
    },
    next:{
      experience:string
    },
    vue:{
      experience:string
    },
    wordpress:{
      experience:string
    },
    nuxt:{
      experience:string
    }
  }
}

interface setPageState {
  obj:{
    introImg:string,
    introtitle:string
    hireTitle:string,
    hiretitle:string,
    techExperience:techExperience
  }
  // Add more typesafty later
  
}