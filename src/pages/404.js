import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner
          title="Not the site you belong"
          info="Country roads take me home, to the "
        >
          <AniLink className="btn-white" to="/">
            PLACE I BELONG
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
