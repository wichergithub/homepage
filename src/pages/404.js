import React from 'react'
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from '../components/Banner'
import {Link} from 'gatsby'

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Error, Error!" info="Haslo nieprawidlowe">
          <Link className="btn-white" to="/" >GO HOME UR DRUNK!</Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
