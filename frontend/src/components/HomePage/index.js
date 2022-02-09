import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useParams } from "react-router-dom";
import { getListings } from "../../store/listing";

import "./HomePage.css";

const SplashPage = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state) => {
    return state?.listing?.list;
  });
  const images = useSelector((state) => {
    return state?.listing?.images;
  });

  console.log("IMAGES=====", images);

  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getListings());
  }, []);

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
            id="splash-page-img"
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
              <Link key={listing.id} to={`/listings/${listing?.id}`}>
                <div className="card-container">
                  <h4 className="listing-name">{listing?.name}</h4>
                  <div className="listing-img-container">
                    <img src={images?.[listing.id]?.[0]} alt={listing?.name} />
                  </div>
                  <h6 className="listing-location">
                    {listing?.city}, {listing?.state}
                  </h6>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default SplashPage;
