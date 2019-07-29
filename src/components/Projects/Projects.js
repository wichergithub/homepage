import React from "react"
import ProjectList from "./ProjectList"
import { useStaticQuery, graphql } from "gatsby"

const getProjects = graphql`
  query {
    projects: allContentfulProject {
      edges {
        node {
          name
          tech
          slug
          featured
          gitlink
          link
          contentful_id
          mainTech
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const { projects } = useStaticQuery(getProjects)
  return <ProjectList projects={projects} />
}

export default Projects
