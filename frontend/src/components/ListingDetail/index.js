import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import listingsReducer, { getOneListing } from "../../store/listing";
import ListingEditModal from "../EditListingForm/ListingEditModal";
import ListingDeleteButton from "../ListingDelete";
import ReviewForm from "../Reviews/ReviewForm";

import "./ListingDetail.css";
import "../Reviews/Reviews.css";

const ListingDetail = () => {
  const dispatch = useDispatch();
  const { listingId } = useParams();

  const sessionUser = useSelector((state) => state.session.user);
  const listing = useSelector((state) => state?.listing?.list[0]);
  const images = useSelector((state) => state?.listing?.list[1]);
  const reviews = useSelector((state) => state?.listing?.list[2]);
  console.log(reviews);

  useEffect(() => {
    dispatch(getOneListing(Number(listingId)));
  }, [dispatch, listingId]);

  useEffect(() => {
    dispatch(getOneListing(Number(listingId)));
  }, []);

  if (!listing || !images) {
    return null;
  }

  let listingImages = [images[0]?.id, images[1]?.id, images[2]?.id];

  return (
    <>
      <main className="listing-detail">
        <h1>{listing?.name}</h1>
        <h5>
          ⭐5.0 <span> • </span> {listing?.city}, {listing?.state},{" "}
          {listing?.zipcode}
        </h5>
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
            {listing?.userId === sessionUser?.id && (
              <>
                <ListingEditModal listing={listing} />
                <ListingDeleteButton listingId={listingId} />
              </>
            )}
          </div>
          <div className="border-top"> </div>
          <div className="description-container">
            <p className="description">{listing?.description}</p>
          </div>
        </div>
        <div className="border-top"> </div>
        <h2>Reviews</h2>
        <ReviewForm listingId={listingId} />
        <div className="reviews-container">
          {reviews?.length ? (
            <>
              {reviews.map((review) => {
                return (
                  <div key={review?.id} className="review-box">
                    <div className="review-box-top">
                      <i className="fas fa-user-circle review" />
                      <div className="review-user">
                        {review?.User?.firstName}
                      </div>
                    </div>
                    <div className="review-time">
                      {review?.createdAt.slice(0, 7)}
                    </div>
                    <div className="review-text">{review?.review}</div>
                  </div>
                );
              })}
            </>
          ) : (
            <p>Be the first one to review!</p>
          )}
        </div>
      </main>
    </>
  );
};

export default ListingDetail;
