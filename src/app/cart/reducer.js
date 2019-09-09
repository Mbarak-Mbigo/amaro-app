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

const itemAlreadySelected = (sku, selectedPool) => {
  const item = selectedPool.find(item => item.sku === sku);
  return selectedPool.indexOf(item);
};

const updateQuantity = (index, arr) => {
  const firstPart = arr.slice(0, index);
  const secondPart = arr.slice(index + 1);
  const updatedItem = {
    ...arr[index],
    quantity: arr[index].quantity + 1
  };

  return [...firstPart, updatedItem, ...secondPart];
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      const index = itemAlreadySelected(action.item.sku, state.selected);

      return {
        ...state,
        selected:
          index === -1
            ? [...state.selected, action.item]
            : [...updateQuantity(index, state.selected)],
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
