import React from 'react'


export default function Introduction({image,text}) {
    return (
        <div>
            <section className="intro">
        <div className="container">
        <div className="row">
          <div className="col-7 ">
            <h2>Hello I'm Raul</h2>
            <p>{text}</p>
          </div>

          <div className="col-3">
            <img className="profile-img" src={image} alt="My Headshot" />
          </div>

        </div>
        </div>
        
      </section>
        </div>
    )
}
