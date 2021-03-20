import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import logoAnimation from "../images/logoAnimation.svg"
import egg from "../images/egg.svg"
import Layout from "../components/layout"
import Helmet from "react-helmet"

export default function Home() {


  useEffect(() => {
    document.body.style.backgroundImage = 'linear-gradient(142deg,#E8D7FF 8.01%, #D5CAFF 85.29%)'
  })

  let handleClick = () => {
    document.getElementById('animation').id = "animation2";
    document.getElementById('ellipse').id = 'ellipse2';
    document.getElementById('landingContainer').style.cursor= 'default';
    setTimeout(() => {document.body.style.backgroundImage = 'radial-gradient(farthest-corner at -30px -30px, #6816A9, #30094F)'}, 1000)
    setTimeout(() => {navigate('/about')}, 2700)
  }



    return (
      <div id="landingContainer" onClick={handleClick}>
         <Helmet>
            <title>Cody Jue</title>
        </Helmet>
        <img src={egg} alt="Egg" id="ellipse"></img>
        <img src={logoAnimation} alt="Logo" id="animation"></img>
      </div>
    )
  }