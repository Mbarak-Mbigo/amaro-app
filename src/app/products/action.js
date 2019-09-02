import keyMirror from 'keymirror';

const actionTypes = keyMirror({
  ADD_PRODUCT: null,
  ADD_PRODUCT_SUCCESSFUL:null,
  ADD_PRODUCT_FAILED: null,

  FETCH_PRODUCTS: null,
  FETCH_PRODUCTS_SUCCESSFUL: null,
  FETCH_PRODUCTS_FAILED: null,

  DELETE_PRODUCT: null,
  DELETE_PRODUCT_SUCCESSFUL: null,
  DELETE_PRODUCT_FAILED: null,

  EDIT_PRODUCT: null,
  EDIT_PRODUCT_SUCCESSFUL: null,
  EDIT_PRODUCT_FAILED: null,
})

// Add
const addProduct = (product) => ({
  type: actionTypes.ADD_PRODUCT,
  product,
});
const addProductSucceeded = (product) => ({
  type: actionTypes.ADD_PRODUCT_SUCCESSFUL,
  product,
});
const addProductFailed = (product) => ({
  type: actionTypes.ADD_PRODUCT_FAILED,
  product,
});

// Fetch
const fetchProduct = () => ({
  type: actionTypes.FETCH_PRODUCTS,
});

const fetchProductSucceeded = (products) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESSFUL,
  products,
});

const fetchProductFailed = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_FAILED,
  error,
});

// Edit
const editProduct = (productId) => ({
  type: actionTypes.EDIT_PRODUCT,
  productId
});

const editProductSucceeded = (productId) => ({
  type: actionTypes.EDIT_PRODUCT_SUCCESSFUL,
  productId
});

const editProductFailed = (productId) => ({
  type: actionTypes.EDIT_PRODUCT_FAILED,
  productId
});

// Delete
const deleteProduct = (productId) => ({
  type: actionTypes.DELETE_PRODUCT,
  productId
});

const deleteProductSucceeded = (productId) => ({
  type: actionTypes.DELETE_PRODUCT_SUCCESSFUL,
  productId
});

const deleteProductFailed = (productId) => ({
  type: actionTypes.DELETE_PRODUCT_FAILED,
  productId
});

export {
  actionTypes,
  addProduct,
  addProductSucceeded,
  addProductFailed,
  fetchProduct,
  fetchProductSucceeded,
  fetchProductFailed,
  editProduct,
  editProductSucceeded,
  editProductFailed,
  deleteProduct,
  deleteProductSucceeded,
  deleteProductFailed,
}

