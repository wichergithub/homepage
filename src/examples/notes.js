{
    tours: allContentfulProject {
      edges {
        node {
          name
          tech
          slug
          featured
          gitlink
          link
          contentful_id
          images{
            fluid{
              src
            }
          }
        }
      }
    }
  }

  