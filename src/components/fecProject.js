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
    <div id="innerProject">
    <div className="projectImage">
      <img id="projectImage" src={fec1} width="500px"></img>
    </div>
    <div className="bodyText">
      <span className="title">Project Catwalk</span>
      <br/><br/>
      <span>A redesign of the product detail page of an e-commerce clothing store, this project was built using agile practices with a team of 3 other developers. I focused on the Questions & Answers module, which features search filtering, conditional rendering, and modal forms.</span>
      <br/><br/>
      <span className="bold">Built With:</span><span> React, Redux, Axios, Materials UI</span>
      <br/><br/>
      <br/>
      <a href="https://github.com/hrnyc34-FEC-Financier/fec" target="_blank" rel="noopener noreferrer"><span className="githubButton">See More on Github</span></a>
    </div>
    </div>
  )
}

export default Fec;