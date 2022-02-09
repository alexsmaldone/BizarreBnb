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

router.get("/new");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const {
      address,
      city,
      state,
      zipcode,
      country,
      name,
      description,
      price,
      guests,
      bedroom,
      bath,
      image1,
      image2,
      image3,
    } = req.body;

    const newListing = await Listing.create({
      address,
      userId,
      city,
      state,
      zipcode,
      country,
      name,
      description,
      price: Number(price),
      guests: Number(guests),
      bedroom: Number(bedroom),
      bath: Number(bath),
    });

    if (image1) {
      const newImage1 = await Image.create({
        listingId: newListing.id,
        url: image1,
      });
    }
    if (image2) {
      const newImage2 = await Image.create({
        listingId: newListing.id,
        url: image2,
      });
    }
    if (image3) {
      const newImage3 = await Image.create({
        listingId: newListing.id,
        url: image3,
      });
    }

    return res.redirect(`/listings/${newListing.id}`);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const {
      id,
      address,
      city,
      state,
      zipcode,
      country,
      name,
      description,
      price,
      guests,
      bedroom,
      bath,
      image1,
      image2,
      image3,
    } = req.body;

    const listing = await Listing.findByPk(id);
    const updatedListing = await listing.update({
      address,
      city,
      state,
      zipcode,
      country,
      name,
      description,
      price,
      guests,
      bedroom,
      bath,
    });

    await updatedListing.save();

    console.log(req.body);
  })
);

module.exports = router;
