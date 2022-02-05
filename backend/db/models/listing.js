"use strict";
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define(
    "Listing",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      state: DataTypes.STRING,
      zipcode: DataTypes.STRING(10),
      country: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      guests: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      bedroom: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      bath: {
        allowNull: false,
        type: DataTypes.INTEGER.ZEROFILL,
      },
    },
    {}
  );
  Listing.associate = function (models) {
    Listing.belongsTo(models.User, { foreignKey: "userId" });
    Listing.hasMany(models.Review, { foreignKey: "listingId" });
    Listing.hasMany(models.Booking, { foreignKey: "listingId" });
  };
  return Listing;
};
