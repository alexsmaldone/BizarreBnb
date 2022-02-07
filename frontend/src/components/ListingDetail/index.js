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
  }, [dispatch]);

  if (!listing || !images) {
    return null;
  }

  return (
    <main className="listing-detail">
      <div>
        <h1>{listing?.name}</h1>
        <div className="review-container"></div>
        <div className="image-container">
          <div className="image-card">
            <img src={images[0].url} />
          </div>
          <div className="image-card">
            <img src={images[1].url} />
          </div>
          <div className="image-card">
            <img src={images[2].url} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ListingDetail;
