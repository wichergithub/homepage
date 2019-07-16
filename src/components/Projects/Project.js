import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/project.module.css'
import {GoOctoface} from 'react-icons/go'
import Anilink from 'gatsby-plugin-transition-link/AniLink'

const Project = ({project}) => {
    const {name, tech, slug, gitlink, link, images} = project
    let mainImage = images[0].fluid;

    
    
    return (
        <article className={styles.project}>
        <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="project img" />
        <Anilink fade to={`/projects/${slug}`} className={styles.link}>details</Anilink>
        </div>
        <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
        <h5 className={styles.git}>
        {tech}
        </h5>
        <div className={styles.details}>
        <h6><a href={gitlink} target="_blank" rel="noopener noreferrer"><GoOctoface className={styles.icon}/> CODE</a>  ||       <a href={link} target="_blank" rel="noopener noreferrer">LIVE DEMO</a></h6>
        
        </div>
        </div>
        </div>
        </article>
    )
}

export default Project

