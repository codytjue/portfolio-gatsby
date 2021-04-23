import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import logoAnimation from "../images/logoAnimation.svg"
import blobs from "../images/blobsAnimated.svg"
import Helmet from "react-helmet"
import gitImage from "../images/github.svg"
import emailImage from "../images/email.svg"
import linkedinImage from "../images/linkedin.svg"

export default function Home() {


  useEffect(() => {
    document.body.style.backgroundImage = 'linear-gradient(142deg,#E8D7FF 8.01%, #D5CAFF 85.29%)';
    document.body.style.backgroundPosition = '0px 0px';
    document.body.style.backgroundSize  = "100%";
  })


  let handleClick = () => {
    document.getElementById('animation').id = "animation2";
    document.getElementById('ellipse').id = 'ellipse2';
    document.getElementById('landingContainer').style.cursor= 'default';
    setTimeout(() => {
      document.body.style.backgroundImage = 'url("../images/bgAnimation1.svg"), url("../images/bgAnimation2.svg"), radial-gradient(farthest-corner at -30px -30px, #6816A9, #30094F)';
  }, 1000)
    setTimeout(() => {navigate('/about');}, 1300)
  }



    return (
      <>
      <div id="landingContainer" onClick={handleClick} onKeyDown={handleClick} role="presentation">
         <Helmet>
            <title>Cody Jue</title>
        </Helmet>
        <img src={blobs} alt="Blobs" id="ellipse"></img>
        <img src={logoAnimation} alt="Logo" id="animation"></img>
      </div>
      <div id="mobileGreeting">
          <span>Mobile friendly version coming soon!</span>
          <br/><br/>
        <a href="mailto:codytjue@gmail.com"><img src={emailImage}></img></a>
           <a href="https://www.linkedin.com/in/codytjue/" target="_blank" rel="noopener noreferrer"><img src={linkedinImage}></img></a>
           <a href="https://github.com/codytjue" target="_blank" rel="noopener noreferrer"><img src={gitImage}></img></a>
           </div>
      </>
    )
  }