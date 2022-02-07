import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import "./HomePage.css";

const splashPage = () => {
  return (
    <main>
      <div className="background-image-container">
        <img src="https://a0.muscache.com/im/pictures/9b731de6-b8b6-4eae-aba2-631216bf1bfc.jpg?im_w=1200" />
      </div>
      <h1 className="welcome">Welcome to BizarreBnb</h1>
    </main>
  );
};

export default splashPage;
