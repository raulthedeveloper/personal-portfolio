import React from 'react'
import styles from '../styles/Navigation.module.scss'
import Link from 'next/link'



export default function navigation() {
    return (
        <div className={styles.navigation}>
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/AllProjects"><a>Projects</a></Link></li>                    
                </ul>
        </div>
    )
}
