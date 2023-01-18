import {useEffect, useState} from "react";
import RandomWebcam from "./RandomWebcam";

export default function Slideshow(props) {
  const init = new Date();
  const [date, setDate] = useState(init);
  const refreshMilliseconds = 5000;

  // TODO this better
  const tenSecondTick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerID = setInterval(() => tenSecondTick(), refreshMilliseconds)
    return () => {
      clearInterval(timerID)
    }
  }, [])

  return (
    <div>
      {/*{date.toLocaleTimeString()}*/}
      {/*<h4 className="ui center aligned header">Refreshes every {refreshMilliseconds/1000} seconds.</h4>*/}
      <RandomWebcam/>
    </div>
  )
}