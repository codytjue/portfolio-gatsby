import React, { useEffect } from "react"
import logoAnimation from "../images/logoAnimation.svg"
import bg1 from "../images/bgAnimation1.svg"
import bg2 from "../images/bgAnimation2.svg"
import { Link } from "gatsby"

export default ({ children, pageContext }) => {

  if (pageContext.layout === "landing") {
    return (<>{children}</>)
  }

  return (
    <div id="testPage">
        <img src={logoAnimation} id="animation2"></img>
        <img src={bg1} id="bgAnimation1"></img>
        <img src={bg2} id="bgAnimation2"></img>
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
