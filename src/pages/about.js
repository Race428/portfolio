import React from 'react'
import aboutStyles from '../components/CSS/about.module.css'
import Race from '../images/Race.jpg'

const About = () => (
    <>
<div className={aboutStyles.photoName}>
    <img id ={aboutStyles.race}src={Race} alt ='race' /> 
    <h1>Race Acheson</h1>
    <div className={aboutStyles.description}>
    <article>
       My name is Race. I am 23 years old. I have been an Entrepreneur since I was 8 years old mowing lawns. I have been thinking up business solutions since I was in the single digits. After educating myself and making my own sites, I am on the search for the next big opportunity to make a difference!
    </article>
    
    </div>
    </div>
    
    </>
)

export default About