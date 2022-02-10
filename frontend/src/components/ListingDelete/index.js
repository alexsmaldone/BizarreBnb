import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteListing, deleteListing } from "../../store/listing";

const ListingDeleteButton = ({ listingId, images }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    const deleteListing = await dispatch(deleteListing(listingId, images));
    alert("Deleted");
    history.push("/listings/my-listings");
  };

  return <button onClick={handleDelete}>Delete Listing</button>;
};

export default ListingDeleteButton;
