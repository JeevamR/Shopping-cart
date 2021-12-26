// Combining all reducers
import { combineReducers } from "redux";
import { productReducer } from "../reducers/productReducer";

// Combining all reducers
const reducers = combineReducers({
  allProducts: productReducer
});

export default reducers;
