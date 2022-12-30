import React from 'react';

class NationalPark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      callback: props.callback
    };
  }

  render() {
    return (
      <div className="ui link fluid card national-park" onClick={() => this.state.callback(this.props.nationalPark.name, this.props.nationalPark.webcams)}>
        <div className="image">
          <img src={this.props.nationalPark.image} alt="National Park"/>
        </div>
        <div className="content">
          <div className="header"
             onClick={() => this.state.callback(this.props.nationalPark.name, this.props.nationalPark.webcams)}>{this.props.nationalPark.name}</div>
          <div className="meta">
            <span className="date">Est. {this.props.nationalPark.est}</span>
          </div>
          <div className="description">
            {this.props.nationalPark.description}
          </div>
        </div>
        <div className="extra content">
          <i className="camera icon"></i>
          {this.props.nationalPark.webcams.length} Webcam(s)
        </div>
      </div>
    );
  }
}

export default NationalPark;
