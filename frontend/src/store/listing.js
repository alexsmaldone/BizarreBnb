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
    default:
      return state;
  }
};

export default listingsReducer;
