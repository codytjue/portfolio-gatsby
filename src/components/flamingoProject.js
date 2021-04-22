import React, { useState } from "react"
import flamingo1 from "../images/flamingo1.png"
import flamingo2 from "../images/flamingo2.png"

function Flamingo() {

  const [currentImage, setCurrentImage] = useState(flamingo1);

  const handleImageClick = () => {
    let image = document.getElementById("projectImage");
    image.classList.add("fadeInAnimation");
    if (currentImage === flamingo1) {
      setCurrentImage(flamingo2)

    } else {
      setCurrentImage(flamingo1)
    }
    setTimeout(()=>{image.classList.remove("fadeInAnimation")}, 1200)
  }


  return (
    <>
    <div className="projectImage">
      <img id="projectImage" src={currentImage} width="500px" onClick={handleImageClick}></img>
    </div>
    <div className="bodyText">
      <span className="title">Flamingo</span>
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

export default Flamingo