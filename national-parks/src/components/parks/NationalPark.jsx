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
      <div className="ui link fluid card national-park" onClick={() => this.props.callback(this.state.name, this.state.webcams)}>
        <div className="image">
          <img src={this.state.image} alt="National Park"/>
        </div>
        <div className="content">
          <div className="header"
             onClick={() => this.props.callback(this.state.name, this.state.webcams)}>{this.state.name}</div>
          <div className="meta">
            <span className="date">Est. {this.state.est}</span>
          </div>
          <div className="description">
            {this.state.description}
          </div>
        </div>
        <div className="extra content">
          <i className="camera icon"></i>
          {this.state.webcams.length} Webcam(s)
        </div>
      </div>
    );
  }
}

export default NationalPark;
