"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Listings",
      [
        {
          userId: 1,
          address: "9501 Amherst Ave",
          city: "Margate City",
          state: "New Jersey",
          zipcode: "08402",
          country: "USA",
          name: "An Elephant-sized Stay",
          description:
            "Sometimes there’s an elephant in the room. In my case, the elephant is the room! I’m Lucy, a 139-year-old wooden elephant who calls the Jersey Shore home. Located in the heart of the Jersey Shore, just five miles from world famous Atlantic City, I stand “Jersey strong” at six stories high — you can’t miss me! I’m an old soul with a young heart, and I love having visitors over, especially when kids grow up and bring their families. In fact, I take pride in being one of the last of my kind, with tourists still flocking to see me every year, delighting young and old generations alike. I hosted my first stay in 1902, and over the years, I’ve been a tavern and hosted a United States President. Today, I’m one of the Jersey Shore’s most recognizable faces.",
          price: 150,
          guests: 2,
          bedroom: 1,
          bath: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          address: "1103 Biscayne Blvd",
          city: "Miami",
          state: "Florida",
          zipcode: "33132",
          country: "USA",
          name: "UFO 'Futuro styled Flying Saucer!",
          description:
            "The spaceship consists of a double bed and two single beds, which can be used as sofas. There is a dining area, wardrobe, basic facilities including kettle and microwave. There are gas hobs and other cooking facilities on site but not in the craft. There is a monitor for gaming classic 80's games like space invaders and defender. The hatch is remote controlled, There is also an escape hatch in case of emergency.",
          price: 270,
          guests: 4,
          bedroom: 1,
          bath: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          address: "1200 Getty Center Dr",
          city: "Los Angeles",
          state: "California",
          zipcode: "90049",
          country: "USA",
          name: "The Boot - Fairytale Accommodation",
          description:
            "Rising from the ground like something straight out of a fairytale storybook, The Boot is one of those true one-off places. This spellbinding hideaway is set on the Tasman Coast, an area of natural beauty and rugged coastline, backed by mountain scenery to explore. Your accommodation is a creative feat of architecture, with large open fireplaces inside and out, a luxurious queen-sized bed, a shower built for two, flowers, chocolates and homemade treats, and your own private courtyard.",
          price: 193,
          guests: 2,
          bedroom: 1,
          bath: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          address: "1280 Peachtree St NE",
          city: "Atlanta",
          state: "Georgia",
          zipcode: "30309",
          country: "USA",
          name: "Secluded Intown Treehouse",
          description:
            "Suite of three beautifully furnished rooms set among the trees. Just minutes from downtown, this secluded property is an urban retreat like no other. The treehouse provides an intimate, simple and restful retreat for 2 people. The treehouse is the subject of innumerable articles, blogs, Treehouse Master and Today Show.",
          price: 389,
          guests: 2,
          bedroom: 1,
          bath: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          address: "294 Sandhill Rd",
          city: "Page",
          state: "Arizona",
          zipcode: "86040",
          country: "USA",
          name: "Sheep Wagon 2 Glamping at Shash Dine",
          description:
            "Have you ever wanted to sleep in a covered wagon in the middle of nowhere under a brilliant starry sky? We can make that happen. Your basecamp for Antelope Canyon, Horseshoe Bend, Lake Powell, the Grand Canyon. Shash Dine' has been featured and/or recommended by Airbnb, HGTV, Condé Nast Traveler, Travel & Leisure, The Guardian, USA TODAY, Phoenix Magazine, The Huffington Post, The Lake Powell Chronicle, Arizona Highways, The Grand Canyon Trust, Indian Country Today, and the Navajo Times.",
          price: 180,
          guests: 2,
          bedroom: 1,
          bath: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          address: "7893 Chena Hot Springs Rd",
          city: "Fairbanks",
          state: "Alaska",
          zipcode: "999712",
          country: "USA",
          name: "Snow Igloos",
          description:
            "Snow igloo with real beds inside. Nice atmosphere with led lights and white walls. Outside the igloo is possibility to see northern lights if you are lucky. Come to Lapland and explore the wilderness. It's always minus degrees' inside the igloo. We provide warm sleeping bag but you should bring your thermos layers, warm hat, socks and cloves. Also headlight or flashlight is handy. Warm apartment available 24 h in case of cold feet.",
          price: 137,
          guests: 6,
          bedroom: 1,
          bath: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          address: "4725 E Mayo Blvd",
          city: "Phoenix",
          state: "Arizona",
          zipcode: "85050",
          country: "USA",
          name: "Tuff Cliff Cave House",
          description:
            "This accommodation only accepts lovers of all kinds, life, nature, the human being.",
          price: 125,
          guests: 5,
          bedroom: 2,
          bath: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          address: "13 Greenfield Rd",
          city: "Woodridge",
          state: "New York",
          zipcode: "12789",
          country: "USA",
          name: "Outlier Inn Geo Dome on Farm",
          description:
            "The Outlier Inn is a bucolic 12-acre farm in New York state’s southern Catskill mountains, 90 miles from NYC. The Inn offers a peaceful and inspiring respite from life in the Big City. We have sheep, goats, alpacas, and chickens which are accessible to guests!",
          price: 379,
          guests: 4,
          bedroom: 1,
          bath: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          address: "4 Thornewood Ln SW",
          city: "Lakewood",
          state: "Washington",
          zipcode: "98498",
          country: "USA",
          name: "Wilton Castle",
          description:
            "Elegant and imposing, Wilton castle is a 19th century castellated residence set on the banks of the Boro River specializing in luxury accommodation in the sunny south-east of Ireland.",
          price: 879,
          guests: 14,
          bedroom: 7,
          bath: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          address: "27400 Pacific Coast Hwy",
          city: "Malibu",
          state: "California",
          zipcode: "90265",
          country: "USA",
          name: "Malibu Dream Trailer",
          description:
            "It's been over two years since the Woolsey fire took out our home and trailer but we're finally back with a much improved trailer which will simply leave you speechless :-) Reconnect with nature and disconnect from technology on your own private deck surrounded by pristine and untouched nature just a short drive away from LA. IMPORTANT NOTE: This stay is weather dependent - if rain is forecasted, we reserve the right to cancel the reservation as the dirt road becomes slippery and unsafe.",
          price: 935,
          guests: 2,
          bedroom: 1,
          bath: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          address: "255 NC-16",
          city: "Taylorsville",
          state: "North Carolina",
          zipcode: "28681",
          country: "USA",
          name: "Little Red Roof Farm House",
          description:
            "The house is a small cozy place. Farm animals surround the property, as well as a large building with farm supplies. The house has one step to enter the back and one level throughout. The home has 9 foot ceilings which make the house look much larger. The house has a long gravel drive with small bridge. Tons of parking space with additional areas which could be used for trailers. We strive to make the place something we would enjoy staying in ourselves. We are close by if you need anything otherwise, we will allow you to simply enjoy your stay. We provide clean towels and sheets. The home has a Keurig machine if you enjoy coffee. We provide a few choice cups. On our farm, we have free range chickens. We stock the refrigerator with a dozen farm fresh eggs for you to enjoy on your stay or take with you home. We welcome you to our little red roof farm house and hope you enjoy your stay!",
          price: 59,
          guests: 4,
          bedroom: 1,
          bath: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          address: "7777 Timmerman Dr",
          city: "East Dubuque",
          state: "Illinois",
          zipcode: "61025",
          country: "USA",
          name: "Floating River Boat",
          description:
            "Come stay at our floating oasis on the backwaters of the Mississippi river! We have the boat in the water YEAR ROUND! This 70 foot houseboat is newly remodeled and ready for you and your guests. It features a custom kitchen, a master bedroom with a full bed and a tv, a bunkhouse room with a full bed, and a basement bedroom with 2 full beds. The living room has a trundle couch that turns into a king-size bed. We also have a full size air mattress. The boat is located at Millennium Marina.",
          price: 203,
          guests: 12,
          bedroom: 3,
          bath: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Listings", null, {});
  },
};
