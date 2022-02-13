// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import * as sessionActions from "../../store/session";
import "./Navigation.css";
import LoginFormModal from "../LoginFormModal";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks = <ProfileButton user={sessionUser} />;

  const handleClick = (e) => {
    return dispatch(
      sessionActions.login({ credential: "demo@user.io", password: "password" })
    );
  };

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
        <div className="demo-dropdown-holder">
          {!sessionUser && (
            <div className="noauth-user-links">
              <NavLink className="demo-button" to="/signup">
                Sign Up
              </NavLink>
              <button className="demo-button" onClick={handleClick}>
                Demo Login
              </button>
              <LoginFormModal />
            </div>
          )}

          <ul className="nav-dropdown">
            <li>{isLoaded && sessionLinks}</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
