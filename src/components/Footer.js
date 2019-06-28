import React from 'react'
import style from '../css/footer.module.css'
import {Link} from 'gatsby'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import { FaRPoject } from 'react-icons/fa'
function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.links}>
            {links.map((item, index)=>{return <Link key={index} to={item.path}>{item.text}</Link>})}
        </div>
        <div className={style.icons}>
            {socialIcons.map((item,index)=>{return <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">{item.icon}</a>})}
        </div>
        <div className={style.copyright}>
            Copyright &copy; QM Design GmbH {new Date().getFullYear()} all rights reserved.
        </div>
    </footer>
  )
}

export default Footer
