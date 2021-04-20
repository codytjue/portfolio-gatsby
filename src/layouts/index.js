import React from "react"
import logoAnimation from "../images/logoAnimation.svg"
import { Link, navigate } from "gatsby"
import blobs from "../images/blobsAnimated.svg"
import gitImage from "../images/github.svg"
import emailImage from "../images/email.svg"
import linkedinImage from "../images/linkedin.svg"
import resume from "../images/cody_jue_resume.pdf"

const Layout = ({ children, pageContext }) => {

  let handleClick = () => {
    document.getElementById('animation2').id = "animation";
    document.getElementById('testing').id = 'testingBack';
    document.getElementById('ellipse3').id = 'ellipse';

    setTimeout(() => {
      document.body.style.backgroundImage = 'linear-gradient(142deg,#E8D7FF 8.01%, #D5CAFF 85.29%)';
  }, 1000)
    setTimeout(() => {navigate('/')}, 2000)
  }



  if (pageContext.layout === "landing") {
    return (<>{children}</>)
  }

  return (
    <div id="mainLayout">
      <div id="animationContainer" onClick={handleClick} onKeyDown={handleClick}>
      </div>
        <img src={logoAnimation} id="animation2" alt=""></img>
        <img src={blobs} alt="Blobs" id="ellipse3"></img>
        <div id="testing">
        <div id="mainContainer">
         <div id="navBar">
           <div><Link to="/about">ABOUT</Link></div>
           <div><Link to="/projects/">PROJECTS</Link></div>
           <div><a href={resume} target="_blank" rel="noopener noreferrer">RESUME</a></div>
         </div>
         <div id="content">{children}</div>
         <div id="footer">
           <a href="mailto:codytjue@gmail.com"><img src={emailImage}></img></a>
           <a href="https://www.linkedin.com/in/codytjue/" target="_blank" rel="noopener noreferrer"><img src={linkedinImage}></img></a>
           <a href="https://github.com/codytjue" target="_blank" rel="noopener noreferrer"><img src={gitImage}></img></a>
         </div>
        </div>
        </div>
    </div>
  )
 }

 export default Layout
