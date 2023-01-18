import React from 'react';
import NationalParkList from './NationalParkList';
import WebcamList from "./WebcamList";
import RandomWebcam from "./RandomWebcam";
import Slideshow from "./Slideshow";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {webcams: [], random: false};
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

  randomSelectedCallback = () => {
    console.log("Random Selected");
    this.setState({random: true, slideshow: false, webcams: []})
  }

  slideshowSelectedCallback = () => {
    console.log("Slideshow Selected");
    this.setState({random: false, slideshow: true, webcams: []})
  }

  reset() {
    this.setState({webcams: [], slideshow: false, random: false});
  }

  render() {
    let component = <NationalParkList parkSelectedCallback={this.parkSelectedCallback}/>;
    if (this.state.webcams.length > 0) {
      console.log("WebcamsList is component");
      component = <WebcamList webcams={this.state.webcams}/>
    } else if (this.state.random === true) {
      console.log("Random is component");
      component = <RandomWebcam/>
    } else if (this.state.slideshow === true) {
      console.log("Slideshow is component");
      component = <Slideshow/>
    }
    return (
      <div className="ui container" style={{padding: "30px"}}>
        <h2 className="ui center aligned icon header">
          <i className="image outline icon"></i>
          <div className="content">
            National Park Webcams
            {/*<div className="sub header">Hello </div>*/}
          </div>
        </h2>
        <div className="ui center aligned" style={{marginBottom: "30px"}}>
          <button className="ui labeled icon primary button" onClick={() => this.reset()}>
            <i className="home icon"></i>
            Home
          </button>
          <button className="ui labeled icon button" onClick={() => this.randomSelectedCallback()}>
            <i className="image icon"></i>
            Random
          </button>
          <button className="ui labeled icon button" onClick={() => this.slideshowSelectedCallback()}>
            <i className="video icon"></i>
            Slideshow
          </button>
        </div>
        {component}
      </div>
    );
  }
}

export default App;
