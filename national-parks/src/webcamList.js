import {shuffleArray} from "./util";

export const getRandomWebcam = () => {
  // first get all the webcams into a flattened array
  let array = getNationalParkWebcamData()
    .map((np) =>
      np.webcams
        .map((webcam) => ({
          parkName: np.name, // putting this in here so that we can show the np name on the random webcam
          title: webcam.title,
          url: webcam.url,
          description: webcam.description
        }))
    ).flat();

  // now shuffle it and return the first entry after shuffling
  return shuffleArray(array)[0];
}

export const getNationalParkWebcamData = () => {
  return [{
    name: "Acadia National Park",
    image: "/acadia.jpeg",
    est: "February 26, 1919",
    description: "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 4 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
    state: "Maine",
    webcams: [{
      title: "McFarland Hill Air Quality",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/acadlarge.jpg",
      description: "View from McFarland Hill looking northeast."
    }]
  }, {
    name: "Arches National Park",
    image: "/arches.jpeg",
    est: "April 12, 1929",
    description: "The park has over 2,000 natural stone arches, in addition to hundreds of soaring pinnacles, massive fins and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.",
    state: "Utah",
    webcams: [{
      title: "Entrance",
      url: "https://www.nps.gov/webcams-arch/arch_traffic.jpg",
      description: "View the entrance road as seen from the Arches Entrance Station. This view looks toward US 191."
    }]
  }, {
    name: "Big Bend National Park",
    image: "/big-bend.jpeg",
    est: "June 12, 1944",
    description: "There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend.",
    state: "Texas",
    webcams: [{
      title: "Live View From Panther Junction",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/bibelarge.jpg?1661979054980&1672441128798",
      description: "Big Bend is famous for wide expansive panoramas. The view from Park Headquarters is always changing, and always spectacular. The view is to the Northwest, and updated every 15 minutes. On a clear day, distant peaks over 80 miles away are clearly visible."
    }]
  }, {
    name: "Canyonlands National Park",
    image: "canyonlands.jpeg",
    est: "September 12, 1964",
    description: "Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure.",
    state: "Utah",
    webcams: [{
      title: "Island in the Sky",
      url: "http://eldesierto.org/Isky.jpg",
      description: "View from Island in the Sky Visitor Center looking east. This webcam is maintained offsite by the US Geological Survey as part of a dust monitoring project."
    }]
  }, {
    name: "Crater Lake National Park",
    image: "crater-lake.jpeg",
    est: "May 22, 1902",
    description: "Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity—fed by rain and snow, it’s the deepest lake in the USA and one of the most pristine on Earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range.",
    state: "Oregon",
    webcams: [{
      title: "Crater Lake",
      url: "https://www.nps.gov/webcams-crla/camerasinnott.jpg",
      description: "Is Crater Lake visible today? Sometimes the lake is hidden by clouds, especially in the winter. This view looks north across the lake from the Sinnott Overlook at Rim Village (elevation 7,100 feet). On a clear day, it takes in Wizard Island, Llao Rock, and Mount Thielsen."
    }, {
      title: "Annie Spring Entrance Station",
      url: "https://www.nps.gov/webcams-crla/camera0.jpg",
      description: "Curious about road conditions? This webcam can help you determine if the park's roads are icy. It looks south along Munson Valley Road from the Annie Spring Entrance Station (elevation 6,000 feet). The silver bar on the left is a flag pole."
    }, {
      title: "Steel Visitor Center",
      url: "https://www.nps.gov/webcams-crla/cameraHQ0.jpg",
      description: "The Steel Visitor Center at Park Headquarters (elevation 6,450 feet) is currently closed for renovation. (Normally, it's open every day of the year except Christmas.) This view is useful in showing the amount of snow currently on the ground in the park. It can be 10 to 15 feet deep in the late winter and early spring."
    }]
  }, {
    name: "Denali National Park",
    image: "denali.jpeg",
    est: "February 26, 1917",
    description: "Denali is six million acres of wild land, bisected by one ribbon of road. Travelers along it see the relatively low-elevation taiga forest give way to high alpine tundra and snowy mountains, culminating in North America's tallest peak, 20,310' Denali. Wild animals large and small roam un-fenced lands, living as they have for ages. Solitude, tranquility and wilderness await.",
    state: "Alaska",
    webcams: [{
      title: "Alaska Railroad Depot",
      url: "https://www.nps.gov/webcams-dena/train.jpg",
      description: "This view from high above the Denali Visitor Center is oriented to the southeast, across the park boundary in the middle distance to the Yanert River Valley beyond. In winter, this expanse is where the sun first emerges and lingers low over the horizon."
    }, {
      title: "Wonder Lake",
      description: "Park researchers studying air quality operate a visibility webcam looking toward Denali from Wonder Lake, about 85 miles from the park entrance. The webcam archives high resolution photos for visibility documentation, and runs on solar power. Because of this power source, the camera is summer-only.",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/dena.jpg"
    }]
  }, {
    name: "Glacier National Park",
    image: "/glacier.jpeg",
    est: "May 11, 1910",
    description: "A showcase of melting glaciers, alpine meadows, carved valleys, and spectacular lakes. With over 700 miles of trails, Glacier is a paradise for adventurous visitors seeking wilderness steeped in human history. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road.",
    state: "Montana",
    webcams: [{
      title: "Apgar Mountain",
      url: "https://www.nps.gov/webcams-glac/ApgarLookout-01.jpg",
      description: "This view to the northeast from the summit of Apgar Mountain provides a spectacular view of Lake McDonald and the mountains in the distance. To the left of the lake are Stanton Mountain and Mt. Vaught (Stanton just in front of Vaught) and then just to the right the Garden Wall. The Continental Divide follows the crest of the Garden Wall. Continuing to the right are Mt. Cannon and Mt. Brown. The last mountain clearly visible to the right is Edwards Mountain. Apgar Lookout is at the summit and one of the more popular hikes on the west side."
    }, {
      title: "Lake McDonald - 1",
      url: "https://www.nps.gov/webcams-glac/LakeMcDonald1.jpg",
      description: "To many visitors to the park, this view is their first introduction to the spectacular scenery of Glacier National Park. This iconic view from Apgar, at the foot of Lake McDonald, really shows what Glacier is all about...big glacially carved lakes, vast wild views of the high peaks along the Continental Divide, and the ever-changing forests that blanket much of the lower elevations. It's no wonder that for many people when they think of Glacier, they think of this view."
    }, {
      title: "Lake McDonald - 2",
      url: "https://www.nps.gov/webcams-glac/lakemcdonaldptz.jpg",
      description: "This camera is one of the newer models that allow us to zoom in and pan around the scene. Expect to see different views occasionally as we aim it at different parts of the Lake McDonald Valley."
    }, {
      title: "Apgar Village",
      url: "https://www.nps.gov/webcams-glac/ApgarVillage.jpg",
      description: "The village of Apgar is the main hub of activity (on the west side of the park) throughout the summer. The park's largest campground is located here as are gift shops, a restaurant, lodging facilities, and boat and recreational equipment rentals."
    }, {
      title: "Apgar Visitor Center Plaza",
      url: "https://www.nps.gov/webcams-glac/ApgarVisitorCenter.jpg",
      description: "Throughout the summer this is the primary information stop for visitors entering the park at West Glacier. The visitor center is closed during winter but there are informational displays and publications available in the plaza."
    }, {
      title: "Middle Fork of the Flathead River",
      url: "https://www.nps.gov/webcams-glac/MiddleForkBridge.jpg",
      description: "The Middle Fork of the Flathead River forms the southwest border of Glacier National Park. This view, from near Park Headquarters, shows the river as it flows under the West Glacier bridge. At night some of the lights of West Glacier may be visible. During the summer, watch for rafters. Several commercial rafting businesses use this section of river. In the winter, the only activity along the river might be the occasional coyote or deer or a really cold kayaker."
    }, {
      title: "St. Mary Visitor Center",
      url: "https://www.nps.gov/webcams-glac/StMaryPTZ.jpg",
      description: "The view from this webcam can be changed by park staff and occasionally we will move it and provide a different aspect of the view from the St. Mary Visitor Center. We hope to be able to provide close views of the elk in the fall and winter, tighter views of the mountains, and occasionally people at the Entrance Station and in the Visitor Center."
    }, {
      title: "Many Glacier - 1",
      url: "https://www.nps.gov/webcams-glac/ManyGlacier.jpg",
      description: "Many Glacier is often referred to as the Heart of the Park. This spectacular view is very similar to the Two Medicine Valley in that there is a dominant peak, in this case Grinnell Point, separating two valleys. To the right is the Swiftcurrent Valley and just up and over the wall in the background is Granite Park. To the left is the valley that leads up to Grinnell Glacier, one of the most popular trails in the park. The Many Glacier Hotel sits at the edge of Swiftcurrent Lake and is an outstanding example of the type of architecture that was so common in the western national parks in the early 1900. A walk through it's soaring lobby is a must see when you visit Many Glacier."
    }, {
      title: "Park Headquarters",
      url: "https://www.nps.gov/webcams-glac/Headquarters.jpg",
      description: "This was the first webcam view that Glacier National Park offered. Originally it was only going to be a test until a better location was found, but it turns out that this view has a large following. Watch for the occasional lunchtime crowd at the picnic table or our resident deer wandering about. Some years in the early summer beargrass blooms dot the forest."
    }, {
      title: "West Entrance",
      url: "https://www.nps.gov/webcams-glac/WestEntrance.jpg",
      description: "The West Entrance to the park is a good indicator of how busy things may be at locations inside the park. During July and August expect to see a long string of cars as they line up to purchase their entrance passes. We sell several different passes including a 7-day pass for $35.00, an annual pass for $70.00, and the America the Beautiful Pass for $80.00. The America the Beautiful Pass will allow entrance into any national park in the country and is good for some services on National Forests and at other Federal agencies."
    }, {
      title: "St. Mary Visitor Center - Dusty Star Observatory Sky Cam",
      url: "https://www.nps.gov/webcams-glac/stmaryallsky-resize.jpg",
      description: "Imagine laying on your back in the St. Mary valley and looking straight up at the sky. That is your view from this webcam. On a clear night the image of the sky is spectacular, so visit after dark for the best experience. The tan shape at the top is the Dusty Star Observatory. The other buildings in the area include the St. Mary Visitor Center and the St. Mary entrance station. The center of the image looks straight up at the sky. If the circular image is a clock, the Dusty star Observatory is to the east at 12'clock, north is at 3 o'clock, west is at 6 o'clock. and south is at 9 o'clock."
    }, {
      title: "Many Glacier - 2",
      url: "https://www.nps.gov/common/commonspot/customcf/webcam/inactive_webcam.png",
      description: "Across Swiftcurrent Lake rises Mt. Wilbur. To the left of the summit you can see the Continental Divide and Swiftcurrent Peak. To the right you can just barely see part of the cirque that contains Iceberg Lake. Iceberg Lake is one of the most popular hikes in the park. It is about 10 miles round trip with an elevation gain of around 1,200 feet. It is one of the easier of the all-day hikes in this valley. Wide open areas afford expansive views as you hike up to the lake. As with all hikes be on the watch for signs of bears. This trail may be closed when you arrive due to bear activity."
    }, {
      title: "Logan Pass - 1",
      url: "https://www.nps.gov/common/commonspot/customcf/webcam/inactive_webcam.png",
      description: "Located at the highest point along the Going-to-the-Sun Road, the Logan Pass area includes the Logan Pass Visitor Center, trailheads for the Highline and Hidden Lake trails, restrooms, potable water, and shuttle service. This view focuses on the Logan Pass parking lot with Mt. Pollack in the background."
    }, {
      title: "Two Medicine",
      url: "https://www.nps.gov/common/commonspot/customcf/webcam/inactive_webcam.png",
      description: "This view from near the campground in Two Medicine shows how dominant Sinopah Mountain is on the landscape there. To the left is Painted Tepee Mountain and to the right is Mount Helen. Once a primary stop on all train and horseback trips in the park, the opening of the Going-to-the-Sun Road in the 1930s shifted visitation to other parts of the park. While not as busy as some locations today, it is still crowded and visitors are advised to arrive early to find parking."
    }]
  }, {
    name: "Glacier Bay National Park",
    image: "glacier-bay.jpeg",
    est: "December 2, 1980",
    description: "Covering 3.3 million acres of rugged mountains, dynamic glaciers, temperate rainforest, wild coastlines and deep sheltered fjords, Glacier Bay National Park is a highlight of Alaska's Inside Passage and part of a 25-million acre World Heritage Site—one of the world’s largest international protected areas. From sea to summit, Glacier Bay offers limitless opportunities for adventure and inspiration.",
    state: "Alaska",
    webcams: [{
      title: "Bartlett Cove Lagoon and Fairweather Range",
      url: "https://www.nps.gov/webcams-glba/BartlettLagoon.jpg",
      description: "Located adjacent to park headquarters, this serene location hosts a variety of wildlife. Watch for river otters, harbor seals, waterfowl, moose, black bears, and an endless cycle of tides. On clear days, summits of the the Fairweather Range are on spectacular display. The scenery changes by the minute ... click this image for a live view!"
    }, {
      title: "Lower Glacier Bay",
      url: "https://www.nps.gov/webcams-glba/LowerBay.jpg",
      description: "Two hundred fifty years ago this entire area was covered with ice.  Now it’s home to sea otters, humpback whales and orcas.  Occasional ships enter Glacier Bay, rounding Point Carolus from Icy Strait; park visitors wander the shoreline, checking out tidepools at Halibut Point.  Weather patterns over the Bay change by the minute … click this image to see a live view!"
    }, {
      title: "Bartlett Cove Public Dock",
      url: "https://www.nps.gov/webcams-glba/BartlettDock.jpg",
      description: "The public-use dock in Glacier Bay National Park is a hub of activity. Sailboats, kayaks, park boats, large tour vessels, and smaller charter fishing boats come and go throughout the summer months. On a clear day the peaks of Excursion Ridge are visible. The activity changes by the minute ... click the image to see the action live!"
    }, {
      title: "Bartlett Cove Dock and Tlingit Trail",
      url: "https://www.nps.gov/webcams-glba/TlingitTrail.jpg",
      description: "The Tlingit Trail follows the shoreline of Bartlett Cove from the Huna Tribal House to the Visitor Information Station and the public-use dock.  Interpretive signs explain Tlingit culture and common native plants.  A variety of vessels from around the world dock here, including an occasional floatplane.  On a clear day the high peaks of the Beartrack Mountains can be seen rising above the forested Beardslee Islands in the distance."
    }]
  }, {
    name: "Grand Canyon National Park",
    image: "grand-canyon.jpeg",
    est: "February 26, 1919",
    description: "Grand Canyon National Park, in Northern Arizona, encompasses 278 miles (447 km) of the Colorado River and adjacent uplands. Located on ancestral homeland of 11 Associated Tribes, Grand Canyon is one of the most spectacular examples of erosion anywhere in the world—unmatched in the incomparable vistas it offers visitors from the rim.",
    state: "Arizona",
    webcams: [{
      title: "Yavapai Point — Looking NW",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/grca.jpg",
      description: "The view is from Yavapai Point on the South Rim of the park. The view refreshes every 15 minutes. Grand Canyon National Park's Air Quality Webcam offers a window into the current sights, weather, air quality and seasonal changes that the park is experiencing."
    }, {
      title: "South Entrance Station",
      url: "https://www.nps.gov/webcams-grca/camera0.jpg",
      description: "To help time your South Rim arrival, monitor the South Entrance Station Webcam. During busy weekends, there can be long lines and up to two hour wait times between 10 am - 5 pm. This view refreshes every minute. The entrance station is about 1.6 miles (2.5 km) north of the gateway town of Tusayan, AZ."
    }, {
      title: "Live View from Kolb Studio",
      url: "https://s3.us-west-2.amazonaws.com/public.pixelcaster.com/snapshots/grandcanyon-2/latest.jpg",
      description: "In this north-facing view, the Battleship is in the center, and Havasupai Gardens (formerly known as Indian Garden) is visible - lower right, 3000 feet (915 m) below. Kolb Studio was the family home and photography studio of the Kolb Brothers, pioneer photographers at Grand Canyon. Verify that the time and date of the picture is current (upper left in image) Camera is hosted by Grand Canyon Conservancy."
    }, {
      title: "Live View - Bright Angel Trail",
      url: "https://s3.us-west-2.amazonaws.com/public.pixelcaster.com/snapshots/grandcanyon-1/latest.jpg?1672443158156",
      description: "Bright Angel Trail starts into the canyon from Kolb Studio in Grand Canyon Village. For more than 60 years, mule trips descending into the canyon would pose here for group photos. Bright Angel Trail is the park’s most popular hiking trail. Verify that the time and date of the picture is current (upper left in the image) Camera is hosted by Grand Canyon Conservancy."
    }]
  }, {
    name: "Grand Teton National Park",
    image: "grand-teton.jpeg",
    est: "February 26, 1929",
    description: "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands as a monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River, and enjoy the serenity of this remarkable place.",
    state: "Wyoming",
    webcams: [{
      title: "NPS Air Resources - Grand Teton National Park",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/grte.jpg",
      description: "View the Teton Range from the east side of Grand Teton National Park. The air quality station includes a webcam and other instruments that measure ozone and weather data. You can also get an estimate of how far you can see based on air quality!"
    }]
  }, {
    name: "Great Smoky Mountains National Park",
    image: "great-smoky.jpeg",
    est: "June 15, 1934",
    description: "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park.",
    state: "Tennessee",
    webcams: [{
      title: "Look Rock", url: "https://www.nps.gov/featurecontent/ard/webcams/images/grsm.jpg", description: ""
    }, {
      title: "LeConte Creek", url: "https://phenocam.nau.edu/data/latest/NEON.D07.LECO.DP1.20002.jpg"
    }, {
      title: "Twin Creeks", url: "https://phenocam.nau.edu/data/latest/NEON.D07.GRSM.DP1.00033.jpg"
    }, {
      title: "Purchase Knob", url: "https://www.nps.gov/featurecontent/ard/webcams/images/grpk.jpg"
    }, {
      title: "Newfound Gap", url: "https://www.air-resource.net/GRSMNFGap/gsng.jpg"
    }, {
      title: "Clingmans Dome", url: "https://www.nps.gov/featurecontent/ard/webcams/images/grcd.jpg"
    }]
  }, {
    name: "Guadalupe Mountains National Park",
    image: "guadalupe.jpeg",
    est: "October 15, 1966",
    description: "Come experience mountains and canyons, desert and dunes, night skies and spectacular vistas within a place unlike any other. Guadalupe Mountains National Park protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, an environmentally diverse collection of flora and fauna, and the stories of lives shaped through conflict, cooperation and survival.",
    state: "Texas",
    webcams: [{
      title: "Pine Springs Canyon View",
      url: "https://www.nps.gov/webcams-gumo/gumo1.jpg",
      description: "View looking toward the west into Pine Springs Canyon."
    }, {
      title: "El Capitan View",
      url: "https://www.nps.gov/webcams-gumo/gumo2.jpg",
      description: "View from the Pine Springs area towards the southwest and the profile of El Capitan."
    }, {
      title: "Dell City View",
      url: "https://www.nps.gov/webcams-gumo/gumo3.jpg",
      description: "View looking east from Dell City to the western escarpment of the Guadalupe Mountains."
    }]
  }, {
    name: "Haleakala National Park",
    image: "haleakala.jpeg",
    est: "July 1, 1961",
    description: "This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry.",
    state: "Hawaii",
    webcams: [{
      title: "Live Haleakalā Crater Cam",
      url: "https://www.nps.gov/webcams-hale/HaleSummitCamCrater.jpg",
      description: "Check out the latest viewing conditions of Haleakalā Crater via our webcam at Puʻuʻulaʻula located at the summit."
    }]
  }, {
    name: "Hawai‘i Volcanoes National Park",
    image: "hawaii-volcanoes.jpeg",
    est: "August 1, 1916",
    description: "Hawai‘i Volcanoes National Park protects some of the most unique geological, biological, and cherished cultural landscapes in the world. Extending from sea level to 13,680 feet, the park encompasses the summits of two of the world's most active volcanoes - Kīlauea and Mauna Loa - and is a designated International Biosphere Reserve and UNESCO World Heritage Site.",
    state: "Hawaii",
    webcams: [{
      title: "West vent in Halemaʻumaʻu and lava lake",
      url: "https://volcanoes.usgs.gov/observatories/hvo/cams/V1cam/images/M.jpg",
      description: "Live view of the west vent in Halemaʻumaʻu and the lava lake, from the northwest rim of the caldera, looking south."
    }, {
      title: "Halemaʻumaʻu and down-dropped caldera floor",
      url: "https://volcanoes.usgs.gov/observatories/hvo/cams/KWcam/images/M.jpg",
      description: "Live Panorama of Halemaʻumaʻu and down-dropped caldera floor from the west rim of the summit caldera, looking east."
    }, {
      title: "Maunaulu Cam",
      url: "https://volcanoes.usgs.gov/observatories/hvo/cams/MUcam/images/M.jpg",
      description: "Live Panorama of Maunaulu Cam"
    }, {
      title: "Puʻuʻōʻō West Flank from Puʻuʻōʻō",
      url: "https://volcanoes.usgs.gov/observatories/hvo/cams/PWcam/images/M.jpg",
      description: "This image is from a research camera positioned on the northwest flank of Puʻuʻōʻō, looking southwest. On the morning of May 24, 2016, this camera was rotated to be pointed northeast to follow a new breakout on the east flank of Puʻuʻōʻō."
    }, {
      title: "Mauna Loa - Fissure 3 eruption, Northeast Rift Zone",
      url: "https://volcanoes.usgs.gov/cams/M5cam/images/M.jpg",
      description: "Live Image of fissure 3 erupting on the Northeast Rift Zone of Mauna Loa volcano."
    }, {
      title: "Mauna Loa's Summit and Northeast Rift Zone from Mauna Kea",
      url: "https://volcanoes.usgs.gov/cams/MK2cam/images/M.jpg",
      description: "Live Image of Mauna Loa's Summit and Northeast Rift Zone from Mauna Kea"
    }, {
      title: "Mokuʻāweoweo Caldera",
      url: "https://volcanoes.usgs.gov/observatories/hvo/cams/MLcam/images/M.jpg",
      description: "This image is from a temporary research camera positioned on the north rim of Mokuʻāweoweo, the summit caldera of Mauna Loa volcano by the USGS Hawaiian Volcano Observatory. If you look carefully around early morning or late evening, you may see a few thermal areas emitting steam."
    }, {
      title: "Mauna Loa's Summit and Northeast Rift Zone from Mauna Kea",
      url: "https://volcanoes.usgs.gov/observatories/hvo/cams/MKcam/images/M.jpg",
      description: "Live Image of Mauna Loa's Summit and Northeast Rift Zone from Mauna Kea."
    }, {
      title: "The Upper Part of Mauna Loa's Southwest Rift Zone",
      url: "https://volcanoes.usgs.gov/observatories/hvo/cams/M3cam/images/M.jpg",
      description: "This image is from a research camera positioned on a cone in Mauna Loa's Southwest Rift Zone in Hawaiʻi Volcanoes National Park. The camera looks northeast (upslope), focusing on the upper part of the Southwest Rift Zone. The upper flank of Mauna Loa forms the skyline."
    }, {
      title: "The Middle Part of Mauna Loa's Southwest Rift Zone",
      url: "https://volcanoes.usgs.gov/observatories/hvo/cams/M2cam/images/M.jpg",
      description: "This image is from a research camera positioned on a cone in Mauna Loa's Southwest Rift Zone in Hawaiʻi Volcanoes National Park. The camera looks northeast (upslope), focusing on the middle part of the Southwest Rift Zone. The volcano's summit is at upper right."
    }]
  }, {
    name: "Isle Royale National Park",
    image: "isle-royale.jpeg",
    est: "April 3, 1940",
    description: "Explore a rugged, isolated island far from our connected communities. Isle Royale offers adventures for backpackers, hikers, boaters, paddlers, and divers. Cross Lake Superior and make a commitment: Become a part of this island, and let it become a part of you. Find peace and refuge in island wilderness – because Isle Royale, in turn, finds refuge in us. Help Isle Royale stay wild.",
    state: "Michigan",
    webcams: [{
      title: "Greenstone Ridge Webcam",
      url: "https://www.nps.gov/webcams-isro/GreenstoneRidgeSW.jpg",
      description: "From one of the highest Isle Royale peaks at 1133 feet above sea level (roughly 530 feet above Lake Superior), the Greenstone Ridge Webcam at the peak of Mount Ojibway gazes across the spine of the Greenstone Ridge from the fire tower. It captures a southwest vantage point, a swath from Moskey Basin on the left to Sargent Lake on the right. The webcam is solar powered and communicates multiple times per day, year-round, when power and communications infrastructure allows."
    }, {
      title: "Mott Island Dock Webcam",
      url: "https://www.nps.gov/webcams-isro/MottMain.jpg",
      description: "Mott Island, Isle Royale National Park's summer headquarters, is the nucleus of operations on the island. It is a barrier island located on the south side of Rock Harbor Channel. The webcam is active on real-time intervals during the summer months when power is available to it, and communicating multiple times per day during the winter when solar power allows."
    }, {
      title: "Windigo Webcam",
      url: "https://www.nps.gov/webcams-isro/WashingtonHarbor.jpg",
      description: "Perched atop the Windigo Visitor Center, the Windigo Webcam offers a sweeping view of Washington Harbor. You might find a moose swimming or foraging through these sheltered Lake Superior waters, or catch a colorful sunset in all its brilliance on a late summer night. The webcam is active only during the summer months when power is available to it (typically from the beginning of May until late September)."
    }, {
      title: "Rock Harbor Webcam",
      url: "https://www.nps.gov/webcams-isro/tobin.jpg",
      description: "Overlooking the Visitor Center and RANGER III dock at Snug Harbor, this camera view provides a vantage point to view the various small islands scattered about the Rock Harbor channel. On a clear day, the water tower at Mott Island is visible and the heights of Mount Saginaw tower in the background. The webcam is active only during the summer months when power is available to it (typically from the beginning of May until late September)."
    }, {
      title: "Tobin Harbor Webcam",
      url: "https://www.nps.gov/webcams-isro/tobinseaplanelz.jpg",
      description: "Tobin Harbor is located on the northeast end of Isle Royale, near Rock Harbor. In the early 20th century, it was a popular summer haven for vacationers. Visitors today enjoy the peaceful paddling and boating opportunities it offers. The webcam is active only during the summer months when power is available to it (typically from the beginning of May until late September)."
    }]
  }, {
    name: "Joshua Tree National Park",
    image: "joshua-tree.jpeg",
    est: "October 31, 1994",
    description: "Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California.",
    state: "California",
    webcams: [{
      title: "Belle Mountain Webcam",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/jotr.jpg",
      description: "The view from atop Belle Mountain looking Southeast."
    }]
  }, {
    name: "Sequoia and Kings Canyon National Park",
    image: "sequoia-kings.jpeg",
    est: "March 4, 1940",
    description: "Huge mountains, rugged foothills, deep canyons, vast caverns, and the world’s largest trees exemplify the diversity of landscapes, life, and beauty here. Explore these pages to learn about the plants and animals here and the threats they face. Our ancient giant sequoias may seem invincible, but they, too are vulnerable.",
    state: "California",
    webcams: [{
      title: "Giant Forest",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/seki.jpg",
      description: "This webcam looks west from the edge of the Giant Forest. Part of a network of air-quality-monitoring sites, it often shows effects of air pollution such as visibility impairment."
    }]
  }, {
    name: "Lassen Volcanic National Park",
    image: "lassen.jpeg",
    est: "August 9, 1916",
    description: "Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land.",
    state: "California",
    webcams: [{
      title: "Kohm Yah-mah-nee Visitor Center Webcam",
      url: "https://www.nps.gov/webcams-lavo/kyvc_webcam1.jpg",
      description: "This is the view looking north from the Kohm Yah-mah-nee Visitor Center at Lassen Volcanic National Park. The peak to the left is Mt. Diller and Pilot Pinnacle sits to its right. On cool days, it is possible to see steam rising from the Sulphur Works hydrothermal area."
    }]
  }, {
    name: "Mammoth Cave National Park",
    image: "mammoth-cave.jpeg",
    est: "July 1, 1941",
    description: "Rolling hills, deep river valleys, and the world's longest known cave system. Mammoth Cave National Park is home to thousands of years of human history and a rich diversity of plant and animal life, earning it the title of UNESCO World Heritage Site and International Biosphere Reserve.",
    state: "Kentucky",
    webcams: [{
      title: "Green River Bluffs",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/maca.jpg",
      description: "This air quality camera shows the view to the north from the Green River Bluffs trail and also displays current air quality and weather data."
    }]
  }, {
    name: "Mesa Verde National Park",
    image: "mesa-verde.jpeg",
    est: "June 29, 1906",
    description: "For over 700 years, the Ancestral Pueblo people built thriving communities on the mesas and in the cliffs of Mesa Verde. Today, the park protects the rich cultural heritage of 26 Pueblos and Tribes and offers visitors a spectacular window into the past. This World Heritage Site and International Dark Sky Park is home to over a thousand species, including several that live nowhere else on earth.",
    state: "Colorado",
    webcams: [{
      title: "Mesa Verde Dust Cam",
      url: "http://eldesierto.org/Mverde.jpg",
      description: "View from the dust monitoring webcam at Mesa Verde National Park. It was installed as part of a multi-agency air quality research project in 2011. The webcam is hosted by the U.S. Geological Survey."
    }]
  }, {
    name: "Mount Rainier National Park",
    image: "mount-rainier.jpeg",
    est: "March 2, 1899",
    description: "Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits.",
    state: "Washington",
    webcams: [{
      title: "Longmire",
      url: "https://www.nps.gov/webcams-mora/longmire.jpg",
      description: "Looking southwest from the Administration Building toward the road entering Longmire."
    },{
      title: "Mountain",
      url: "https://www.nps.gov/webcams-mora/mountain.jpg",
      description: "Is the mountain out? What is the weather like at Paradise?"
    },{
      title: "East",
      url: "https://www.nps.gov/webcams-mora/east.jpg",
      description: "Looking east from the Jackson Visitor Center in Paradise."
    },{
      title: "West",
      url: "https://www.nps.gov/webcams-mora/west.jpg",
      description: "Looking west from the Jackson Visitor Center in Paradise."
    },{
      title: "Visitor Center",
      url: "https://www.nps.gov/webcams-mora/gh.jpg",
      description: "A view of the Jackson Visitor Center at Paradise."
    },{
      title: "Tatoosh",
      url: "https://www.nps.gov/webcams-mora/tatoosh.jpg",
      description: "Looking south towards the Tatoosh Range from Paradise."
    },{
      title: "Air Quality",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/mora.jpg",
      description: "Monitors the air quality over the Nisqually Valley from Paradise. Note that ozone and weather measurements are from the weather station at Paradise; visibility readings are from the weather station at Tahoma Woods, near Ashford, WA."
    }]
    // TODO come back Summer 2023 and get the summer cams
  }, {
    name: "New River Gorge National Park",
    image: "new-river-gorge.jpeg",
    est: "December 27, 2020",
    description: "A rugged, whitewater river flowing northward through deep canyons, the New River is among the oldest rivers on the continent. The park encompasses over 70,000 acres of land along the New River, is rich in cultural and natural history, and offers an abundance of scenic and recreational opportunities.",
    state: "West Virginia",
    webcams: [{
      title: "Canyon Rim Webcam",
      url: "https://www.nps.gov/webcams-neri/image.jpg",
      description: "Check the Canyon Rim webcam for the view of the gorge from Canyon Rim Visitor Center."
    }]
  }, {
    name: "North Cascades National Park",
    image: "north-cascades.jpeg",
    est: "October 2, 1968",
    description: "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
    state: "Washington",
    webcams: [{
      title: "Newhalem Webcam",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/noca.jpg",
      description: "View still photographs of the Picket Range just outside the North Cascades Visitor Center near Newhalem, Washington"
    }]
  }, {
    name: "Olympic National Park",
    image: "olympic.jpeg",
    est: "June 29, 1938",
    description: "With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!",
    state: "Washington",
    webcams: [{
      title: "Hurricane Ridge",
      url: "https://www.nps.gov/webcams-olym/southcam.jpg",
      description: "Looking southwest from Hurricane Ridge, towards Mount Olympus and the Bailey Range."
    },{
      title: "Hurricane Ridge Parking Lot",
      url: "https://www.nps.gov/webcams-olym/northcam.jpg",
      description: "This view, from the north side of Hurricane Ridge Visitor Center, is rarely obstructed and is often monitored by locals to check the weather or snow pack to determine if conditions are good for a trip up the mountain."
    },{
      title: "Kalaloch Beach",
      url: "http://pixelcaster.com/dnc-kalaloch/kalaloch.jpg",
      description: "Watch the meandering Kalaloch Creek flow into the Pacific Ocean on this sandy beach. Webcam operated by Kalaloch Lodge."
    },{
      title: "Lake Crescent",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/olym.jpg",
      description: "View the weather and conditions at Lake Crescent looking Southeast."
    },{
      title: "TODO",
      url: "",
      description: "https://forkswa.com/plan-your-visit/webcams/"
    }]
  },{
    name: "Petrified Forest National Park",
    image: "petrified-forest.jpeg",
    est: "December 9, 1962",
    description: "This portion of the Chinle Formation has a large concentration of 225-million-year-old petrified wood. The surrounding Painted Desert features eroded cliffs of red-hued volcanic rock called bentonite. Dinosaur fossils and over 350 Native American sites are also protected in this park.",
    state: "Arizona",
    webcams: [{
      title: "Webcam at the Painted Desert Inn National Historic Landmark",
      url: "https://webcam.petrifiedforestbookstore.com/webcam.jpg",
      description: "Live webcam from the historic Painted Desert Inn Historic Landmark at Petrified Forest National Park, looking out over the colorful Painted Desert."
    }]
  }, {
    name: "Rocky Mountain National Park",
    image: "rocky-mountain.jpeg",
    est: "January 26, 1915",
    description: "Rocky Mountain National Park's 415 square miles (265,807 acres) encompasses a spectacular range of mountain environments. From meadows found in the montane life zone to glistening alpine lakes and up to the towering mountain peaks, there is something for everyone to discover. Along the way explore over 300 miles of hiking trails and incredible wildlife viewing.",
    state: "Colorado",
    webcams: [{
      title: "Alpine Visitor Center",
      url: "https://www.nps.gov/webcams-romo/alpine_visitor_center.jpg",
      description: "The Alpine Visitor Center, at 11,796’, is the highest elevation visitor center in the National Park System. This webcam reveals views of Mount Chapin, Fall River Canyon, Old Fall River Road, and part of Trail Ridge."
    }, {
      title: "Kawuneeche Valley",
      url: "https://www.nps.gov/webcams-romo/kawuneeche_valley.jpeg",
      description: "Located on the west side of Rocky Mountain National Park one-half mile from the Grand Lake Entrance Station, Harbison Meadow in the Kawuneeche Valley teems with wildlife and wildflowers. The Never Summer Mountains look down on the headwaters of the Colorado River in this view of the Kawuneeche Valley."
    }, {
      title: "Continental Divide",
      url: "https://www.nps.gov/webcams-romo/glacier_basin.jpeg",
      description: "Located at Glacier Basin Campground, the Continental Divide Webcam offers a spectacular view of the peaks which rise up from the Bear Lake area. On clear days you will see Thatchtop, Taylor Peak, Otis Peak, Hallett Peak, and Flattop Mountain."
    }, {
      title: "Longs Peak",
      url: "https://www.nps.gov/webcams-romo/longs_peak.jpg",
      description: "The Longs Peak Webcam is located in the beautiful Tahosa Valley along Hwy 7. The webcam takes you to the tallest mountain in Rocky Mountain National Park. Longs Peak sits at an elevation of 14,259 feet above sea level and is a challenging mountain to climb under the best conditions."
    }, {
      title: "Fall River/US 34 Entrance",
      url: "https://www.nps.gov/webcams-romo/fre.jpg",
      description: "Fall River Entrance is located just west of Estes Park on US Hwy 34.  This view is looking east from the entrance station, depicting the flow of vehicles entering the park."
    }, {
      title: "Beaver Meadows/US 36 Entrance",
      url: "https://www.nps.gov/webcams-romo/bme.jpeg",
      description: "Beaver Meadows Entrance is located just west of Estes Park on US Hwy 36.  This view is looking east from the entrance station, depicting the flow of vehicles entering the park."
    }]
  }, {
    name: "Saguaro National Park",
    image: "saguaro.jpeg",
    est: "October 14, 1994",
    description: "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
    state: "Arizona",
    webcams: [{
      title: "Rincon Mountain Visitor Center",
      url: "https://www.nps.gov/common/commonspot/customcf/webcam/inactive_webcam.png",
      description: "View the picturesque scenery visitors see during their time in the Visitor Center. During the winter months the webcam will focus on the pond for potential wildlife and during the summer months, the webcam will focus on our routine javelina visitors next to the visitor center windows."
    }]
  }, {
    name: "Shenandoah National Park",
    image: "shenandoah.jpeg",
    est: "December 26, 1935",
    description: "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows. With over 200,000 acres of protected lands that are haven to deer, songbirds, and black bear, there's so much to explore...and your journey begins right here!",
    state: "Virginia",
    webcams: [{
      title: "Big Meadows",
      url: "https://www.nps.gov/webcams-shen/bvc2.jpg",
      description: "Look south from Byrd Visitor Center (mile 51) at this higher elevation."
    },{
      title: "Mountain View Cam",
      url: "https://www.nps.gov/webcams-shen/pinnacles_800.jpg",
      description: "A view from the Pinnacles area (near mile 36.7) into the valley toward the town of Luray. Use this to check the weather in the park or to track the fall color! Watch as the seasons change from Skyline Drive into the Shenandoah Valley."
    },{
      title: "Air Quality Cam",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/shen.jpg",
      description: "Live air quality data from the Pinnacles area looking northwest into the valley."
    }]
  }, {
    name: "Theodore Roosevelt National Park",
    image: "theodore-roosevelt.jpeg",
    est: "November 10, 1978",
    description: "When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.",
    state: "North Dakota",
    webcams: [{
      title: "View of Painted Canyon | Looking North-Northwest",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/thro.jpg",
      description: "As the gently undulating prairie breaks into the bewildering, jagged badlands terrain, the view from this overlook has inspired, amazed, and terrified travelers from the past to the present. Painted Canyon is the first glimpse visitors receive of the Badlands while traveling west on I-94."
    }]
  }, {
    name: "Wrangell-St. Elias National Park",
    image: "wrangell-st-elias.jpeg",
    est: "December 2, 1980",
    description: "Wrangell-St. Elias is a vast national park that rises from the ocean all the way up to 18,008 ft. At 13.2 million acres, the park is the same size as Yellowstone National Park, Yosemite National Park, and Switzerland combined! Within this wild landscape, people continue to live off the land as they have done for centuries. This rugged, beautiful land is filled with opportunities for adventure.",
    state: "Alaska",
    webcams: [{
      title: "Kennecott Mill and Mt. Blackburn",
      url: "https://www.nps.gov/webcams-wrst/KennecottNorth.jpg",
      description: "This is the view out a window on the top floor of the General Store in Kennecott, looking to the north. On the right, the historic Kennecott mill building climbs fourteen stories up the mountainside above the railroad trestle, leaching plant and power plant. One hundred years ago, the mine was in full swing and this area was a hive of activity. On the left side of this view, behind the tailing piles, lies the Kennicott Glacier, and above it all, on the distant skyline, looms the blindingly-white, snow-covered Mt. Blackburn -- at 16,390 feet the third-highest peak in the park."
    },{
      title: "Kennicott Glacier and the Chugach Range",
      url: "https://www.nps.gov/webcams-wrst/KennecottSouth.jpg",
      description: "This view is from the old Dairy Barn in Kennecott, looking south to the Chugach Mountains. The mounds in the foreground are the rock-covered terminus of the Kennicott Glacier. Beyond the glacier and its meltwater lake lie the town of McCarthy and the vast expanse of the Chitina river valley. The scene changes throughout the day depending on weather and lighting: watch for dramatic summer cumulus clouds building over the mountains, rain squalls moving across the valley, windstorms blowing glacial loess off the river bars, and sunlight glinting off bare ice faces on the glacier."
    }]
  }, {
    name: "Yellowstone National Park",
    image: "yellowstone.jpeg",
    est: "March 1, 1872",
    description: "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal and geologic features. Within Yellowstone's 2.2 million acres, visitors have unparalleled opportunities to observe wildlife in an intact ecosystem, explore geothermal areas that contain about half the world’s active geysers, and view geologic wonders like the Grand Canyon of the Yellowstone River.",
    state: "Wyoming, Montana, Idaho",
    webcams: [{
      title: "North Entrance - Roosevelt Arch",
      url: "https://www.nps.gov/webcams-yell/mammoth_arch.jpg",
      description: "This webcam is on the park's North Entrance at Gardiner, Montana. It shows current conditions at the entrance with Roosevelt Arch in the background.\n" +
        "\n" +
        "The arch became known as Roosevelt Arch after President Theodore Roosevelt, who was vacationing in the park, spoke at the ceremony to lay the cornerstone in 1903. The arch is inscribed with a phrase from the legislation establishing Yellowstone National Park: \"For the benefit and enjoyment of the people.\""
    },{
      title: "North Entrance - Electric Peak",
      url: "https://www.nps.gov/webcams-yell/mammoth_electric.jpg",
      description: "Morning views from this webcam are spectacular, especially during the winter when the morning sun touches Electric Peak.\n" +
        "\n" +
        "Look for wildlife—elk, bison, and pronghorn can be seen grazing here. Occasionally you may see the top of oversize vehicles—RVs, tour buses, and delivery trucks—as they stop at the entrance station."
    },{
      title: "Mammoth Hot Springs - Travertine Terraces and Parade Ground",
      url: "https://www.nps.gov/webcams-yell/mammoth_parade.jpg",
      description: "Yellowstone is a place of change, and this view highlights a place where change is constant and evident—the travertine terraces of Mammoth Hot Springs. Terraces form when water rises through limestone, which then allows the water to carry high amounts of dissolved calcium carbonate. At the surface, carbon dioxide is released and the calcium carbonate is deposited, forming travertine, the chalky white rock of the terraces. In the foreground are the parade grounds for historic Fort Yellowstone—the focal point of daily life at the fort."
    },{
      title: "Mount Washburn - Northeastern View",
      url: "https://www.nps.gov/webcams-yell/washburn_ne.jpg",
      description: "At 10,219 feet, Mount Washburn towers above Dunraven Pass between Tower Junction and Canyon Village. A fire lookout stationed at the summit provides a popular destination for day hikers, as well as housing for an employee who watches for and tracks fires throughout the summer. This webcam is located inside the living quarters on the top floor and looks out to the northeast."
    },{
      title: "Mount Washburn - Southern View",
      url: "https://www.nps.gov/webcams-yell/washburn_sw.jpg",
      description: "This webcam atop Mount Washburn captures a south-facing view of the north-central part of the park. During summer, the webcam is often re-positioned by the fire lookout, and smoke from wildfires burning in the park may be visible."
    },{
      title: "West Entrance - Current Conditions at Gate",
      url: "https://www.nps.gov/webcams-yell/west_gate.jpg",
      description: "This webcam is on the West Entrance to the park at West Yellowstone, Montana. It shows current conditions at the entrance gate."
    },{
      title: "West Entrance - Heading into the Park",
      url: "https://www.nps.gov/webcams-yell/west_into.jpg",
      description: "This webcam is on the West Entrance to the park at West Yellowstone, Montana. It shows current conditions leading into the park."
    },{
      title: "Old Faithful Geyser",
      url: "https://www.nps.gov/webcams-yell/oldfaithful.jpg",
      description: "Old Faithful, named by members of the 1870 Washburn Expedition, was once called “Eternity’s Timepiece” because of the regularity of its eruptions. Despite the myth, this geyser has never erupted at exact hourly intervals, nor is it the largest or most regular geyser in Yellowstone. It does, however, erupt more frequently than any other of the large geysers.\n" +
        "\n" +
        "This view of the Old Faithful Geyser is captured from a webcam inside the visitor education center. At this location, time is not measured by a clock, but by this geyser. Visitors make decisions on when to eat, take a tour, interact with exhibits, or watch the visitor center film based on Old Faithful's next eruption."
    },{
      title: "Yellowstone Volcano Observatory's Webcam at Yellowstone Lake",
      url: "https://volcanoes.usgs.gov/vsc/captures/yellowstone/current_ylake.jpg",
      description: "The camera view is south-southeast over Yellowstone Lake from the cell phone tower near Fishing Bridge. Stevenson Island is visible within the lake on the right. The view extends down the Southeast Arm between the Promontory (low ridge rising from the lake) and the eastern shore. Above the shore, the acid-bleached Brimstone Basin remains white even when the snows have melted. The Absaroka Mountains in the background are composed of approximately 50-million-year old volcanic rocks that long precede the current volcanic activity at Yellowstone, which started about 2.2 million years ago."
    }]
  }, {
    name: "Yosemite National Park",
    image: "yosemite.jpeg",
    est: "October 1, 1890",
    description: "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
    state: "California",
    webcams: [{
      title: "Yosemite High Sierra",
      url: "https://pixelcaster.com/yosemite/webcams/sentinel.jpg",
      description: "This webcam, located at about 8,000 feet in elevation, shows Half Dome and the surrounding high country."
    },{
      title: "El Capitan",
      url: "https://pixelcaster.com/yosemite/webcams/turtleback.jpg",
      description: "Located on a dome near the Wawona Tunnel, this webcam provides a nice view of Yosemite Valley."
    },{
      title: "Tuolumne Meadows (Summer Only)",
      url: "https://www.nps.gov/common/commonspot/customcf/webcam/inactive_webcam.png",
      description: "Yosemite Hospitality operates a webcam at the Tuolumne Meadows Store, giving you a glimpse into the high country during the summer. The prominent dome in the distance is Fairview Dome."
    },{
      title: "Turtleback Dome & Air Quality",
      url: "https://www.nps.gov/featurecontent/ard/webcams/images/yose.jpg",
      description: "This air quality camera shows the view to the west from near Yosemite Valley and also displays current air quality and weather data."
    },{
      title: "Badger Pass Ski Area",
      url: "https://pixelcaster.com/aramark/yosemite-ski.jpg",
      description: "Yosemite Hospitality operates a webcam at the Badger Pass Ski Area so you can check current conditions and activity."
    },{
      title: "Merced River at Happy Isles",
      url: "https://usgs-nims-images.s3.amazonaws.com/overlay/CA_Merced_River_at_Happy_Isles_Bridge_Yosemite/CA_Merced_River_at_Happy_Isles_Bridge_Yosemite_newest.jpg",
      description: "From here, you can see the Merced River as it flows past Yosemite Valley's Happy Isles Gaging Station, which the US Geological Survey has maintained for over 100 years."
    },]
  }, {
    name: "Zion National Park",
    image: "zion.jpeg",
    est: "November 19, 1919",
    description: "Follow the paths where native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.",
    state: "Utah",
    webcams: [{
      title: "Temples And Towers of the Virgin",
      url: "https://www.nps.gov/webcams-zion/camera2000.jpg",
      description: "This webcam is located at park headquarters in Zion Canyon and shows one of the park's most famous views, The Temples and Towers of the Virgin."
    }]
  }]
}