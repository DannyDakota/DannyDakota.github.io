import {
  BOOKMARK_ADD_ITEM,
  BOOKMARK_ADD_ITEM_FAIL,
  BOOKMARK_EMPTY,
  BOOKMARK_REMOVE_ITEM,
  BOOKMARK_SAVE_PAYMENT_METHOD,
  BOOKMARK_SAVE_SHIPPING_ADDRESS,
} from '../constants/bookmarkConstants';

export const bookmarkReducer = (state = { bookmarkItems: [] }, action) => {
  switch (action.type) {
    case BOOKMARK_ADD_ITEM:
      const item = action.payload;
      const existItem = state.bookmarkItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          error: '',
          bookmarkItems: state.bookmarkItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, error: '', bookmarkItems: [...state.bookmarkItems, item] };
      }
    case BOOKMARK_REMOVE_ITEM:
      return {
        ...state,
        error: '',
        bookmarkItems: state.bookmarkItems.filter((x) => x.product !== action.payload),
      };
    case BOOKMARK_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case BOOKMARK_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case BOOKMARK_ADD_ITEM_FAIL:
      return { ...state, error: action.payload };
    case BOOKMARK_EMPTY:
      return { ...state, error: '', bookmarkItems: [] };
    default:
      return state;
  }
};
