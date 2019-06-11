import React from "react"
import { Link } from "gatsby"
import indexStyles from '../components/CSS/index.module.css'
import Layout from "../components/layout"
import Image from "../images/ales-nesetril-734016-unsplash.jpg"

import Skills from '../pages/skills'
import Projects from '../pages/projects'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.home}>


      <div className={indexStyles.parallax}>

      </div>
      <h1>My name is Race Acheson and I am a Web Developer. Scroll down or use the links to learn more about who I am and what I do!</h1>
    </div>
    <div className={indexStyles.page}></div>

    <Skills />
    <Projects />


  </Layout>
)

export default IndexPage
