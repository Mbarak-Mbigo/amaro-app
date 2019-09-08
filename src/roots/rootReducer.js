import { combineReducers } from "redux";

// reducers list here
import products from "../app/products/reducer";
import cart from "../app/cart/reducer";

export default combineReducers({ products, cart });
