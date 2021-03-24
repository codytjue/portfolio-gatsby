import React from "react"
import logoAnimation from "../images/logoAnimation.svg"
import { Link } from "gatsby"

const Layout = ({ children, pageContext }) => {

  if (pageContext.layout === "landing") {
    return (<>{children}</>)
  }

  return (
    <div id="testPage">
        <img src={logoAnimation} id="animation2" alt=""></img>
        <div id="testing">
        <div id="mainContainer">
         <div id="navBar">
           <div><Link to="/about">ABOUT</Link></div>
           <div><Link to="/projects">PROJECTS</Link></div>
           <div><Link to="/contact">CONTACT</Link></div>
         </div>
         <div id="content">{children}</div>
        </div>
        </div>
    </div>
  )
 }

 export default Layout
