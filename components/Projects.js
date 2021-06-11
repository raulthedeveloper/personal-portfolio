import React from 'react'
import styles from '../styles/Projects.module.scss'
import Link from 'next/link'


export default function Projects() {
    return (
        <div className="container">
        <section id="projects">
            <h2>Projects</h2>
            <div className="row ">
                <div className="col-7">
               <Link href="/AllProjects"><a>
                <img className="gutters" src="https://www.websitetooltester.com/wp-content/uploads/2018/01/000webhost-homepage.png" alt="" />
                    </a>
                    </Link>                  
                </div>
                <div className="col-3">
                <Link href="/AllProjects"><a>
                    <img className={styles.smallerImage}  src="https://www.websitetooltester.com/wp-content/uploads/2018/01/000webhost-homepage.png" alt="" />
                    </a>
                    </Link>
                    <Link href="/AllProjects"><a>
                    <img className={styles.smallerImage}  src="https://www.websitetooltester.com/wp-content/uploads/2018/01/000webhost-homepage.png" alt="" />
                    </a>
                    </Link>
                </div>
            </div>
        </section>
    </div>
    )
}
