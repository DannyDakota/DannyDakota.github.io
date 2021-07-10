import Axios from 'axios';
import {
  BOOKMARK_ADD_ITEM,
  BOOKMARK_REMOVE_ITEM,
  BOOKMARK_SAVE_SHIPPING_ADDRESS,
  BOOKMARK_SAVE_PAYMENT_METHOD,
  BOOKMARK_ADD_ITEM_FAIL,
} from '../constants/bookmarkConstants';

export const addToBookmark = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  const {
    bookmark: { bookmarkItems },
  } = getState();
  if (bookmarkItems.length > 0 && data.seller._id !== bookmarkItems[0].seller._id) {
    dispatch({
      type: BOOKMARK_ADD_ITEM_FAIL,
      payload: `Can't Add To Bookmark. Buy only from ${bookmarkItems[0].seller.seller.name} in this order`,
    });
  } else {
    dispatch({
      type: BOOKMARK_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      'bookmarkItems',
      JSON.stringify(getState().bookmark.bookmarkItems)
    );
  }
};

export const removeFromBookmark = (productId) => (dispatch, getState) => {
  dispatch({ type: BOOKMARK_REMOVE_ITEM, payload: productId });
  localStorage.setItem('bookmarkItems', JSON.stringify(getState().bookmark.bookmarkItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: BOOKMARK_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: BOOKMARK_SAVE_PAYMENT_METHOD, payload: data });
};
