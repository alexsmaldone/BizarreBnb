import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editReview } from "../../store/listing";

const EditReviewForm = ({ review, closeModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [updatedReview, setUpdatedReview] = useState(review.review);
  const [rating, setRating] = useState(5);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (updatedReview.length < 5) {
      errors.push("Review must be at least 5 characters");
    }
    setErrors(errors);
  }, [updatedReview]);

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

    const newReview = await dispatch(editReview(payload));
    if (newReview) {
      closeModal();
    }
  };

  return (
    <>
      <div className="review-modal-form-container">
        <form className="review-form">
          <ul>
            {errors.length > 0 &&
              errors.map((error) => <li key={error}>{error}</li>)}
          </ul>
          <textarea
            required="required"
            minLength="5"
            placeholder="Start writing your review here..."
            value={updatedReview}
            onChange={updateReview}
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
