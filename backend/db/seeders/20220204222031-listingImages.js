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
          url: "https://a0.muscache.com/im/pictures/9cce991e-b485-4bf0-9fef-9dcd22587128.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 1,
          url: "https://a0.muscache.com/im/pictures/ee8eb0e9-6963-4e49-aa72-a55dfdaac5c0.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 1,
          url: "https://a0.muscache.com/im/pictures/51cb1d3f-2e05-469f-89db-1ac4c868422c.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          url: "https://a0.muscache.com/im/pictures/9da940a2-82d0-4efc-808e-381292ac5321.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          url: "https://a0.muscache.com/im/pictures/576ed948-6df7-4133-ab70-c1a3e9c3f94e.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 2,
          url: "https://a0.muscache.com/im/pictures/fe146eba-2761-4fae-94e0-e79f20aa9e88.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          url: "https://a0.muscache.com/im/pictures/9b731de6-b8b6-4eae-aba2-631216bf1bfc.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          url: "https://a0.muscache.com/im/pictures/fb3cbc01-5da2-4359-8153-6d5c8eb75ea4.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 3,
          url: "https://a0.muscache.com/im/pictures/a8628565-5246-48d5-80bd-2320fb21952f.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 4,
          url: "https://a0.muscache.com/im/pictures/5fc8b312-b262-4473-8771-69dd27909881.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 4,
          url: "https://a0.muscache.com/im/pictures/2b595ae5-5084-4a01-8278-d2cc1197e15c.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 4,
          url: "https://a0.muscache.com/im/pictures/21163123/8e6d6f62_original.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 5,
          url: "https://a0.muscache.com/im/pictures/73aa5fd8-e095-4012-b79a-bfd8340e901c.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 5,
          url: "https://a0.muscache.com/im/pictures/23f36aaf-2425-4443-8dcf-44c52085b4d8.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 5,
          url: "https://a0.muscache.com/im/pictures/716be0f8-a799-43dc-847e-19cfbac6a75d.jpg?im_w=720",
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
