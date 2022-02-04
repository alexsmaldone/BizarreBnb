"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      listingId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Listings" },
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      startDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      endDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Booking.associate = function (models) {
    Booking.belongsTo(models.User, { foreignKey: "userId" });
    Booking.belongsTo(models.Listing, { foreignKey: "listingId" });
  };
  return Booking;
};
