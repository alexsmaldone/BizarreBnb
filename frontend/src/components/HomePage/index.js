import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import "./HomePage.css";

const splashPage = () => {
  return (
    <main>
      <h1>Welcome to BizarreBnb</h1>
    </main>
  );
};

export default splashPage;
