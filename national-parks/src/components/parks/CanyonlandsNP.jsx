import NationalPark from "./NationalPark";

class CanyonlandsNP extends NationalPark {

  constructor(props) {
    super(props);
    this.state.name="Canyonlands"
    this.state.image="/canyonlands.jpg"
    this.state.est="September 12, 1964"
    this.state.description="Canyonlands invites you to explore a wilderness of countless canyons and fantastically " +
      "formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: " +
      "Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert " +
      "atmosphere, but each offers different opportunities for sightseeing and adventure."
    this.state.webcams = [
      {title: "Island in the Sky", url: "https://www.nps.gov/webcams-arch/arch_traffic.jpg"}
    ]
  }
}

export default CanyonlandsNP;