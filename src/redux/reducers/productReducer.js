import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  count: 0,
  enableButton: 0,
  selectedProduct: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, products: action.payload };
    case ActionTypes.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionTypes.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };

    case ActionTypes.CHANGE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: [...state.selectedProduct, action.payload]
      };
    default:
      return state;
  }
};
