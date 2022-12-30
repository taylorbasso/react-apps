import React from 'react';

class Webcam extends React.Component {

  render() {
    return (
      <div key={this.props.webcam.title} className="ui fluid card">
        <div className="image">
          <img src={this.props.webcam.url} alt={this.props.webcam.title}/>
        </div>
        <div className="content">
          <div className="header" >{this.props.webcam.title || "Unknown"}</div>
          {/*<div className="meta">*/}
          {/*  <span className="date">Meta</span>*/}
          {/*</div>*/}
          <div className="description">
            {this.props.webcam.description}
          </div>
        </div>
        <div className="extra content">
          <a href={this.props.webcam.url} target="_blank" rel="noreferrer">
            <i className="linkify icon"/>
            Webcam Link
          </a>
        </div>
      </div>
    )
  }
}

export default Webcam;