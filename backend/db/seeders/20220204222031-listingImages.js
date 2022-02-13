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
        {
          listingId: 6,
          url: "https://a0.muscache.com/im/pictures/61e15b47-a563-4348-b891-5106bc4ebb02.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 6,
          url: "https://a0.muscache.com/im/pictures/72e3dfea-2b90-4afe-a1bd-1be37e77539a.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 6,
          url: "https://a0.muscache.com/im/pictures/126374d2-69b6-4695-887f-aeee6345e7f1.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 7,
          url: "https://a0.muscache.com/im/pictures/345e30d1-c294-4237-82d7-eccd5a6f2110.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 7,
          url: "https://a0.muscache.com/im/pictures/ed5e1d2b-8d32-47de-81bc-d3420dcecb08.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 7,
          url: "https://a0.muscache.com/im/pictures/ed5e1d2b-8d32-47de-81bc-d3420dcecb08.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 8,
          url: "https://a0.muscache.com/im/pictures/100851117/8348c46c_original.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 8,
          url: "https://a0.muscache.com/im/pictures/100851108/fb222972_original.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 8,
          url: "https://a0.muscache.com/im/pictures/100852055/aac5dfd0_original.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 9,
          url: "https://a0.muscache.com/im/pictures/0ba8c2de-6a30-402c-8423-f8a76cf2a4ba.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 9,
          url: "https://a0.muscache.com/im/pictures/180fb4e4-f770-479b-8922-e809115d0f97.jpg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 9,
          url: "https://a0.muscache.com/im/pictures/bae28b39-bddd-4a90-93fe-19543e73cb54.jpg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 10,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-3406062/original/c564f559-6aa0-4993-b7bd-f5050dec33d9.jpeg?im_w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 10,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-3406062/original/f445fc38-bf62-4bf2-99a3-30e67a6feffc.jpeg?im_w=720",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          listingId: 10,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-3406062/original/2f16ca1f-9226-4525-bb3d-77e994e32c10.jpeg?im_w=720",
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
