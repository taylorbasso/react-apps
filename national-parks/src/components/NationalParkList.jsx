import React from 'react';
import ArchesNP from "./parks/ArchesNP";
import CanyonlandsNP from "./parks/CanyonlandsNP";
import GlacierNP from "./parks/GlacierNP";

class NationalParkList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {parkSelectedCallback: props.parkSelectedCallback}
  }

  render() {
    return (
      <div className="ui three column grid cards national-parks">
        <ArchesNP callback={this.state.parkSelectedCallback}/>
        <CanyonlandsNP callback={this.state.parkSelectedCallback}/>
        <GlacierNP callback={this.state.parkSelectedCallback}/>
      </div>
    );
  }
}

export default NationalParkList