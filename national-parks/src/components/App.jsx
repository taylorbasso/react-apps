import React from 'react';
import NationalParkList from './NationalParkList';
import WebcamList from "./WebcamList";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {webcams: []};
  }

  componentDidMount() {
    console.log("Component Mounted")
  }

  componentDidUpdate() {
    console.log("Component Did Update")
  }

  parkSelectedCallback = (name, webcams) => {
    console.log(name + " park was clicked");
    this.setState({webcams: webcams})
  };

  reset() {
    this.setState({webcams: []});
  }

  render() {
    let component = <NationalParkList parkSelectedCallback={this.parkSelectedCallback}/>;
    if (this.state.webcams.length > 0) {
      component = <WebcamList webcams={this.state.webcams}/>
    }
    return (
      <div className="ui container" style={{padding: "30px"}}>
        <h2 className="ui center aligned icon header">
          <i className="image outline icon"></i>
          <div className="content">
            National Park Webcams
            <div className="sub header">Hello </div>
          </div>
        </h2>
        <div className="ui inverted menu" style={{marginBottom: "30px"}}>
          <div className="ui container">
            <a className="active header item" href="/" onClick={() => this.reset()}>
              <i className="home icon"></i> Home
            </a>
            <a className="item" href="/slideshow">
              <i className="caret square right icon"></i> Slideshow
            </a>
            <a className="item" href="/random">
              <i className="random icon"></i> Random
            </a>
          </div>
        </div>
        {component}
      </div>
    );
  }
}

export default App;
