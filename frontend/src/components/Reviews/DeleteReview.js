import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/listing";

const ReviewDeleteButton = ({ review, listingId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    const deletedReview = await dispatch(deleteReview(review));
  };

  return (
    <button
      style={{ marginTop: "5px", marginBottom: "5px", marginLeft: "5px" }}
      className="newlisting-button"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default ReviewDeleteButton;
