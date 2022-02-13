import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createReview } from "../../store/listing";

const ReviewForm = ({ listingId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const updateReview = (e) => setReview(e.target.value);
  const updateRating = (e) => setRating(e.target.value);

  const reviewContainer = document.querySelector(".reviews-container");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      review,
      rating,
      listingId,
    };

    const createdReview = await dispatch(createReview(payload));
    if (createdReview) {
      setReview("");
      history.push(`/listings/${listingId}`);
    }
  };

  return (
    <>
      <div className="review-form-container">
        <form className="review-form">
          <textarea
            required
            minLength="5"
            placeholder="Start writing your review here..."
            value={review}
            onChange={updateReview}
          />
          <label for="rating">Rating (1 - 5) </label>
          <select name="rating" onChange={updateRating} value={rating}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button className="newlisting-button" onClick={handleSubmit}>
            + Create Review
          </button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
