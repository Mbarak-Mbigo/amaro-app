import keyMirror from "keymirror";

const actionTypes = keyMirror({
  ADD_ITEM_TO_CART: null,
  ADD_ITEM_TO_CART_SUCCESSFUL: null,
  ADD_ITEM_TO_CART_FAILED: null,

  REMOVE_ITEM_FROM_CART: null,
  REMOVE_ITEM_FROM_CART_SUCCESSFUL: null,
  REMOVE_ITEM_FROM_CART_FAILED: null
});

const addItemToCart = item => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  item
});

const addItemToCartSuccessful = () => ({
  type: actionTypes.ADD_ITEM_TO_CART_SUCCESSFUL
});

const addItemToCartFailed = error => ({
  type: actionTypes.ADD_ITEM_TO_CART_FAILED,
  error
});

const removeItemfromCart = sku => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  sku
});

const removeItemfromCartSuccessful = () => ({
  type: actionTypes.ADD_ITEM_TO_CART_SUCCESSFUL
});

const removeItemfromCartFailed = error => ({
  type: actionTypes.ADD_ITEM_TO_CART_FAILED,
  error
});

export {
  actionTypes,
  addItemToCart,
  addItemToCartSuccessful,
  addItemToCartFailed,
  removeItemfromCart,
  removeItemfromCartSuccessful,
  removeItemfromCartFailed
};
