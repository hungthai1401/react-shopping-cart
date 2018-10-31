import { INCREMENT_PRODUCT, DECREMENT_PRODUCT } from "../constants";
import products from "../constants/data";

const initState = products;

const product = (state = initState, action) => {
  let item;
  switch (action.type) {
    case INCREMENT_PRODUCT:
      item = state.find(product => product.id === action.id);
      item.quantity+=action.quantity;
      return [...state];
    case DECREMENT_PRODUCT:
      item = state.find(product => product.id === action.id);
      item.quantity--;
      return [...state];
    default:
      return state;
  }
};

export default product;
