import { actionTypes } from "./action";
const initialState = {
  selected: [],
  updating: false,
  updated: true,
  error: {
    hasError: false,
    error: ""
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      return {
        ...state,
        selected: [...state.selected, action.item],
        updating: true,
        updated: false,
        error: {
          hasError: false,
          error: ""
        }
      };
    }
    case actionTypes.ADD_ITEM_TO_CART_SUCCESSFUL: {
      return {
        ...state,
        updating: false,
        updated: true
      };
    }
    case actionTypes.ADD_ITEM_TO_CART_FAILED: {
      return {
        ...state,
        updating: false,
        updated: false,
        error: {
          hasError: true,
          error: action.error
        }
      };
    }
    case actionTypes.REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        selected: [...state.selected.filter(item => item.sku !== action.sku)],
        updating: true,
        updated: false,
        error: {
          hasError: false,
          error: ""
        }
      };
    }
    case actionTypes.REMOVE_ITEM_FROM_CART_SUCCESSFUL: {
      return {
        ...state,
        updating: false,
        updated: true
      };
    }
    case actionTypes.REMOVE_ITEM_FROM_CART_FAILED: {
      return {
        ...state,
        updating: false,
        updated: false,
        error: {
          hasError: true,
          error: action.error
        }
      };
    }
    default: {
      return state;
    }
  }
};
