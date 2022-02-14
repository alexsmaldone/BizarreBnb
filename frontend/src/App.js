// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Homepage from "./components/HomePage";
import ListingDetail from "./components/ListingDetail";
import MyListings from "./components/MyListings";
import NewListingForm from "./components/NewListingForm";
import EditListingForm from "./components/EditListingForm";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/404Page/404Page";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => window.scroll({ top: 0, left: 0, behavior: "smooth" }));

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/listings/my-listings">
              <MyListings />
            </Route>
            <Route path="/listings/new">
              <NewListingForm />
            </Route>
            <Route exact path="/listings/:listingId">
              <ListingDetail />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </ScrollToTop>
      )}
    </>
  );
}

export default App;
