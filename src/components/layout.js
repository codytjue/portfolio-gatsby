import React, { useEffect } from "react"
import logoAnimation from "../images/logoAnimation.svg"
import bg1 from "../images/bgAnimation1.svg"
import bg2 from "../images/bgAnimation2.svg"
import { Link } from "gatsby"

const Layout = ({ children }) => {


  return (
    <div id="testPage">
        <img src={logoAnimation} id="animation2"></img>
        <div id="bgAnimation12"></div>
        <div id="bgAnimation22"></div>
        <div id="mainContainer">
         <div id="navBar">
           <div><Link to="/about">ABOUT</Link></div>
           <div><Link to="/projects">PROJECTS</Link></div>
           <div>CONTACT</div>
         </div>
         <div id="content">{children}</div>
        </div>
    </div>
  )
 }

 export default Layout;