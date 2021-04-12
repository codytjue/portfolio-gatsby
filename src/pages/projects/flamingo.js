import React from "react";
import Slider from "react-animated-slider";
import 'react-animated-slider/build/horizontal.css';
import flamingo1 from "../../images/flamingo1.png"
import flamingo2 from "../../images/flamingo2.png"
import "@fontsource/roboto"

export default function Flamingo() {

  const slides = [
    { title: 'First item', description: flamingo1},
    { title: 'Second item', description: flamingo2},
    { title: 'Third item', description: 'Lorem ipsum'}
  ];

  return (
    <div id="projectContainer">
      <div id="slider">
        <Slider>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.description} height="100%"></img>
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
