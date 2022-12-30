import React from 'react';

function Webcam(props) {

  return (
    <div key={props.webcam.title} className="ui fluid card">
      <div className="image">
        <img src={props.webcam.url} alt={props.webcam.title}/>
      </div>
      <div className="content">
        <div className="header">{props.webcam.title || "Unknown"}</div>
        {/*<div className="meta">*/}
        {/*  <span className="date">Meta</span>*/}
        {/*</div>*/}
        <div className="description">
          {props.webcam.description}
        </div>
      </div>
      <div className="extra content">
        <a href={props.webcam.url} target="_blank" rel="noreferrer">
          <i className="linkify icon"/>
          Webcam Link
        </a>
      </div>
    </div>
  )
}

export default Webcam;