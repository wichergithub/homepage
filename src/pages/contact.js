import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import {graphql} from "gatsby"

function contact({data}) {
  return (
    <Layout>
      <StyledHero  img={data.defaultBcg.childImageSharp.fluid} >
            
        </StyledHero>
    </Layout>
  )
}

export default contact
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