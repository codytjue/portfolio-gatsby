import React from "react"
import { Link } from "gatsby"

export default function Projects() {

  let array = [1, 2, 3, 4]

  return (
    <div id="projectsContainer">
      {array.map(number => {
        return <Link to="/projects/flamingo"><div className="projectThumbnail"></div></Link>
      })}
    </div>
  )
}