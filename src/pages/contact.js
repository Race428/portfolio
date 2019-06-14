import React from "react"
import contactStyles from '../components/CSS/contact.module.css'
import gmail from '../images/gmail.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import cell from '../images/cell.png'

import SEO from "../components/seo"


const Contact = () => (
  <>


    <div className={contactStyles.container}>

     
      <h1>Connect with me!</h1>
      
      <div className={contactStyles.contactinfo}>
        <div className={contactStyles.contactLogo}>
      <a href='mailto:raceacheson@gmail.com' >
      <img src={gmail} alt='email' />
      <p>Raceacheson@gmail.com</p>
      </a>
      </div>
      
      
      
      <div className={contactStyles.contactLogo}>
      <a href='https://www.github.com/Race428' target="_blank" >
      <img src={github} alt='github' />
      <p>github.com/Race428</p>
      </a>
      </div>
      
      
      <div className={contactStyles.contactLogo}>
      <a href='https://www.linkedin.com/in/race/' target="_blank" >
      <img src={linkedin} alt='linkedin' />
      <p>linkedin.com/in/race/</p>
      </a>
      </div>
      
      
      <div className={contactStyles.contactLogo} id ={contactStyles.phone}>
      <a href='tel:8012287585'>
      <img src={cell} alt='cellphone' />
      <p>801-228-7585</p>
      </a>
      </div>
      </div>
     
  




    </div>
  </>

)

export default Contact
