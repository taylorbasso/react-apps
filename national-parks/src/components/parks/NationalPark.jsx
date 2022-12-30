import React from 'react';

class NationalPark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      callback: props.callback,
      name: "default nameee"
    };
  }

  render() {
    return (
      <div className="ui column">
        <div className="ui fluid card">
          <div className="image">
            <img src={this.state.image} alt="National Park" onClick={() => this.props.callback(this.state.name, this.state.webcams)}/>
          </div>
          <div className="content">
            <a className="header" onClick={() => this.props.callback(this.state.name, this.state.webcams)}>{this.state.name}</a>
            <div className="meta">
              <span className="date">Est. {this.state.est}</span>
            </div>
            <div className="description">
              {this.state.description}
            </div>
          </div>
          <div className="extra content">
            <a href="/idk">
              <i className="user icon"></i>
              {this.state.webcam_count} Webcam(s)
            </a>
          </div>
        </div>
      </div>
      );
  }
}

export default NationalPark;
