import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import "./HomePage.css";

const splashPage = () => {
  const dispatch = useDispatch();

  return (
    <main>
      <div className="splash-top">
        <h1 className="welcome">Welcome to BizarreBnB</h1>
        <p className="welcome">
          Browse and book the quirkiest collection of BnB's on the internet
        </p>
        <div className="background-image-container">
          <img
            src="https://a0.muscache.com/im/pictures/9b731de6-b8b6-4eae-aba2-631216bf1bfc.jpg?im_w=1200"
            alt="home in the shape of a boot"
          />
        </div>
      </div>
    </main>
  );
};

export default splashPage;
