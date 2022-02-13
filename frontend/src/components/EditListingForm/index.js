import React, { useState, useEffect } from "react";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateListing } from "../../store/listing";

import "./EditListingForm.css";

function EditListingForm({ listing, closeModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [address, setAddress] = useState(listing?.address);
  const [city, setCity] = useState(listing?.city);
  const [state, setState] = useState(listing?.state);
  const [zipcode, setZipcode] = useState(listing?.zipcode);
  const [country, setCountry] = useState(listing?.country);
  const [name, setName] = useState(listing?.name);
  const [description, setDescription] = useState(listing?.description);
  const [price, setPrice] = useState(listing?.price);
  const [guests, setGuests] = useState(listing?.guests);
  const [bedroom, setBedroom] = useState(listing?.bedroom);
  const [bath, setBath] = useState(listing?.bath);
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updateGuests = (e) => setGuests(e.target.value);
  const updateBedroom = (e) => setBedroom(e.target.value);
  const updateBath = (e) => setBath(e.target.value);
  const updateImage1 = (e) => setImage1(e.target.value);
  const updateImage2 = (e) => setImage2(e.target.value);
  const updateImage3 = (e) => setImage3(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      id: listing.id,
      address,
      city,
      state,
      zipcode,
      country,
      name,
      description,
      price,
      guests,
      bedroom,
      bath,
      image1,
      image2,
      image3,
    };

    const response = await dispatch(updateListing(payload));
    if (response) {
      history.push(`/listings/${listing.id}`);
    }
    closeModal();
  };

  return (
    <main className="newlisting-container">
      <div className="editlisting-subcontainer">
        <h1>Edit Your Listing</h1>
        <section>
          <form className="listing-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              placeholder={"Name: " + listing.name}
              value={name}
              onChange={updateName}
            />
            <label>Address</label>
            <input
              type="text"
              placeholder={"Address: " + listing.address}
              value={address}
              onChange={updateAddress}
            />
            <label>City</label>
            <input
              type="text"
              placeholder={"City: " + listing.city}
              value={city}
              onChange={updateCity}
            />
            <label>State</label>
            <input
              type="text"
              placeholder={"State: " + listing.state}
              value={state}
              onChange={updateState}
            />
            <label>Zipcode</label>
            <input
              type="text"
              placeholder={"Zipcode: " + listing.zipcode}
              value={zipcode}
              onChange={updateZipcode}
            />
            <label>Country</label>
            <input
              type="text"
              placeholder={"Country " + listing.country}
              value={country}
              onChange={updateCountry}
            />
            <label>$ Price / Night</label>
            <input
              type="number"
              min="0"
              placeholder={"Price / Night: $" + listing.price}
              value={price}
              onChange={updatePrice}
            />
            <label>Guests</label>
            <input
              type="number"
              placeholder={"Guests: " + listing.guests}
              min="1"
              value={guests}
              onChange={updateGuests}
            />
            <label>Bedrooms</label>
            <input
              type="number"
              min="0"
              placeholder={"Bedroom: " + listing.bedroom}
              value={bedroom}
              onChange={updateBedroom}
            />
            <label>Bathrooms</label>
            <input
              type="number"
              min="0"
              placeholder={"Bathroom: " + listing.bath}
              value={bath}
              onChange={updateBath}
            />
            <label>Description</label>
            <textarea
              type="text"
              placeholder={"Description: " + listing.description}
              value={description}
              onChange={updateDescription}
            />
            <button className="newlisting-button" type="submit">
              Update Listing
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default EditListingForm;
