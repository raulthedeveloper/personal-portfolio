import React from 'react'
import style from '../styles/Technical.module.scss'
import Image from 'next/image'


export default function TechInfoSlide({toggleSlide,slideImg,slideText}) {
    return (
        <div className="container" >
                     

            <div className="row" style={{'justifyContent':'center'}}>
            <Image
        src={slideImg}
        alt="Picture of the author"
        width={120}
        height={120}
      />
            </div>
            <div className="row" style={{'padding':'3rem'}}>
            <p>{slideText}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi ut sunt. Architecto, voluptatem nam? Iure nisi atque, voluptas exercitationem nostrum cum quos, harum quia fugiat corrupti repellat quis quas.</p>

            <button style={{"width":"5rem"}} onClick={()=>toggleSlide(false)}>Back</button>

            </div>
        </div>
    )
}
