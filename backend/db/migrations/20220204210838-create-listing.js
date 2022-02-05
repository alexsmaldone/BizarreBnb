"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Listings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.STRING,
      },
      zipcode: {
        type: Sequelize.STRING(10),
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lat: {
        type: Sequelize.DECIMAL,
      },
      lng: {
        type: Sequelize.DECIMAL,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL,
      },
      guests: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bedroom: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bath: {
        allowNull: false,
        type: Sequelize.INTEGER.ZEROFILL,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Listings");
  },
};
