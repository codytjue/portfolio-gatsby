import React from "react"
import logoAnimation from "../images/logoAnimation.svg"
import { Link, navigate } from "gatsby"
import egg from "../images/egg.svg"


const Layout = ({ children, pageContext }) => {

  let handleClick = () => {
    document.getElementById('animation2').id = "animation";
    document.getElementById('testing').id = 'testingBack';
    document.getElementById('ellipse3').id = 'ellipse';

    setTimeout(() => {
      document.body.style.backgroundImage = 'linear-gradient(142deg,#E8D7FF 8.01%, #D5CAFF 85.29%)';
  }, 850)
    setTimeout(() => {navigate('/')}, 2000)
  }



  if (pageContext.layout === "landing") {
    return (<>{children}</>)
  }

  return (
    <div id="mainLayout">
        <img src={logoAnimation} id="animation2" alt="" onClick={handleClick}></img>
        <img src={egg} alt="Egg" id="ellipse3"></img>
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
