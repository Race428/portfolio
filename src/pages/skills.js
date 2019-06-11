import React from "react"
import { Link } from "gatsby"
import skillStyles from '../components/CSS/skills.module.css'
import Layout from "../components/layout"
import Image from "../images/ales-nesetril-734016-unsplash.jpg"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="skills" />
    


    <div className={skillStyles.title}>
      <h1>SKILLS</h1>
      <h5>After building a few full-stack applications, I have obtained skills by using these technologies.</h5>
      </div>


      <div className={skillStyles.allSkills}>
        <div className={skillStyles.skill} id='node'>

          <img id='skill' src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' alt='node' />
          <p>Node</p>
        </div>

        <div className={skillStyles.skill} id='react'>
          <img id='skill' src='https://cdn.worldvectorlogo.com/logos/react.svg' alt='react' />
          <p>React</p>
        </div>


        <div className={skillStyles.skill} id='redux'>
          <img id='skill' src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' alt='redux' />
          <p>Redux</p>
        </div>




        <div className={skillStyles.skill} id='gatsby'>
          <img id='skill' src='https://cdn.worldvectorlogo.com/logos/gatsby.svg' alt='gatsby' />
          <p>Gatsby</p>
        </div>

        <div className={skillStyles.skill} id='postgres'>
          <img id='skill' src='https://cdn.worldvectorlogo.com/logos/postgresql.svg' alt='postgressql' />
          <p>PostgreSql</p>
        </div>

        <div className={skillStyles.skill} id='css3'>
          <img id='skill' src='https://cdn.worldvectorlogo.com/logos/css-5.svg' alt='css3' />
          <p>CSS3</p>
        </div>



        <div className={skillStyles.skill} id='html5'>
          <img id='skill' src='https://cdn.worldvectorlogo.com/logos/html-5.svg' alt='html5' />
          <p>HTML5</p>
        </div>


        <div className={skillStyles.skill} id='javascript'>
          <img id='skill' src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg' alt='javascript' />
          <p>JavaScript</p>
        </div>

        <div className={skillStyles.skill} id='aws3'>
          <img id='skill' src='https://cdn.worldvectorlogo.com/logos/amazon-s3.svg' alt='aws3' />
          <p>AWS S3</p>
        </div>


        <div className={skillStyles.skill} id='socket'>
          <img id='skill' src='https://cdn.worldvectorlogo.com/logos/socket-io.svg' alt='socket.io' />
          <p>Socket.io</p>
        </div>

    </div>


















  </>
)

export default IndexPage
