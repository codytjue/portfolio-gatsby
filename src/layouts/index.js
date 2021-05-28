import React, { useState } from "react"
import logoAnimation from "../images/logoAnimation.svg"
import { Link, navigate } from "gatsby"
import blobs from "../images/blobsAnimated.svg"
import gitImage from "../images/github.svg"
import emailImage from "../images/email.svg"
import linkedinImage from "../images/linkedin.svg"
import resume from "../images/cody_jue_resume.pdf"
import styled from "styled-components"
import styles from "../styles/style-variables.js"

const Layout = ({ children, pageContext }) => {


  let handleClick = () => {
    document.getElementById('animation2').id = "animation";
    document.getElementById('testing').id = 'testingBack';
    document.getElementById('ellipse3').id = 'ellipse';
    setTimeout(() => {
      document.body.style.backgroundImage = 'linear-gradient(142deg,#E8D7FF 8.01%, #D5CAFF 85.29%)';
  }, 1000)
    setTimeout(() => {navigate('/');}, 2000)
  }

  const NavBar = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    color: ${styles.pink};
    animation-name: bgFadeIn
    animation-duration: 2s;
    z-index: 2;
    font-family: Blinker;
    font-size: 28px;

    @media screen and (max-width: 1200px) {
      color: red
    }
  `

  const NavIcon = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    animation-name: bgFadeIn;
    animation-duration: 2s;
    z-index: 2;
    font-family: Blinker;
    font-size: 28px;
    color: ${styles.pink};
  `

  const Spacer = styled.div`
    margin: 0 20px 0 20px;
  `



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
           <Spacer>
              <Link to="/about">ABOUT</Link>
           </Spacer>
           <Spacer><Link to="/projects/">PROJECTS</Link></Spacer>
           <Spacer><a href={resume} target="_blank" rel="noopener noreferrer">RESUME</a></Spacer>
         </div>
         <NavIcon>
         </NavIcon>
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
