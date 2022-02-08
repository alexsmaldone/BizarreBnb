const express = require("express");
const asyncHandler = require("express-async-handler");

const { Listing } = require("../../db/models");
const { Image } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const listings = await Listing.findAll();
    const images = await Image.findAll();
    return res.json([listings, images]);
  })
);

router.get(
  "/my-listings",
  asyncHandler(async (req, res) => {
    const listings = await Listing.findAll();
    const images = await Image.findAll();
    return res.json([listings, images]);
  })
);
router.get(
  "/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);

    const listing = await Listing.findByPk(id);
    const listingImages = await Image.findAll({
      where: {
        listingId: id,
      },
    });

    return res.json([listing, listingImages]);
  })
);

module.exports = router;
