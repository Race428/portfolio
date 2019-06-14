import React from "react"
import { Link } from "gatsby"
import indexStyles from '../components/CSS/index.module.css'
import Layout from "../components/layout"
import Image from "../images/ales-nesetril-734016-unsplash.jpg"

import Skills from '../pages/skills'
import Projects from '../pages/projects'
import About from '../pages/about'
import Contact from '../pages/contact'
import Header from '../components/header'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>



    <SEO title="Home" />
    <Header /> 
    <div className={indexStyles.home}>

      <div className={indexStyles.text}></div>


      <img src={Image} alt='background' className={indexStyles.background} />
      <div className={indexStyles.parallax} >
      </div>

      <div className={indexStyles.text}>
        <h1>My name is Race Acheson.
          <br/>
        I am a Web Developer. <br/>
     Scroll down to see more!</h1>
      </div>

    </div>
    <div className={indexStyles.page}></div>

    <Skills />

    <div className={indexStyles.page}></div>
    {/* <br /> */}

    <Projects />
    <div className={indexStyles.page}></div>

    <About />


    <Contact />
    {/* <div className={indexStyles.page}></div> */}


    <div className={indexStyles.madeRace}>
      <p>Made by Race Acheson using Gatsby</p>
    </div>
  </Layout>
)

export default IndexPage
