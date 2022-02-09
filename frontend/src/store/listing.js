import { csrfFetch } from "./csrf";

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Variables
// todo ——————————————————————————————————————————————————————————————————————————————————

const LOAD = "listings/LOAD";
const LOAD_ONE = "listings/LOAD_ONE";
const ADD_ONE = "listings/ADD_ONE";
const UPDATE = "listings/UPDATE";
const DELETE = "listings/DELETE";

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Action Creators
// todo ——————————————————————————————————————————————————————————————————————————————————

const load = (listings) => ({
  type: LOAD,
  listings,
});

const loadOneListing = (listing) => ({
  type: LOAD_ONE,
  listing,
});

const addOneListing = (listing) => ({
  type: ADD_ONE,
  listing,
});

const editListing = (listing) => ({
  type: UPDATE,
  listing,
});

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————

export const getListings = () => async (dispatch) => {
  const response = await fetch("/api/listings");

  if (response.ok) {
    const listings = await response.json();
    dispatch(load(listings));
  }
};

export const getOneListing = (id) => async (dispatch) => {
  const response = await fetch(`/api/listings/${id}`);

  if (response.ok) {
    const listing = await response.json();
    dispatch(loadOneListing(listing));
    return listing;
  }
};

export const getMyListings = (userId) => async (dispatch) => {
  const response = await fetch(`/api/listings/my-listings`);

  if (response.ok) {
    const listing = await response.json();
    dispatch(load(listing));
    return listing;
  }
};

export const createListing = (payload) => async (dispatch) => {
  const response = await csrfFetch("/api/listings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const newListing = await response.json();
    dispatch(addOneListing(newListing));
    return newListing;
  }
};

export const updateListing = (listing) => async (dispatch) => {
  const response = await csrfFetch(`/api/listings/${listing.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(listing),
  });

  if (response.ok) {
    const updatedListing = await response.json();
    dispatch(editListing(updatedListing));
    return updatedListing;
  }
};

const initialState = {
  list: [],
  images: [],
};

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allListings = {};
      const imagesArray = action.listings[1];
      const imagesObj = {};

      for (let i = 0; i < imagesArray.length; i++) {
        if (!imagesObj[imagesArray[i].listingId]) {
          imagesObj[imagesArray[i].listingId] = [imagesArray[i].url];
        } else {
          imagesObj[imagesArray[i].listingId].push(imagesArray[i].url);
        }
      }

      action.listings[0].forEach((listing) => {
        allListings[listing.id] = listing;
      });
      return {
        ...allListings,
        ...state,
        list: action.listings[0],
        images: imagesObj,
      };
    }

    case LOAD_ONE: {
      return {
        ...state,
        list: action.listing,
      };
    }

    case ADD_ONE: {
      const newState = {
        ...state,
      };
      newState.listing.list.push(action.listing);
      return newState;
    }

    case UPDATE: {
      const newState = {
        ...state,
        list: [...state.list],
      };

      newState.list[0] = action.listing;
      return newState;
    }

    default:
      return state;
  }
};

export default listingsReducer;
