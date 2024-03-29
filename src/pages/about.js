import React from 'react'
import aboutStyles from '../components/CSS/about.module.css'
import Race from '../images/Race.jpg'
import Header from '../components/header'
const About = () => (
    <>
    <Header/> 
<div className={aboutStyles.photoName} >
    <div id ='4'></div>
    <img className={aboutStyles.race} src={Race} alt ='race' /> 
    <h1>Race Acheson</h1>
    <div className={aboutStyles.description}>
    <article>
       My name is Race. I am 23 years old. I have been an Entrepreneur since I was 8 years old mowing lawns. I have been thinking up business solutions since I was in the single digits. After educating myself and making my own sites, I am on the search for the next big opportunity to make a difference!
    </article>

<div className={aboutStyles.resume}>
    <a href={`https://s3-us-west-1.amazonaws.com/tender-connections/Race+Dev+Resume.pdf`} target="_blank" >
        <h2>CLICK HERE TO SEE MY RESUME!</h2>
        </a>
        </div>
    
    </div>
    </div>
    
    </>
)

export default About