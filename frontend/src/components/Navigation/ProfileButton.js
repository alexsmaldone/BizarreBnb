// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (e) => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  useEffect(() => {
    setShowMenu(false);
  }, []);

  // useEffect(() => {
  //   if (!showMenu) return;

  //   const closeMenu = (e) => {
  //     setShowMenu(false);
  //   };

  //   profileButton.addEventListener("click", closeMenu);

  //   return () => profileButton.removeEventListener("click", closeMenu);
  // }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    setShowMenu(false);
    history.push("/");
  };

  return (
    <>
      <button id="profile-button" onClick={toggleMenu}>
        <i className="fas fa-bars" />
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && sessionUser && (
        <ul className="profile-dropdown">
          <li>
            <NavLink to="/listings/my-listings">My Listings</NavLink>
          </li>
          <li>
            <a
              href="https://github.com/alexsmaldone/BizarreBnb"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
      {showMenu && !sessionUser && (
        <ul className="profile-dropdown">
          <li>
            <LoginFormModal />
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <a
              href="https://github.com/alexsmaldone/BizarreBnb"
              target="_blank"
              rel="noreferrer"
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
