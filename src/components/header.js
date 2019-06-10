import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './CSS/header.module.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.links}>
    
    
        <Link
          to="/">
         <a>Race Acheson</a>
        </Link>
        <Link to='/skills'>
        <a>Skills</a>
        </Link>
        <Link to='/projects'>
        <a>Projects</a>
        </Link>
     
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
