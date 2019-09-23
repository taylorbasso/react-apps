import React from 'react';
import NationalPark from './NationalPark';

class NationalParkList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { parkSelectedCallback: props.parkSelectedCallback }
  }

  render() {
    return (
      <div className="ui three column grid cards national-parks">
        <NationalPark
          callback={this.state.parkSelectedCallback}
          name="Arches"
          image="/arches.jpg"
          est="April 12, 1929"
          description="The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets."
          webcam_count="3"/>
        <NationalPark
          callback={this.state.parkSelectedCallback}
          name="Biscayne"
          image="/biscayne.jpg"
          est="June 28, 1980"
          description="Within sight of downtown Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Here too is evidence of 10,000 years of human history, from pirates and shipwrecks to pineapple farmers and presidents. Outdoors enthusiasts can boat, snorkel, camp, watch wildlife…or simply relax in a rocking chair gazing out over the bay."
          webcam_count="1"/>
        <NationalPark
          callback={this.state.parkSelectedCallback}
          name="Canyonlands"
          image="/canyonlands.jpg"
          est="September 12, 1964"
          description="Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure."
          webcam_count="2"/>
      </div>
    );
  }
}

export default NationalParkList