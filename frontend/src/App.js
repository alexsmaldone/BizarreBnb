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

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
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
          <Route path="/listings/:listingId">
            <ListingDetail />
          </Route>
          <Route path="/listings/:listingId/edit">
            <EditListingForm />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route>
            <h1>Page Not Found</h1>
            <h1>Page Not Found</h1>
            <h1>Page Not Found</h1>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
