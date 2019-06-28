
import React from 'react'
import Navbar from "./Navbar.js"
import Footer from "./Footer.js"
import "../css/layout.css"

function Layout({children}) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
     </>
  )
}

export default Layout
