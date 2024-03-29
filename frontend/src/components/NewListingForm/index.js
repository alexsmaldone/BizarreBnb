import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createListing } from "../../store/listing";

import "./NewListingForm.css";

function NewListingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [guests, setGuests] = useState();
  const [bedroom, setBedroom] = useState();
  const [bath, setBath] = useState();
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

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

    let createdListing = await dispatch(createListing(payload));
    if (createdListing) {
      history.push("/listings/my-listings");
    }
  };

  if (!sessionUser.id) {
    return null;
  }

  return (
    <main className="newlisting-container">
      <div className="newlisting-subcontainer">
        <h1>New Listing Form</h1>
        <section>
          <form className="listing-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Listing Title"
              required
              value={name}
              onChange={updateName}
            />
            <input
              type="text"
              placeholder="Address - '1122 Boogie Woogie Ave'"
              required
              value={address}
              onChange={updateAddress}
            />
            <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={updateCity}
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={updateState}
            />
            <input
              type="text"
              placeholder="Zipcode"
              required
              value={zipcode}
              onChange={updateZipcode}
            />
            <input
              type="text"
              placeholder="Country"
              required
              value={country}
              onChange={updateCountry}
            />
            <input
              type="number"
              min="0"
              placeholder="$ Price per night"
              required
              value={price}
              onChange={updatePrice}
            />
            <input
              type="number"
              placeholder="Number of Guests"
              min="1"
              required
              value={guests}
              onChange={updateGuests}
            />
            <input
              type="number"
              min="0"
              placeholder="Number of Bedrooms"
              required
              value={bedroom}
              onChange={updateBedroom}
            />
            <input
              type="number"
              min="0"
              placeholder="Number of bathrooms"
              required
              value={bath}
              onChange={updateBath}
            />
            <input
              type="text"
              placeholder="Image 1 URL"
              required
              value={image1}
              onChange={updateImage1}
            />
            <input
              type="text"
              placeholder="Image 2 URL"
              required
              value={image2}
              onChange={updateImage2}
            />
            <input
              type="text"
              placeholder="Image 3 URL"
              required
              value={image3}
              onChange={updateImage3}
            />
            <textarea
              type="text"
              placeholder="Description of listing..."
              value={description}
              onChange={updateDescription}
            />
            <button className="newlisting-button" type="submit">
              Create New Listing
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default NewListingForm;
