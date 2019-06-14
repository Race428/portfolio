import React from "react"
import projectStyles from '../components/CSS/projects.module.css'

import SEO from "../components/seo"


const Projects = () => (
  <>
    <SEO title="Projects" />
    <div id='3'></div>
    <div className={projectStyles.leftSide} >
      <div className={projectStyles.copy}>
        <h2>PERSONAL PROJECT</h2>
        <h4> Tender Connections is my full-stack application that connects people who like the same food. Upon registering, you select your food preference. On your main page you can see every dish that was posted.You also see all the dishes that match your preferences. The last column, which is empty when you first register is where the dishes you like are stored. After selecting a dish or two, you can then go to your profile and click matches. You then see all the dishes you like as well as all those who also liked it. You can view their profile and even chat with them using Socket.io. Your conversation is saved and can be seen every time you rejoin the chat.
          <br />
          <br />
          I created this application using:
          <br />
          <br /> 
          <ul> 
          <li>React</li>
          <li> Heroku Database</li>
          <li>Node </li>
          <li>PostgreSQL to design my database </li>
          <li>Bcrypt to provide authentication </li>
          <li>Redux and Sessions to remember user data</li>
          <li>AWS S3 to store pictures </li>
          <li>Stripe to accept generous donations </li>        
            </ul>

          I hope you enjoy watching my short demo video! If you feel up to it, feel free to make an account!
</h4>

      </div>
      <iframe className={projectStyles.youtubeVideo} width="560" height="315" src="https://www.youtube.com/embed/tbW37Elgj5g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>



    <div className={projectStyles.rightSide}>
   
    <div className={projectStyles.copy}>
        <h2>GROUP PROJECT</h2>
        <h4> PitchVivid is an application that allows hiring managers to view 30 second videos provided by potential applicants. Hiring managers can add, edit, or delete jobs. All applicants for each posting are viewable with their videos and resumes if they uploaded one. 
          <br />
          <br />
          We created this application using:
          <br />
          <br /> 
          <ul> 
          <li>React</li>
          <li> Heroku Database</li>
          <li>Node </li>
          <li>PostgreSQL to build the database </li>
          <li>Bcrypt to provide authentication </li>
          <li>Redux and Sessions to remember user and hiring manager data</li>
          <li>AWS S3 to store videos and resumes</li>
          <li>Web cam API</li>        
            </ul>

         
</h4>

      

      </div>
      <iframe className={projectStyles.youtubeVideo} width="560" height="315" src="https://www.youtube.com/embed/elYuKvfImXs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  </>

)

export default Projects
