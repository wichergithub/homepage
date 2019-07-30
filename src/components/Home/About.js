import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from '../../images/main_about.jpeg'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "main_about.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="About" subtitle="Me" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about Me" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="picture of devoted coder trying to solve the 42 principal"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Full Stack Developer</h4>
          <p>
            I am a full stack developer with a strong background in people
            management and marketing. I have been consistently valued for my
            creative approach to complex problems and rational thinking in
            critical situations.{" "}
          </p>
          <p>
            My natural adaptation skills allowed me to become a
            jack-of-all-trades in all the previous workplaces. I love the
            dynamic work environment and busy schedule since my aspiration is to
            become a project manager in the near future.
          </p>
          <AniLink fade to="/about" className="btn-primary">
            Read more!
          </AniLink>
        </article>
      </div>
    </section>
  )
}

export default About
