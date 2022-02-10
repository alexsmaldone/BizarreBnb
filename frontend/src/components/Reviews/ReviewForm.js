import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReviewForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const updateReview = (e) => setReview(e.target.value);
  const updateRating = (e) => setRating(e.target.value);

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
      </form>
    </>
  );
};

export default ReviewForm;
