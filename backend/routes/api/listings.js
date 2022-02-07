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

module.exports = router;
