import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { getListings } from "../../store/listing";

import "./HomePage.css";

const SplashPage = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => {
    return state.listing.list;
  });
  const images = useSelector((state) => {
    return state.listing.images;
  });

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);
  console.log(images);

  return (
    <main>
      <div className="splash-top">
        <div className="welcome-text-container">
          <h1 className="welcome">Welcome to BizarreBnB</h1>
          <p className="welcome">
            Browse and book the quirkiest collection of BnB's on the internet
          </p>
        </div>
        <div className="background-image-container">
          <img
            src="https://a0.muscache.com/im/pictures/9b731de6-b8b6-4eae-aba2-631216bf1bfc.jpg?im_w=1200"
            alt="home in the shape of a boot"
          />
        </div>
      </div>
      <div className="splash-bottom">
        <div>
          <h2>Find Your Next Bizarre Booking</h2>
        </div>
        <div className="listings-container">
          {listings.map((listing) => {
            return (
              <div key={listing.id}>
                <h4>{listing.name}</h4>
                <h6>
                  {listing.city}, {listing.state}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default SplashPage;
