import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/listing";

const ReviewDeleteButton = ({ review, listingId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    const deletedReview = await dispatch(deleteReview(review));

    if (deletedReview) {
      alert("Review Deleted");
      history.push(`/listings/${listingId}`);
    }
  };

  return (
    <button
      style={{ marginTop: "5px", marginBottom: "5px" }}
      className="newlisting-button"
      onClick={handleDelete}
    >
      Delete Review
    </button>
  );
};

export default ReviewDeleteButton;
