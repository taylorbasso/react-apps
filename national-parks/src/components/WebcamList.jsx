import React from 'react';
import Webcam from './Webcam';

class WebcamList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      webcams: props.webcams
    }
  }

  render() {
    return (
      <div className="ui cards national-parks fluid">
        {this.props.webcams.map((webcam) => (
          <Webcam key={webcam.title} webcam={webcam}/>
        ))}
      </div>
    );
  }
}

export default WebcamList;