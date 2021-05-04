import React from "react"
import aboutMePhoto from "../images/me_pinkpurple.jpg"

export default function About() {
  return (
    <div id="aboutContainer">
      <div id="container">
      <img src={aboutMePhoto} width="200px"/>
      <div id="aboutText">
      <span className="title">About Me</span>
      <br/><br/>
      <span className="aboutBodyText">
        My name is <b>Cody</b> and I'm a New York-based <b>full-stack software engineer</b> with a creative eye and a passion for building efficient, polished, and immersive digital experiences.
        <br/><br/>
        I'm currently working as a Resident for the Hack Reactor Software Engineering Immersive program, providing technical guidance and instruction to students pertaining to Javascript and CS fundamentals, but I'm exploring full-time front-end and full-stack engineer opportunities. <b>If you'd like to work together, I'd love to talk to you!</b>
        <br/><br/>
        I'm a reserved Leo, a prolific omnivore , and a newly initiated homebody, splitting my free time equally between reading and playing video games (I'm currently reading <b>Severance by Ling Ma</b> and currently playing <b>Resident Evil: Biohazard</b>).
      <br/><br/>
      </span>
      </div>
      </div>
    </div>
  )
}