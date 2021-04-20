import React from "react"
import { Link } from "gatsby"
import fecThumb from "../../images/fecThumb.png"
import chiThumb from "../../images/chiThumb.png"
import backArrow from "../../images/backArrow.svg"
import forwardArrow from "../../images/forwardArrow.svg"
import Flamingo from "../../components/flamingoProject"

export default function Projects() {


  return (
    <div id="projectsContainer">
      <img src={backArrow} id="backArrow"></img>
      <Flamingo/>
      <img src={forwardArrow} id="forwardArrow"></img>
    </div>
  )
}