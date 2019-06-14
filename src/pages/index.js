import React from "react"
import { Link } from "gatsby"
import indexStyles from '../components/CSS/index.module.css'
import Layout from "../components/layout"
import Image from "../images/ales-nesetril-734016-unsplash.jpg"

import Skills from '../pages/skills'
import Projects from '../pages/projects'
import About from '../pages/about'
import Contact from '../pages/contact'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.home}>
    <img src={Image} alt ='background' className={indexStyles.background} /> 
       <div className={indexStyles.text}></div>


      <div className={indexStyles.parallax} >

      </div>
    
      <div className={indexStyles.text}>
        <h1>My name is Race Acheson.</h1>
        <h1>I am a Web Developer.</h1>
        <h1> Scroll down to see more!</h1>
      </div>
   
    </div>
    <div className={indexStyles.page}></div>
    <div id='skills'>
      <Skills />
    </div>
    <Projects />
    <About />
    <Contact />


  </Layout>
)

export default IndexPage
