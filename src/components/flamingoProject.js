import React, { useState } from "react"
import flamingo1 from "../images/flamingo1.png"
import flamingo2 from "../images/flamingo2.png"

function Flamingo() {

  // const [currentImage, setCurrentImage] = useState(flamingo1);

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
      <img id="projectImage" src={flamingo1} width="500px"></img>
    </div>
    <div className="bodyText">
      <span className="title">Flamingo</span>
      <br/><br/>
      <span>Flamingo is a hotel property management software which was built with a team of 10 other engineers, featuring room, task, and employee management. I acted as the UI Lead and worked on the front end, creating detailed wireframes for the entire application and building out a small reusable component library.</span>
      <br/><br/>
      <span className="bold">Built With:</span><span> Figma, React (Hooks, Context), Styled Components, Axios</span>
      <br/><br/>
      <br/>
      <a href="https://github.com/hrnyc34-flaminGo/flaminGo-frontEnd" target="_blank" rel="noopener noreferrer"><span className="githubButton">See More on Github</span></a>
    </div>
    </>
  )
}

export default Flamingo