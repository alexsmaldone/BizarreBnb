import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const ReviewDeleteButton = ({ review, listing }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    const deletedReview = await dispatch(deleteReview);

    if (deletedReview) {
      alert("Review Deleted");
      history.push(`/listings/${listing.id}`);
    }
  };

  return (
    <button className="newlisting-button" onClick={handleDelete}>
      Delete Review
    </button>
  );
};

export default ReviewDeleteButton;
