import React, { useState } from "react"
import fec1 from "../images/fec1.png"

function Fec() {

  // const handleImageClick = () => {
  //   let image = document.getElementById("projectImage");
  //   image.classList.add("fadeInAnimation");
  //   if (currentImage === flamingo1) {
  //     setCurrentImage(flamingo2)

  //   } else {
  //     setCurrentImage(flamingo1)
  //   }
  //   setTimeout(()=>{image.classList.remove("fadeInAnimation")}, 1200)
  // }


  return (
    <>
    <div className="projectImage">
      <img id="projectImage" src={fec1} width="500px"></img>
    </div>
    <div className="bodyText">
      <span className="title">Project Catwalk</span>
      <br/><br/>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod orci et arcu posuere, in venenatis orci placerat. Nullam ullamcorper vestibulum porta. Ut egestas ante vel arcu lacinia tristique. </span>
      <br/><br/>
      <span className="builtWith">Built With:</span><span> React, Node.js, Express, Axios, MongoDB</span>
      <br/><br/>
      <br/>
      <span className="githubButton">View on Github</span>
    </div>
    </>
  )
}

export default Fec;