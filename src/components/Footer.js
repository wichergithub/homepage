import React from 'react'
import style from '../css/footer.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import links from '../constants/links'
import socialIcons from '../constants/social-icons'

function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.links}>
            {links.map((item, index)=>{return <AniLink key={index} fade to={item.path}>{item.text}</AniLink>})}
        </div>
        <div className={style.icons}>
            {socialIcons.map((item,index)=>{return <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">{item.icon}</a>})}
        </div>
        <div className={style.copyright}>
            Copyright &copy; QM Dev GmbH {new Date().getFullYear()} all rights reserved.
        </div>
    </footer>
  )
}

export default Footer
