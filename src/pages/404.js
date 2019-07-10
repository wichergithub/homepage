import React from 'react'
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from '../components/Banner'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Error, Error!" info="Haslo nieprawidlowe">
          <AniLink className="btn-white" to="/" >GO HOME UR DRUNK!</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
