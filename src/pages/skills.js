import React from "react"
import { Link } from "gatsby"
import skillStyles from '../components/CSS/skills.module.css'
import Layout from "../components/layout"
import gatsby from '../images/gatsby.png'
import html from '../images/html.png'
import js from '../images/js.png'
import CSS from '../images/css.png'
import postgres from '../images/postgres.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import s3 from '../images/s3.png'
import socket from '../images/socket.png'
import node from '../images/node.png'
import SEO from "../components/seo"


const IndexPage = () => (
  <>
    <div id='skills'></div>
    <SEO title="skills" />
    


    <div className={skillStyles.title}>
      <h1>SKILLS</h1>
      <h2>After building a few full-stack applications, I have obtained skills by using these technologies.</h2>
      </div>


      <div className={skillStyles.allSkills}>
        <div className={skillStyles.skill} id='node'>

          <img id={skillStyles.skill} src={node} alt='node' />
          <p>Node</p>
        </div>

        <div className={skillStyles.skill} id='react'>
          <img id={skillStyles.skill} src={react} alt='react' />
          <p>React</p>
        </div>


        <div className={skillStyles.skill} id='redux'>
          <img id={skillStyles.skill} src={redux} alt='redux' />
          <p>Redux</p>
        </div>




        <div className={skillStyles.skill} id='gatsby'>
          <img id={skillStyles.skill} src={gatsby} alt='gatsby' />
          <p>Gatsby</p>
        </div>

        <div className={skillStyles.skill} id='postgres'>
          <img id={skillStyles.skill} src={postgres} alt='postgressql' />
          <p>PostgreSql</p>
        </div>

        <div className={skillStyles.skill} id='css3'>
          <img id={skillStyles.skill} src={CSS} alt='css3' />
          <p>CSS3</p>
        </div>



        <div className={skillStyles.skill} id='html5'>
          <img id={skillStyles.skill} src={html} alt='html5' />
          <p>HTML5</p>
        </div>


        <div className={skillStyles.skill} id='javascript'>
          <img id={skillStyles.skill} src={js} alt='javascript' />
          <p>JavaScript</p>
        </div>

        <div className={skillStyles.skill} id='aws3'>
          <img id={skillStyles.skill} src={s3} alt='aws3' />
          <p>AWS S3</p>
        </div>


        <div className={skillStyles.skill} id='socket'>
          <img id={skillStyles.skill} src={socket} alt='socket.io' />
          <p>Socket.io</p>
        </div>

    </div>


















  </>
)

export default IndexPage
