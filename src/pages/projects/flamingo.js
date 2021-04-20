import React from "react";
import Slider from "react-animated-slider"
import 'react-animated-slider/build/horizontal.css'
import flamingo1 from "../../images/flamingo1.png"
import flamingo2 from "../../images/flamingo2.png"
import "@fontsource/roboto"
import backArrow from "../../images/backArrow.svg"
import forwardArrow from "../../images/forwardArrow.svg"

export default function Flamingo() {

  const slides = [
    { title: 'First item', description: flamingo1},
    { title: 'Second item', description: flamingo2},
    { title: 'Third item', description: 'Lorem ipsum'}
  ];

  const previous = <img src={backArrow} width="32px" padding="0 200px 0 0"></img>
  const next = <img src={forwardArrow} width="32px"></img>

  return (
    <div id="projectContainer">
      <div id="slider">
        <Slider previousButton={previous} nextButton={next} classNames={{
  slider: 'slider',
  previousButton: 'previousButton',
  nextButton: 'nextButton',
  buttonDisabled: 'disabled',
  track: 'track',
  slide: 'slide',
  hidden: 'hidden',
  previous: 'previous',
  current: 'current',
  next: 'next',
  animateIn: 'animateIn',
  animateOut: 'animateOut',
}}>
          {slides.map((slide, index) => (
            <div key={index} className="slidesContainer">
              <img src={slide.description} width="450px" onClick={()=> console.log("test")}></img>
            </div>
          ))}
        </Slider>
      </div>
      <div id="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod orci et arcu posuere, in venenatis orci placerat. Nullam ullamcorper vestibulum porta. Ut egestas ante vel arcu lacinia tristique. Curabitur nec euismod sem. Donec posuere purus sed eros consequat, sit amet ultricies diam venenatis. Maecenas id congue erat. Maecenas eget justo urna. Nulla dapibus at ipsum et imperdiet. Duis tincidunt sodales enim, eget convallis libero pretium et. Aliquam sagittis felis id vehicula sodales. Proin urna magna, porttitor quis leo sit amet, lacinia fringilla risus. Vestibulum eu nunc quis neque gravida facilisis ac non elit. Proin ac dapibus ipsum. Suspendisse eu ullamcorper nunc, non venenatis dolor. Sed vestibulum erat faucibus vehicula rutrum.
      </div>
    </div>
  )
}
