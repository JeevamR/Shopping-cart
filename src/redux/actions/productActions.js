import { ActionTypes } from "../constants/action-types";

export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products
  };
};

export const incrementCount = (Product) => {
  return {
    type: ActionTypes.INCREMENT_COUNT,
    payload: Product
  };
};

export const decrementCount = (removedProduct) => {
  return {
    type: ActionTypes.DECREMENT_COUNT,
    payload: removedProduct
  };
};

export const changeSelectedProduct = (enableButtonFlag) => {
  return {
    type: ActionTypes.CHANGE_SELECTED_PRODUCT,
    payload: { enableButtonFlag }
  };
};

export const addToCart = (id) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    id
  };
};
