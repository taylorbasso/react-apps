import React from 'react';
import NationalParkList from './NationalParkList';
import WebcamList from "./WebcamList";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {nationalParkList: true, webcams: []};
  }

  componentDidMount() {
    console.log("Component Mounted")
  }

  componentDidUpdate() {
    console.log("Component Did Update")
  }

  webcamMap(name) {
    switch (name) {
      case "Arches":
        return [{name: "Entrance", url: "https://www.nps.gov/webcams-arch/arch_traffic.jpg"}];
      default:
        console.log("Error finding matching webcams for National park")
        return [];
    }
  }

  parkSelectedCallback = (name) => {
    console.log(name + " park was clicked");
    this.setState({nationalParkList: false});
    this.setState( {webcams: this.webcamMap(name)});
  };

  render() {
    if (this.state.nationalParkList) {
      return (
        <div className="ui container">
          <NationalParkList parkSelectedCallback={this.parkSelectedCallback}/>
        </div>
      );
    } else {
      return (
        <div className="ui container">
          <WebcamList webcams={this.state.webcams}/>
        </div>
      );
    }

  }
}

export default App;
