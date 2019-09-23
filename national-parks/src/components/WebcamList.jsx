import React from 'react';
import Webcam from './Webcam';

class WebcamList extends React.Component {
  constructor(props) {
    super(props);

    console.log("The props:");
    console.log(this.props)
  }

  render() {
    return (
      <div className="ui cards national-parks fluid">
        <Webcam />
      </div>
    );
  }
}

export default WebcamList;