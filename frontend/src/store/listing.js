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

const listingsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD: {
      const allListings = {};
      action.listings.forEach((listing) => {
        allListings[listing.id] = listing;
      });
      return {
        ...allListings,
        ...state,
      };
    }
    default:
      return state;
  }
};

export default listingsReducer;
