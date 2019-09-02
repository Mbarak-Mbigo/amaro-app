import { actionTypes } from './action';

const initialState = {
  data: [],
  isLoading: false,
  hasLoaded: false,
  error: {
    hasError: false,
    error: ''
  }
}

export default (state = initialState, action = {} ) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS: {
      return {
        ...state,
        isLoading: true,
        hasLoaded:false,
        error: {
          ...state.error,
          hasError: false,
          error: '',
        }
      }
    }
    case actionTypes.FETCH_PRODUCTS_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        hasLoaded:true,
        data: action.products,
      }
    }
    case actionTypes.FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasLoaded:true,
        error: {
          hasError: true,
          error: action.error,
        }
      }
    }
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        data: {
          ...state.products,
          ...action.product,
        }
      }
    default:
      return state
  }
}
