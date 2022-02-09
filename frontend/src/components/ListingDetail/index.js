import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getOneListing } from "../../store/listing";

import "./ListingDetail.css";

const ListingDetail = () => {
  const dispatch = useDispatch();
  const { listingId } = useParams();

  const listing = useSelector((state) => state?.listing?.list[0]);

  const images = useSelector((state) => state?.listing?.list[1]);

  useEffect(() => {
    dispatch(getOneListing(Number(listingId)));
  }, [dispatch, listingId]);

  useEffect(() => {
    dispatch(getOneListing(Number(listingId)));
  }, []);

  if (!listing || !images) {
    return null;
  }

  return (
    <>
      <main className="listing-detail">
        <h1>{listing?.name}</h1>
        <h5>
          {listing.city}, {listing.state}, {listing.zipcode}
        </h5>
        <div className="review-container"></div>
        <div className="image-container">
          <div className="image-card">
            <img className="listing-image" src={images[0]?.url} />
          </div>
          <div className="image-card">
            <img className="listing-image" src={images[1]?.url} />
          </div>
          <div className="image-card">
            <img className="listing-image" src={images[2]?.url} />
          </div>
        </div>
        <div className="info-card">
          <div className="listing-stats">
            <div>$ {listing?.price} / night</div>
            <span>{listing?.guests} guests</span>
            <span>•</span>
            <span>{listing?.bedroom} bedroom</span>
            <span>•</span>
            <span>{listing?.bath} bath</span>
          </div>
          <div className="border-top"> </div>
          <div className="description-container">
            <p className="description">{listing?.description}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ListingDetail;
