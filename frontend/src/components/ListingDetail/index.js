import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getOneListing } from "../../store/listing";

import "./ListingDetail.css";

const ListingDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneListing(id));
  }, [dispatch]);

  return (
    <div>
      <h1>Hello listing detail</h1>
    </div>
  );
};

export default ListingDetail;
