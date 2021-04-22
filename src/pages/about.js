import React from "react"
import aboutMePhoto from "../images/me_pinkpurple.jpg"

export default function About() {
  return (
    <div id="aboutContainer">
      <div id="projectContainer">
      <img src={aboutMePhoto} width="200px"/>
      <div id="aboutText">
      <span className="title">About Me</span>
      <br/><br/>
      <span className="aboutBodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod orci et arcu posuere, in venenatis orci placerat. Nullam ullamcorper vestibulum porta. Ut egestas ante vel arcu lacinia tristique. Curabitur nec euismod sem. Donec posuere purus sed eros consequat, sit amet ultricies diam venenatis. Maecenas id congue erat. Maecenas eget justo urna. Nulla dapibus at ipsum et imperdiet. Duis tincidunt sodales enim, eget convallis libero pretium et. Aliquam sagittis felis id vehicula sodales. Proin urna magna, porttitor quis leo sit amet, lacinia fringilla risus. Vestibulum eu nunc quis neque gravida facilisis ac non elit. Proin ac dapibus ipsum. Suspendisse eu ullamcorper nunc, non venenatis dolor. Sed vestibulum erat faucibus vehicula rutrum.</span>
      </div>
      </div>
    </div>
  )
}