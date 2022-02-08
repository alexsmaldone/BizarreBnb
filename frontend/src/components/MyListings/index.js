import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useParams } from "react-router-dom";
import { getMyListings } from "../../store/listing";

import "./MyListings.css";

const MyListings = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const allListings = useSelector((state) => state.listing.list);

  const images = useSelector((state) => {
    return state.listing.images;
  });
  const userListings = allListings.filter(
    (listing) => listing.userId === sessionUser.id
  );

  useEffect(() => {
    dispatch(getMyListings(sessionUser.id));
  }, [dispatch]);

  return (
    <div className="page-container">
      <div>
        <h1>My Listings</h1>
      </div>
      {userListings.length ? (
        <div className="listings-container">
          {userListings.map((listing) => {
            return (
              <Link key={listing.id} to={`/listings/${listing.id}`}>
                <div className="card-container">
                  <h4 className="listing-name">{listing.name}</h4>
                  <div className="listing-img-container">
                    <img src={images[listing.id][0]} alt={listing.name} />
                  </div>
                  <h6 className="listing-location">
                    {listing.city}, {listing.state}
                  </h6>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div> Nothing to see here yet!</div>
      )}
    </div>
  );
};

export default MyListings;
