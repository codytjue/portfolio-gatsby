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
  const [isClickable, setClickable] = useState(true)
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
    setClickable(false);
    projectContainer2.classList.remove("hidden")
    projectContainer2.classList.add("slideNext")
    projectContainer.classList.add("slideNext2");
    nextProject();
    setTimeout(()=> {projectContainer2.classList.add("hidden");
      projectContainer2.classList.remove("slideNext");
      projectContainer.classList.remove("slideNext2");
      setClickable(true)}, 900)
  }

  const handleLastProject = () => {
    let projectContainer = document.getElementById("projectContainer");
    let projectContainer2 = document.getElementById("projectContainer2");
    setClickable(false)
    projectContainer2.classList.remove("hidden")
    projectContainer2.classList.add("slideBack")
    projectContainer.classList.add("slideBack2");
    lastProject();
    setTimeout(()=> {projectContainer2.classList.add("hidden");
      projectContainer2.classList.remove("slideBack");
      projectContainer.classList.remove("slideBack2");
      setClickable(true)}, 900)
  }

  return (
    <div id="projectsPageWrapper">
       <img src={backArrow} id="backArrow" width="30px" onClick={(isClickable)?handleLastProject : null}></img>
      <div id="testContainer">
        <div id="projectContainer">
          {currentProject}
        </div>
        <div id="projectContainer2">
          {exitingProject}
        </div>
        </div>
      <img src={forwardArrow} id="forwardArrow" width="30px" onClick={(isClickable)?handleNextProject : null}></img>
    </div>
  )
}