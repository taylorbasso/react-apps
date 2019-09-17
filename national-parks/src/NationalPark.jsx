import React from 'react';

class NationalPark extends React.Component {

  render() {
    return (
      <div className="ui card">
        <div className="image">
          <img src="arches.jpg" alt="National Park"/>
        </div>
        <div className="content">
          <a className="header" href="/park">Utah</a>
          <div className="meta">
            <span className="date">Joined in 2013</span>
          </div>
          <div className="description">
            Kristy is an art director living in New York.
          </div>
        </div>
        <div className="extra content">
          <a href="/idk">
            <i className="user icon"></i>
            22 Friends
          </a>
        </div>
      </div>
      );
  }
}

export default NationalPark;
