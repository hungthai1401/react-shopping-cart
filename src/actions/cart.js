import { ADD, INCREMENT_CART, DECREMENT_CART, REMOVE } from "../constants";

export const addToCart = item => {
  return {
    type: ADD,
    item: item
  };
};

export const incrementCart = id => {
  return {
    type: INCREMENT_CART,
    id: id
  };
};

export const decrementCart = id => {
  return {
    type: DECREMENT_CART,
    id: id
  };
};

export const removeCart = id => {
  return {
    type: REMOVE,
    id: id
  };
}
