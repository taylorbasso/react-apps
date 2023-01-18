import React from 'react';
import NationalPark from "./NationalPark";
import {getNationalParkWebcamData} from "../webcamList";

class NationalParkList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {parkSelectedCallback: props.parkSelectedCallback}
  }

  render() {
    return (<div className="ui three column grid cards national-parks">
      {getNationalParkWebcamData()
        .map((nationalPark) => (
          <NationalPark key={nationalPark.name} nationalPark={nationalPark}
                        callback={this.state.parkSelectedCallback}/>)
        )}
    </div>);
  }
}

export default NationalParkList;