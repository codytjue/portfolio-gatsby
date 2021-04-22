import React, { useState } from "react"
import chi1 from "../images/chi1.png"
import chi2 from "../images/chi2.png"

function Chi() {

  const [currentImage2, setCurrentImage2] = useState(chi1);

  const handleImageClick = () => {
    let image = document.getElementById("projectImage");
    image.classList.add("fadeInAnimation")
    if (currentImage2 === chi1) {
      setCurrentImage2(chi2)

    } else {
      setCurrentImage2(chi1)
    }
    setTimeout(()=>{image.classList.remove("fadeInAnimation")}, 1200)
  }


  return (
      <>
      <div className="projectImage">
        <img id="projectImage" src={currentImage2} width="500px" onClick={handleImageClick}></img>
      </div>
      <div className="bodyText">
        <span className="title">Chi Food Journal</span>
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

export default Chi