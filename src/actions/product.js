import { INCREMENT_PRODUCT, DECREMENT_PRODUCT } from "../constants";

export const incrementProduct = (id, quantity) => {
  return {
    type: INCREMENT_PRODUCT,
    id: id,
    quantity: quantity
  };
};

export const decrementProduct = id => {
  return {
    type: DECREMENT_PRODUCT,
    id: id
  };
};
