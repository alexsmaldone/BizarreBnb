import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteListing } from "../../store/listing";

const ListingDeleteButton = (listingId) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    const deletedListing = await dispatch(deleteListing(listingId));

    if (deletedListing) {
      alert("Listing Deleted");
      history.push("/listings/my-listings");
    }
  };

  return (
    <button
      className="newlisting-button"
      style={{ marginLeft: "5px" }}
      onClick={handleDelete}
    >
      Delete Listing
    </button>
  );
};

export default ListingDeleteButton;
