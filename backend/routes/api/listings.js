const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { Listing } = require("../../db/models");
const { Image } = require("../../db/models");
const { Review } = require("../../db/models");
const { User } = require("../../db/models");
const { sequelize } = require("sequelize");

const router = express.Router();

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Listings
// todo ——————————————————————————————————————————————————————————————————————————————————

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

    const listing = await Listing.findOne({
      where: { id },
      include: { model: User, attributes: ["firstName"] },
    });
    const listingImages = await Image.findAll({
      where: {
        listingId: id,
      },
    });

    const reviews = await Review.findAll({
      where: {
        listingId: id,
      },
      include: {
        model: User,
        attributes: ["firstName"],
      },
    });

    return res.json([listing, listingImages, reviews]);
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

    return res.json("Success!");
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
    return res.json(updatedListing);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { listingId } = req.body;
    let id = Number(listingId);

    const listing = await Listing.findByPk(id);

    await Image.destroy({
      where: {
        listingId: id,
      },
    });

    await Review.destroy({
      where: {
        listingId: id,
      },
    });

    await listing.destroy();

    return res.json("Success!");
  })
);

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reviews
// todo ——————————————————————————————————————————————————————————————————————————————————

// const validateCreateReview = [
//   check("review")
//     .exists({ checkFalsy: true })
//     .withMessage("Please submit a review.")
//     .isLength({ max: 255 })
//     .withMessage("Reviews must be no longer than 255 characters."),
//   check("rating")
//     .exists({ checkFalsy: true })
//     .withMessage("Please rate your stay.")
//     .isNumeric()
//     .withMessage("Ratings must be 1-5."),
//   handleValidationErrors,
// ];

router.post(
  "/:id/reviews",
  asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const firstName = req.user.firstName;
    const { review, rating, listingId } = req.body;

    const newReview = await Review.create({
      userId,
      listingId,
      review,
      rating,
    });

    const newReviewWithName = await Review.findOne({
      where: {
        id: newReview.id,
      },
      include: {
        model: User,
        attributes: ["firstName"],
      },
    });

    return res.json(newReviewWithName);
  })
);

router.delete(
  "/:id/reviews/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.body;

    const review = await Review.findByPk(id);
    const tempReview = review;
    await review.destroy();

    return res.json(tempReview);
  })
);

router.put(
  "/:id/reviews/:id",
  asyncHandler(async (req, res) => {
    const { id, updatedReview, rating } = req.body;

    const review = await Review.findByPk(id);
    const newReview = await review.update({
      rating,
      review: updatedReview,
    });

    const editedReview = await Review.findOne({
      where: {
        id: newReview.id,
      },
      include: {
        model: User,
        attributes: ["firstName"],
      },
    });
    return res.json(editedReview);
  })
);

module.exports = router;
