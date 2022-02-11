import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createReview } from "../../store/listing";

const EditReviewForm = ({ review }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [updatedReview, setUpdatedReview] = useState("");
  const [rating, setRating] = useState(5);

  const updateReview = (e) => setUpdatedReview(e.target.value);
  const updateRating = (e) => setRating(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      updatedReview,
      rating,
    };

    const response = await dispatch(createReview(payload));
    if (response) {
      history.push(`/listings/${review.listingId}`);
    }
  };

  return (
    <>
      <form>
        <textarea
          type="text"
          placeholder="Start writing your review here..."
          value={updatedReview}
          onChange={updateReview}
        />
        <select onChange={updateRating} value={rating}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button className="newlisting-button" onClick={handleSubmit}>
          Submit Edit
        </button>
      </form>
    </>
  );
};

export default EditReviewForm;
