import React from "react"
import aboutMePhoto from "../images/me_pinkpurple.jpg"

export default function About() {
  return (
    <div id="aboutContainer">
      <div id="container">
      <img src={aboutMePhoto} width="200px"/>
      <div id="aboutText">
      {/* <span className="title">About</span> */}
      {/* <br/><br/> */}
      <span className="aboutBodyText">
        <span id="emph">My name is <b>Cody</b> and I'm a New York-based <b>full-stack software engineer</b>.</span>
        <br/><br/>
        Ever since personalizing my Neopets profile page with basic HTML and CSS when I was 10 years old, I've been passionate about creating engaging and interesting digital spaces and experiences.
        <br/><br/>
        I'm currently working as a Resident for the Hack Reactor Software Engineering Immersive program, providing technical guidance and instruction to students pertaining to Javascript and CS fundamentals, but I'm exploring full-time front-end and full-stack engineering opportunities.
        <br/><br/>
        I'm a reserved Leo, a prolific omnivore, and a newly initiated homebody, splitting my free time equally between reading and playing video games (I'm currently reading <b>Severance by Ling Ma</b> and currently playing <b>Resident Evil: Biohazard</b>).
      <br/><br/>
      </span>
      </div>
      </div>
    </div>
  )
}