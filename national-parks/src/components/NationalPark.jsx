import React from 'react';

function NationalPark(props) {
  return (
    <div className="ui link fluid card national-park"
         onClick={() => props.callback(props.nationalPark.name, props.nationalPark.webcams)}>
      <div className="image">
        <img src={props.nationalPark.image} alt="National Park"/>
      </div>
      <div className="content">
        <div className="header"
             onClick={() => props.callback(props.nationalPark.name, props.nationalPark.webcams)}>{props.nationalPark.name}</div>
        <div className="meta">
          <span className="state">{props.nationalPark.state}</span>
          <span className="date"></span>
        </div>
        <div className="meta">
          <span className="stateDate">Est. {props.nationalPark.est}</span>
          <span className="date"></span>
        </div>
        <div className="description">
          {props.nationalPark.description}
        </div>
      </div>
      <div className="extra content">
        <i className="camera icon"></i>
        {props.nationalPark.webcams.length} Webcam(s)
      </div>
    </div>
  );
}

export default NationalPark;
