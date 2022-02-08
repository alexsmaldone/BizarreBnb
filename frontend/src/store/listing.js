const LOAD = "listings/LOAD";
const LOAD_ONE = "listings/LOAD_ONE";

const load = (listings) => ({
  type: LOAD,
  listings,
});

const loadOneListing = (listing) => ({
  type: LOAD_ONE,
  listing,
});

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
  const response = await fetch("/api/listings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const newListing = await response.json();
    dispatch(loadOneListing(newListing));
    return newListing;
  }
};

const initialState = {
  list: [],
  images: [],
};

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
      if (!state[action.listing]) {
        return {
          ...state,
          list: action.listing,
        };
      }
    }

    default:
      return state;
  }
};

export default listingsReducer;
