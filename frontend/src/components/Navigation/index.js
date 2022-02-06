// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks = <ProfileButton user={sessionUser} />;
  // if (sessionUser) {
  //   sessionLinks = <ProfileButton user={sessionUser} />;
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-logo-links">
          <NavLink exact to="/">
            <i className="fab fa-airbnb" />
          </NavLink>
          <NavLink className="logo-text" exact to="/">
            BizzareBnB
          </NavLink>
        </div>
        <ul className="nav-dropdown">
          <li>{isLoaded && sessionLinks}</li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
