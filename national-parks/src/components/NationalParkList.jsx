import React from 'react';
import Webcam from "./Webcam";
import NationalPark from "./parks/NationalPark";

class NationalParkList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {parkSelectedCallback: props.parkSelectedCallback}
  }

  getNationalParks() {
    return [
      {
        name: "Arches",
        image: "/arches.jpg",
        est: "April 12, 1929",
        description: "The park has over 2,000 natural stone arches, in addition to hundreds of soaring " +
          "pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations," +
          " refresh you with its trails, and inspire you with its sunsets.",
        state: "Utah",
        webcams: [{
          title: "Entrance",
          url: "https://www.nps.gov/webcams-arch/arch_traffic.jpg",
          description: "View the entrance road as seen from the Arches Entrance Station. This view looks toward US 191."
        }]
      },
      {
        name: "Canyonlands",
        image: "/canyonlands.jpg",
        est: "September 12, 1964",
        description: "Canyonlands invites you to explore a wilderness of countless canyons and fantastically " +
          "formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: " +
          "Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert " +
          "atmosphere, but each offers different opportunities for sightseeing and adventure.",
        state: "Utah",
        webcams: [{
          title: "Island in the Sky",
          url: "http://eldesierto.org/Isky.jpg",
          description: "View from Island in the Sky Visitor Center looking east. This webcam is maintained offsite by the US Geological Survey as part of a dust monitoring project."
        }]
      },
      {
        name: "Glacier",
        image: "/glacier.jpg",
        est: "May 11, 1910",
        description: "A showcase of melting glaciers, alpine meadows, carved valleys, and spectacular lakes." +
          " With over 700 miles of trails, Glacier is a paradise for adventurous visitors seeking wilderness steeped in" +
          " human history. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road.",
        state: "Montana",
        webcams: [
          {
            title: "Apgar Mountain",
            url: "https://www.nps.gov/webcams-glac/ApgarLookout-01.jpg",
            description: "This view to the northeast from the summit of Apgar Mountain provides a spectacular view of Lake McDonald and the mountains in the distance. To the left of the lake are Stanton Mountain and Mt. Vaught (Stanton just in front of Vaught) and then just to the right the Garden Wall. The Continental Divide follows the crest of the Garden Wall. Continuing to the right are Mt. Cannon and Mt. Brown. The last mountain clearly visible to the right is Edwards Mountain. Apgar Lookout is at the summit and one of the more popular hikes on the west side."
          },
          {
            title: "Lake McDonald - 1",
            url: "https://www.nps.gov/webcams-glac/LakeMcDonald1.jpg",
            description: "To many visitors to the park, this view is their first introduction to the spectacular scenery of Glacier National Park. This iconic view from Apgar, at the foot of Lake McDonald, really shows what Glacier is all about...big glacially carved lakes, vast wild views of the high peaks along the Continental Divide, and the ever-changing forests that blanket much of the lower elevations. It's no wonder that for many people when they think of Glacier, they think of this view."
          },
          {
            title: "Lake McDonald - 2",
            url: "https://www.nps.gov/webcams-glac/lakemcdonaldptz.jpg",
            description: "This camera is one of the newer models that allow us to zoom in and pan around the scene. Expect to see different views occasionally as we aim it at different parts of the Lake McDonald Valley."
          },
          {
            title: "Apgar Village",
            url: "https://www.nps.gov/webcams-glac/ApgarVillage.jpg",
            description: "The village of Apgar is the main hub of activity (on the west side of the park) throughout the summer. The park's largest campground is located here as are gift shops, a restaurant, lodging facilities, and boat and recreational equipment rentals."
          },
          {
            title: "Apgar Visitor Center Plaza",
            url: "https://www.nps.gov/webcams-glac/ApgarVisitorCenter.jpg",
            description: "Throughout the summer this is the primary information stop for visitors entering the park at West Glacier. The visitor center is closed during winter but there are informational displays and publications available in the plaza."
          },
          {
            title: "Middle Fork of the Flathead River",
            url: "https://www.nps.gov/webcams-glac/MiddleForkBridge.jpg",
            description: "The Middle Fork of the Flathead River forms the southwest border of Glacier National Park. This view, from near Park Headquarters, shows the river as it flows under the West Glacier bridge. At night some of the lights of West Glacier may be visible. During the summer, watch for rafters. Several commercial rafting businesses use this section of river. In the winter, the only activity along the river might be the occasional coyote or deer or a really cold kayaker."
          },
          {
            title: "St. Mary Visitor Center",
            url: "https://www.nps.gov/webcams-glac/StMaryPTZ.jpg",
            description: "The view from this webcam can be changed by park staff and occasionally we will move it and provide a different aspect of the view from the St. Mary Visitor Center. We hope to be able to provide close views of the elk in the fall and winter, tighter views of the mountains, and occasionally people at the Entrance Station and in the Visitor Center."
          },
          {
            title: "Many Glacier - 1",
            url: "https://www.nps.gov/webcams-glac/ManyGlacier.jpg",
            description: "Many Glacier is often referred to as the Heart of the Park. This spectacular view is very similar to the Two Medicine Valley in that there is a dominant peak, in this case Grinnell Point, separating two valleys. To the right is the Swiftcurrent Valley and just up and over the wall in the background is Granite Park. To the left is the valley that leads up to Grinnell Glacier, one of the most popular trails in the park. The Many Glacier Hotel sits at the edge of Swiftcurrent Lake and is an outstanding example of the type of architecture that was so common in the western national parks in the early 1900. A walk through it's soaring lobby is a must see when you visit Many Glacier."
          },
          {
            title: "Park Headquarters",
            url: "https://www.nps.gov/webcams-glac/Headquarters.jpg",
            description: "This was the first webcam view that Glacier National Park offered. Originally it was only going to be a test until a better location was found, but it turns out that this view has a large following. Watch for the occasional lunchtime crowd at the picnic table or our resident deer wandering about. Some years in the early summer beargrass blooms dot the forest."
          },
          {
            title: "West Entrance",
            url: "https://www.nps.gov/webcams-glac/WestEntrance.jpg",
            description: "The West Entrance to the park is a good indicator of how busy things may be at locations inside the park. During July and August expect to see a long string of cars as they line up to purchase their entrance passes. We sell several different passes including a 7-day pass for $35.00, an annual pass for $70.00, and the America the Beautiful Pass for $80.00. The America the Beautiful Pass will allow entrance into any national park in the country and is good for some services on National Forests and at other Federal agencies."
          },
          {
            title: "St. Mary Visitor Center - Dusty Star Observatory Sky Cam",
            url: "https://www.nps.gov/webcams-glac/stmaryallsky-resize.jpg",
            description: "Imagine laying on your back in the St. Mary valley and looking straight up at the sky. That is your view from this webcam. On a clear night the image of the sky is spectacular, so visit after dark for the best experience. The tan shape at the top is the Dusty Star Observatory. The other buildings in the area include the St. Mary Visitor Center and the St. Mary entrance station. The center of the image looks straight up at the sky. If the circular image is a clock, the Dusty star Observatory is to the east at 12'clock, north is at 3 o'clock, west is at 6 o'clock. and south is at 9 o'clock."
          },
          {
            title: "Many Glacier - 2",
            url: "https://www.nps.gov/common/commonspot/customcf/webcam/inactive_webcam.png",
            description: "Across Swiftcurrent Lake rises Mt. Wilbur. To the left of the summit you can see the Continental Divide and Swiftcurrent Peak. To the right you can just barely see part of the cirque that contains Iceberg Lake. Iceberg Lake is one of the most popular hikes in the park. It is about 10 miles round trip with an elevation gain of around 1,200 feet. It is one of the easier of the all-day hikes in this valley. Wide open areas afford expansive views as you hike up to the lake. As with all hikes be on the watch for signs of bears. This trail may be closed when you arrive due to bear activity."
          },
          {
            title: "Logan Pass - 1",
            url: "https://www.nps.gov/common/commonspot/customcf/webcam/inactive_webcam.png",
            description: "Located at the highest point along the Going-to-the-Sun Road, the Logan Pass area includes the Logan Pass Visitor Center, trailheads for the Highline and Hidden Lake trails, restrooms, potable water, and shuttle service. This view focuses on the Logan Pass parking lot with Mt. Pollack in the background."
          },
          {
            title: "Two Medicine",
            url: "https://www.nps.gov/common/commonspot/customcf/webcam/inactive_webcam.png",
            description: "This view from near the campground in Two Medicine shows how dominant Sinopah Mountain is on the landscape there. To the left is Painted Tepee Mountain and to the right is Mount Helen. Once a primary stop on all train and horseback trips in the park, the opening of the Going-to-the-Sun Road in the 1930s shifted visitation to other parts of the park. While not as busy as some locations today, it is still crowded and visitors are advised to arrive early to find parking."
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="ui three column grid cards national-parks">
        {/*<ArchesNP callback={this.state.parkSelectedCallback}/>*/}
        {/*<CanyonlandsNP callback={this.state.parkSelectedCallback}/>*/}
        {/*<GlacierNP callback={this.state.parkSelectedCallback}/>*/}
        {this.getNationalParks().map((nationalPark) => (
          <NationalPark key={nationalPark.name} nationalPark={nationalPark} callback={this.state.parkSelectedCallback}/>
        ))}
      </div>
    );
  }
}

export default NationalParkList