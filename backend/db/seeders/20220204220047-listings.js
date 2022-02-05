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
