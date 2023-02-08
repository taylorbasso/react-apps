import React from 'react';
import {getRandomWebcam} from "../webcamList";
import Webcam from "./Webcam";

export default function RandomWebcam(props) {
  let randomWebcam = getRandomWebcam();

  return (
    <div>
      <h2 className="ui center aligned header">
        {randomWebcam.parkName}
      </h2>
      <div className="ui cards national-parks fluid">
        <Webcam key={randomWebcam.title} webcam={randomWebcam}/>
      </div>
    </div>
  );
}