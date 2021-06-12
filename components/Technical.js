import React from 'react'
import styles from '../styles/Technical.module.scss'
import Image from 'next/image'



export default function Technical({toggleSlide,techExperience}) {
console.log(techExperience.next.experience)


    return (
        <div className="container">
            <h2>Technical</h2>
            <div className={styles.logoContainer}>

              <div className="row" style={{"marginBottom":"1.2rem","justifyContent":"space-between"}}>

          
        <div onClick={()=>toggleSlide(true,"/images/react-logo.png",'hello')} className={styles.logoBox}>
        <Image
        src="/images/react-logo.png"
        alt="react logo"
        width={120}
        height={120}
      />
      <p>React JS</p>
        </div>
              

        <div onClick={()=>toggleSlide(true,"/images/sass-logo.png","I am sass content")} className={styles.logoBox}>
<Image
        src="/images/sass-logo.png"
        alt="SASS Logo"
        width={120}
        height={120}
          />
          <p>Sass</p>
      </div>

      <div onClick={()=>toggleSlide(true,"/images/vue-logo.png","I am vue content")} className={styles.logoBox}>
<Image
        src="/images/vue-logo.png"
        alt="Vue Js Logo"
        width={120}
        height={120}
      />
      <p>Vue Js</p>
</div>

<div onClick={()=>toggleSlide(true,"/images/wordpress-logo.png","I am wordpress content")} className={styles.logoBox}>
<Image
        className={styles.techLogo}
        src="/images/wordpress-logo.png"
        alt="Wordpress Logo"
        width={120}
        height={120}
      />
      <p>Wordpress</p>

</div>



              </div>


    <div className="row" style={{"marginBottom":"1.2rem","justifyContent":"space-between"}}>

    <div onClick={()=>toggleSlide(true,"/images/php-logo.png","I am php content")} className={styles.logoBox}>

              <Image
        className={styles.techLogo}
        src="/images/php-logo.png"
        alt="PHP Logo"
        width={120}
        height={120}
      />
      <p>PHP</p>
</div>


<div onClick={()=>toggleSlide(true,"/images/swift-logo.png","I am swift content")} className={styles.logoBox}>

              <Image
        className={styles.techLogo}
        src="/images/swift-logo.png"
        alt="Swift Logo"
        width={120}
        height={120}
      />
<p>Swift</p>
      </div>


      <div onClick={()=>toggleSlide(true,"/images/nextjs-logo.png","I am next js")} className={styles.logoBox}>

<Image
        className={styles.techLogo}
        src="/images/nextjs-logo.png"
        alt="Next Js Logo"
        width={120}
        height={120}
      />
      <p>Next Js</p>
      </div>

      <div onClick={()=>toggleSlide(true,"/images/nuxt-logo.png","I am nuxt content")} className={styles.logoBox}>

      <Image

        className={styles.techLogo}
        src="/images/nuxt-logo.png"
        alt="Nuxt Js Logo"
        width={120}
        height={120}
      />
      <p>Nuxt Js</p>
      </div>
              </div>
          


            </div>
        </div>
    )
}
