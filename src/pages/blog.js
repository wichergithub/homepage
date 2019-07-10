import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import {graphql} from "gatsby"

export default ({data}) => (
  <Layout>
        <StyledHero  img={data.defaultBcg.childImageSharp.fluid} >
           
        </StyledHero>
        
    </Layout>
)
export const query = graphql`
query{
    defaultBcg:file(relativePath:{eq:"blog_main.jpeg"}){
      childImageSharp{
        fluid(maxWidth:4160, quality:90){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`