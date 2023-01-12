import React from 'react';
import {getRandomWebcam} from "../webcamList";
import Webcam from "./Webcam";

function RandomWebcamSlideshow(props) {
  let randomWebcam = getRandomWebcam();

  return (
    <div>
      <h2 className="ui center aligned header">
        {randomWebcam.parkName} National Park
      </h2>
      <div className="ui cards national-parks fluid">
        <Webcam key={randomWebcam.title} webcam={randomWebcam}/>
      </div>
    </div>
  );
}

export default RandomWebcamSlideshow;