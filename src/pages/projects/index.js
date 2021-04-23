import React, { useState } from "react"
import { Link } from "gatsby"
import backArrow from "../../images/backArrow.svg"
import forwardArrow from "../../images/forwardArrow.svg"
import Flamingo from "../../components/flamingoProject"
import Chi from "../../components/chiProject"
import Fec from "../../components/fecProject"

export default function Projects() {



  const projects = [<Flamingo/>, <Chi/>, <Fec/>]

  const [currentIndex, setIndex] = useState(0)
  const [exitingIndex, setExitIndex] = useState(0)
  let currentProject = projects[currentIndex];
  let exitingProject = projects[exitingIndex];


  const nextProject = () => {
    if (currentIndex === (projects.length - 1)) {
      setIndex(0);
      setTimeout(() => {setExitIndex(0)}, 800)
    } else {
      setIndex(currentIndex + 1)
      setTimeout(() => {setExitIndex(exitingIndex + 1)}, 800)
    }
  }

  const lastProject = () => {
    if (currentIndex === 0) {
      setIndex(projects.length - 1);
      setTimeout(() => {setExitIndex(projects.length - 1)}, 800)
    } else {
      setIndex(currentIndex - 1)
      setTimeout(() => {setExitIndex(exitingIndex - 1)}, 800)
    }
  }


  const handleNextProject = () => {
    let projectContainer = document.getElementById("projectContainer");
    let projectContainer2 = document.getElementById("projectContainer2");
    projectContainer2.classList.remove("hidden")
    projectContainer2.classList.add("slideNext")
    projectContainer.classList.add("slideNext2");
    nextProject();
    setTimeout(()=> {projectContainer2.classList.add("hidden");
      projectContainer2.classList.remove("slideNext");
      projectContainer.classList.remove("slideNext2");}, 900)
  }

  const handleLastProject = () => {
    // let projectContainer = document.getElementById("projectContainer");
    // let projectContainer2 = document.getElementById("projectContainer2");
    // // projectContainer.classList.add("fadeInAnimation");
    // projectContainer.classList.remove("slideNext2");
    // projectContainer.classList.remove("slideBack2");
    // projectContainer.classList.add("slideBack");
    // setTimeout(()=> {
    //   projectContainer.classList.remove("slideBack");
    //   lastProject();
    //   projectContainer.classList.add("slideBack2");
    // }, 500)
    let projectContainer = document.getElementById("projectContainer");
    let projectContainer2 = document.getElementById("projectContainer2");
    projectContainer2.classList.remove("hidden")
    projectContainer2.classList.add("slideBack")
    projectContainer.classList.add("slideBack2");
    nextProject();
    setTimeout(()=> {projectContainer2.classList.add("hidden");
      projectContainer2.classList.remove("slideBack");
      projectContainer.classList.remove("slideBack2");}, 900)
  }

  return (
    <div id="projectsPageWrapper">
      <div id="projectContainer">
        {currentProject}
      </div>
      <div id="projectContainer2">
        {exitingProject}
      </div>
      <img src={backArrow} id="backArrow" width="30px" onClick={handleLastProject}></img>
      <img src={forwardArrow} id="forwardArrow" width="30px" onClick={handleNextProject}></img>
    </div>
  )
}