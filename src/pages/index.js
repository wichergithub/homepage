import React from "react"
import {Link} from "gatsby"
import Layaout from "../components/Layout"
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import {graphql} from "gatsby"

export default ({data}) => 
    (
    <Layaout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid} >
            <Banner title="Modern and Tasteful" info="Classy feel with a modern touch and futuristic technology">
                <Link to="/projects" className='btn-white'>Show me more!</Link>
            </Banner>
        </StyledHero>
        <About />
        <Services />
    </Layaout>
    )

export const query = graphql`
query{
    defaultBcg:file(relativePath:{eq:"main_hero.png"}){
      childImageSharp{
        fluid(maxWidth:4160, quality:90){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`


