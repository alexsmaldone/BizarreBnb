const LOAD_ALL = "listings/LOAD_ALL";
const LOAD_ONE = "listings/LOAD_ONE";

const loadAll = (listings) => ({
  type: LOAD_ALL,
  listings,
});

const loadOne = (listing) => ({
  type: LOAD_ONE,
  listing,
});

export const getListings = () => async (dispatch) => {
  const response = await fetch("/api/listings");

  if (response.ok) {
    const listings = await response.json();
    dispatch(loadAll(listings));
  }
};

export const getOneListing = (id) => async (dispatch) => {
  const response = await fetch(`/api/listings/${id}`);

  if (response.ok) {
    const listing = await response.json();
    dispatch(loadOne(listing));
  }
};

const initialState = {
  list: [],
  images: [],
};

const listingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL: {
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
        list: action.listing[0],
        images: action.listing[1],
      };
    }
    default:
      return state;
  }
};

export default listingsReducer;
