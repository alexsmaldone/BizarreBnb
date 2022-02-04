"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      listingId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Listings" },
      },
      review: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Listing, { foreignKey: "listingId" });
  };
  return Review;
};
