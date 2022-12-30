import NationalPark from "./NationalPark";

class ArchesNP extends NationalPark {

  constructor(props) {
    super(props);
    this.state.name="Arches"
    this.state.image="/arches.jpg"
    this.state.est="April 12, 1929"
    this.state.description="The park has over 2,000 natural stone arches, in addition to hundreds of soaring " +
      "pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations," +
      " refresh you with its trails, and inspire you with its sunsets."
    this.state.webcams = [
      {title: "Entrance", url: "https://www.nps.gov/webcams-arch/arch_traffic.jpg"}
    ]
  }
}

export default ArchesNP;