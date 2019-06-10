import React from "react"
import { Link } from "gatsby"
import styles from '../components/CSS/index.module.css'
import Layout from "../components/layout"
import Image from "../images/ales-nesetril-734016-unsplash.jpg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    
   <p style = {{color: 'white'}}>projects</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
