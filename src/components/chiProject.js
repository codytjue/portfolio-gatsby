import React, { useState } from "react"
import chi1 from "../images/chi1.png"
import chi2 from "../images/chi2.png"

function Chi() {

  // const [currentImage2, setCurrentImage2] = useState(chi1);

  // const handleImageClick = () => {
  //   let image = document.getElementById("projectImage");
  //   image.classList.add("fadeInAnimation")
  //   if (currentImage2 === chi1) {
  //     setCurrentImage2(chi2)

  //   } else {
  //     setCurrentImage2(chi1)
  //   }
  //   setTimeout(()=>{image.classList.remove("fadeInAnimation")}, 1200)
  // }


  return (
      <>
      <div className="projectImage">
        <img id="projectImage" src={chi1} width="500px"></img>
      </div>
      <div className="bodyText">
        <span className="title">Chi Food Journal</span>
        <br/><br/>
        <span>Chi is a minimal diet tracking app built with the Nutrionix API. It allows for adding foods and meals, tracking macronutrients, and setting daily goals. </span>
        <br/><br/>
        <span className="bold">Built With:</span><span> React, Node.js, Express, Axios, MongoDB</span>
        <br/><br/>
        <br/>
        <a href="https://github.com/codytjue/chi-food-journal" target="_blank" rel="noopener noreferrer"><span className="githubButton">View on Github</span></a>
      </div>
      </>
  )
}

export default Chi