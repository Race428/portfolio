import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './CSS/header.module.css'
import Logo from '../images/whitelogo.png'

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.links}>
    
    
        <Link
          to="/">
       <div className={styles.logo}>
        <img id={styles.logo} src ={Logo} alt ='logo' />
        </div> 
       
        </Link>
        <div className={styles.textLinks}>
        <Link to='/skills'>
        <a>SKILLS</a>
        </Link>
        <Link to='/projects'>
        <a>PROJECTS</a>
        </Link>
        <Link to='/about'>
        <a>ABOUT</a>
        </Link>
        <Link to='/contact'>
        <a>CONTACT</a>
        </Link>
        </div>
    </div>
  </header>
)

export default Header
