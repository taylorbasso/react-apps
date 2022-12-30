import React from 'react';

class Webcam extends React.Component {

  render() {
    return (
      <div className="ui fluid card">
        <div className="image">
          <img src={this.props.url} alt={this.props.title}/>
        </div>
        <div className="content">
          <a className="header" href="/park">Webby</a>
          <div className="meta">
            <span className="date">Meta</span>
          </div>
          <div className="description">
            Description
          </div>
        </div>
        <div className="extra content">
          <a href="/idk">
            <i className="user icon" />
            Hi Webcam(s)
          </a>
        </div>
      </div>
    );
  }

};

export default Webcam;