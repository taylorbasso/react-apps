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
      <div className="ui column">
        <div className="ui fluid card">
          <div className="image">
            <img src={this.props.image} alt="National Park" onClick={() => this.props.callback(this.props.name)}/>
          </div>
          <div className="content">
            <a className="header" onClick={() => this.props.callback(this.props.name)}>{this.props.name}</a>
            <div className="meta">
              <span className="date">Est. {this.props.est}</span>
            </div>
            <div className="description">
              {this.props.description}
            </div>
          </div>
          <div className="extra content">
            <a href="/idk">
              <i className="user icon"></i>
              {this.props.webcam_count} Webcam(s)
            </a>
          </div>
        </div>
      </div>
      );
  }
}

export default NationalPark;
