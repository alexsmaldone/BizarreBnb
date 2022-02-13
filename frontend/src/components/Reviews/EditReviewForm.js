import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editReview } from "../../store/listing";

const EditReviewForm = ({ review, closeModal }) => {
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
      listingId: review.listingId,
      id: review.id,
      updatedReview,
      rating,
    };

    dispatch(editReview(payload));

    closeModal();
  };

  return (
    <>
      <div className="review-modal-form-container">
        <form className="review-form">
          <textarea
            placeholder="Start writing your review here..."
            value={updatedReview}
            onChange={updateReview}
            required
            minlength="5"
          />
          <label for="rating">Rating (1 - 5) </label>

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
      </div>
    </>
  );
};

export default EditReviewForm;
