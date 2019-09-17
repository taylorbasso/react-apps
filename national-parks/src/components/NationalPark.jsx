import React from 'react';

class NationalPark extends React.Component {
  state = { name: "" }

  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src={this.props.image} alt="National Park"/>
        </div>
        <div className="content">
          <a className="header" href="/park">{this.props.name}</a>
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
      );
  }
}

export default NationalPark;
