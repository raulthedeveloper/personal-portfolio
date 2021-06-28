import React from 'react'
import Layout from '../../components/layouts/Layout'

export async function getStaticPaths() {
    const res = await fetch(`http://portfoliobackend.local/wp-json/wp/v2/portfolio_item`)
    const data = await res.json()
  
   
    const paths = data.map((item,index) =>{
        return {
            params:{id:index.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }

}



  export async function getStaticProps(context){
      const id = context.params.id
      const res = await fetch(`http://portfoliobackend.local/wp-json/wp/v2/portfolio_item`)
      const data = await res.json()
      console.log(id)
      return {
          props: {item: data[id].ACF}
      }
  }


export default function Item({item}) {
    return (
        <div>
            <Layout>
                <h1>{item.title}</h1>
            {/* Add dangerously html */}
            <p>{item.description}</p>
            </Layout>
           
        </div>
    )
}
