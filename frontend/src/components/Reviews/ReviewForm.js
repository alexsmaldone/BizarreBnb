import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReviewForm = ({ listingId }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const updateReview = (e) => setReview(e.target.value);
  const updateRating = (e) => setRating(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(listingId, review, rating);
    const payload = {
      review,
      rating,
      listingId,
    };
  };

  return (
    <>
      <form>
        <textarea
          type="text"
          placeholder="Start writing your review here..."
          value={review}
          onChange={updateReview}
        />
        <select onChange={updateRating} value={rating}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button onClick={handleSubmit}>Submit Review</button>
      </form>
    </>
  );
};

export default ReviewForm;
