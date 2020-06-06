import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layaout from "../components/Layout"
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import FeaturedProjects from "../components/Home/FeaturedProjects"
import {graphql} from "gatsby"

export default ({data}) => 
    (
    <Layaout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid} >
            <Banner title="Modern and Tasteful" info="Classy feel with a modern touch and futuristic technology">
                <AniLink fade to="/projects" className='btn-white'>Show me more!</AniLink>
            </Banner>
        </StyledHero>
        <About />
        {/* <Services /> */}
        {/* <FeaturedProjects /> */}
    </Layaout>
    )

export const query = graphql`
query{
    defaultBcg:file(relativePath:{eq:"hero.jpeg"}){
      childImageSharp{
        fluid(maxWidth:4160, quality:90){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


