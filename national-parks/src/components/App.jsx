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

  parkSelectedCallback = (name, webcams) => {
    console.log(name + " park was clicked");
    this.setState({nationalParkList: false});
    this.setState({webcams: webcams})
  };

  reset() {
    console.log("Resetting");
    this.setState({nationalParkList: true});
    this.setState({webcams: []});
  }

  render() {
    if (this.state.nationalParkList) {
      return (
        <div className="ui container" style={{padding: "30px"}}>
          <button className="ui primary button" style={{marginBottom: "30px"}} onClick={() => this.setState({nationalParkList: true})}>Home</button>
          <NationalParkList parkSelectedCallback={this.parkSelectedCallback}/>
        </div>
      );
    } else {
      return (
        <div className="ui container" style={{padding: "30px"}}>
          <button className="ui primary button" style={{marginBottom: "30px"}} onClick={() => this.setState({nationalParkList: true})}>Home</button>
          <WebcamList webcams={this.state.webcams}/>
        </div>
      );
    }

  }
}

export default App;
