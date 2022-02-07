const LOAD = "listings/LOAD";

const load = (listings) => ({
  type: LOAD,
  listings,
});

export const getListings = () => async (dispatch) => {
  const response = await fetch("/api/listings");

  if (response.ok) {
    const listings = await response.json();
    dispatch(load(listings));
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

      action.listings[0].forEach((listing) => {
        allListings[listing.id] = listing;
      });
      return {
        ...allListings,
        ...state,
        list: action.listings[0],
        images: action.listings[1],
      };
    }
    default:
      return state;
  }
};

export default listingsReducer;
