"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          listingId: 1,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 1,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 1,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 4,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 4,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 4,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 5,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 5,
          url: "something",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 5,
          url: "something",
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
    return queryInterface.bulkDelete("Images", null, {});
  },
};
