import React, { useState } from "react"
import { Link } from "gatsby"
import backArrow from "../../images/backArrow.svg"
import forwardArrow from "../../images/forwardArrow.svg"
import Flamingo from "../../components/flamingoProject"
import Chi from "../../components/chiProject"

export default function Projects() {

  const [currentProject, setCurrentProject] = useState(<Flamingo/>)
  const [nextProject, setNextProject] = useState(<Flamingo/>)
  const [lastProject, setLastProject] = useState(<Flamingo/>)

  const handleNextProject = () => {
    let projectContainer = document.getElementById("projectContainer");
    // projectContainer.classList.add("fadeInAnimation");
    projectContainer.classList.remove("slideNext2");
    projectContainer.classList.remove("slideBack2");
    projectContainer.classList.add("slideNext");
    setTimeout(()=> {
      projectContainer.classList.remove("slideNext");
      setCurrentProject(<Chi/>)
      projectContainer.classList.add("slideNext2");
    }, 500)
  }

  const handleLastProject = () => {
    let projectContainer = document.getElementById("projectContainer");
    // projectContainer.classList.add("fadeInAnimation");
    projectContainer.classList.remove("slideNext2");
    projectContainer.classList.remove("slideBack2");
    projectContainer.classList.add("slideBack");
    setTimeout(()=> {
      projectContainer.classList.remove("slideBack");
      setCurrentProject(<Chi/>)
      projectContainer.classList.add("slideBack2");
    }, 500)
  }

  return (
    <div id="projectsPageWrapper">
      <div id="projectContainer">
        {currentProject}
      </div>
      <img src={backArrow} id="backArrow" width="30px" onClick={handleLastProject}></img>
      <img src={forwardArrow} id="forwardArrow" width="30px" onClick={handleNextProject}></img>
    </div>
  )
}