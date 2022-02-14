"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 3,
          listingId: 1,
          rating: 5,
          review: "A great stay for our family! We'll definitely be back!",
        },
        {
          userId: 4,
          listingId: 1,
          rating: 3,
          review: "We had a great time, but the towels smelled kind of funny",
        },
        {
          userId: 5,
          listingId: 1,
          rating: 4,
          review: "Very spacious and clean, but the bed was a wee bit lumpy",
        },
        {
          userId: 6,
          listingId: 1,
          rating: 5,
          review: "The host did an amazing job and we had a wonderful time",
        },
        {
          userId: 7,
          listingId: 1,
          rating: 5,
          review: "Can't believe we found this place!!!!!! Awesome!!!",
        },
        {
          userId: 3,
          listingId: 2,
          rating: 5,
          review: "A great stay for our family! We'll definitely be back!",
        },
        {
          userId: 4,
          listingId: 2,
          rating: 3,
          review: "We had a great time, but the towels smelled kind of funny",
        },
        {
          userId: 5,
          listingId: 2,
          rating: 4,
          review: "Very spacious and clean, but the bed was a wee bit lumpy",
        },
        {
          userId: 6,
          listingId: 2,
          rating: 5,
          review: "The host did an amazing job and we had a wonderful time",
        },
        {
          userId: 7,
          listingId: 2,
          rating: 5,
          review: "Can't believe we found this place!!!!!! Awesome!!!",
        },
        {
          userId: 3,
          listingId: 3,
          rating: 5,
          review: "A great stay for our family! We'll definitely be back!",
        },
        {
          userId: 4,
          listingId: 3,
          rating: 3,
          review: "We had a great time, but the towels smelled kind of funny",
        },
        {
          userId: 5,
          listingId: 3,
          rating: 4,
          review: "Very spacious and clean, but the bed was a wee bit lumpy",
        },
        {
          userId: 6,
          listingId: 3,
          rating: 5,
          review: "The host did an amazing job and we had a wonderful time",
        },
        {
          userId: 7,
          listingId: 3,
          rating: 5,
          review: "Can't believe we found this place!!!!!! Awesome!!!",
        },
        {
          userId: 3,
          listingId: 4,
          rating: 5,
          review: "A great stay for our family! We'll definitely be back!",
        },
        {
          userId: 4,
          listingId: 4,
          rating: 3,
          review: "We had a great time, but the towels smelled kind of funny",
        },
        {
          userId: 5,
          listingId: 4,
          rating: 4,
          review: "Very spacious and clean, but the bed was a wee bit lumpy",
        },
        {
          userId: 6,
          listingId: 4,
          rating: 5,
          review: "The host did an amazing job and we had a wonderful time",
        },
        {
          userId: 7,
          listingId: 4,
          rating: 5,
          review: "Can't believe we found this place!!!!!! Awesome!!!",
        },
        {
          userId: 3,
          listingId: 5,
          rating: 5,
          review: "A great stay for our family! We'll definitely be back!",
        },
        {
          userId: 4,
          listingId: 5,
          rating: 3,
          review: "We had a great time, but the towels smelled kind of funny",
        },
        {
          userId: 5,
          listingId: 5,
          rating: 4,
          review: "Very spacious and clean, but the bed was a wee bit lumpy",
        },
        {
          userId: 6,
          listingId: 5,
          rating: 5,
          review: "The host did an amazing job and we had a wonderful time",
        },
        {
          userId: 7,
          listingId: 5,
          rating: 5,
          review: "Can't believe we found this place!!!!!! Awesome!!!",
        },
        {
          userId: 3,
          listingId: 6,
          rating: 5,
          review: "A great stay for our family! We'll definitely be back!",
        },
        {
          userId: 4,
          listingId: 6,
          rating: 3,
          review: "We had a great time, but the towels smelled kind of funny",
        },
        {
          userId: 5,
          listingId: 6,
          rating: 4,
          review: "Very spacious and clean, but the bed was a wee bit lumpy",
        },
        {
          userId: 6,
          listingId: 6,
          rating: 5,
          review: "The host did an amazing job and we had a wonderful time",
        },
        {
          userId: 7,
          listingId: 6,
          rating: 5,
          review: "Can't believe we found this place!!!!!! Awesome!!!",
        },
        {
          userId: 3,
          listingId: 7,
          rating: 5,
          review: "A great stay for our family! We'll definitely be back!",
        },
        {
          userId: 4,
          listingId: 7,
          rating: 3,
          review: "We had a great time, but the towels smelled kind of funny",
        },
        {
          userId: 5,
          listingId: 7,
          rating: 4,
          review: "Very spacious and clean, but the bed was a wee bit lumpy",
        },
        {
          userId: 6,
          listingId: 7,
          rating: 5,
          review: "The host did an amazing job and we had a wonderful time",
        },
        {
          userId: 7,
          listingId: 7,
          rating: 5,
          review: "Can't believe we found this place!!!!!! Awesome!!!",
        },
        {
          userId: 3,
          listingId: 8,
          rating: 5,
          review: "A great stay for our family! We'll definitely be back!",
        },
        {
          userId: 4,
          listingId: 8,
          rating: 3,
          review: "We had a great time, but the towels smelled kind of funny",
        },
        {
          userId: 5,
          listingId: 8,
          rating: 4,
          review: "Very spacious and clean, but the bed was a wee bit lumpy",
        },
        {
          userId: 6,
          listingId: 8,
          rating: 5,
          review: "The host did an amazing job and we had a wonderful time",
        },
        {
          userId: 7,
          listingId: 8,
          rating: 5,
          review: "Can't believe we found this place!!!!!! Awesome!!!",
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
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
