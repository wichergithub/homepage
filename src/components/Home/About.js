import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/main_about.jpeg'
const About = () => {
    return (
        <section className={styles.about}>
          <Title title="About" subtitle="Me"/>
          <div className={styles.aboutCenter}>
            <article className={styles.aboutImg}>
              <div className={styles.imgContainer}>
                <img src={img} alt="about Me" />
              </div>
            </article>
            <article className={styles.aboutInfo}>
              <h4>
                Full Stack Developer
              </h4>
              <p>I am a full stack developer with a strong background in people management and marketing. I have been consistently valued for my creative approach to complex problems and rational thinking in critical situations. </p>
              <p>My natural adaptation skills allowed me to become a jack-of-all-trades in all the previous workplaces. I love the dynamic work environment and busy schedule since my aspiration is to become a project manager in the near future.</p>
              <button type="button" className="btn-primary">Read more!</button>
            </article>
          </div>
        </section>

    )
}

export default About