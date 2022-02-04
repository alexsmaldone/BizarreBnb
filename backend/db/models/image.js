"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      listingId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Image.associate = function (models) {
    Image.belongsTo(models.Listing, { foreignKey: "listingId" });
  };
  return Image;
};
