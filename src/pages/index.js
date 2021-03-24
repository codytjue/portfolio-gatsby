import React, { useEffect } from "react"
import { navigate } from "gatsby"
import logoAnimation from "../images/logoAnimation.svg"
import egg from "../images/egg.svg"
import Helmet from "react-helmet"
import "@fontsource/blinker"

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
    setTimeout(() => {navigate('/about')}, 2000)
  }



    return (
      <div id="landingContainer" onClick={handleClick} onKeyDown={handleClick} role="presentation">
         <Helmet>
            <title>Cody Jue</title>
        </Helmet>
        <img src={egg} alt="Egg" id="ellipse"></img>
        <img src={logoAnimation} alt="Logo" id="animation"></img>
      </div>
    )
  }