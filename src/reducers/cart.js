import { ADD, INCREMENT_CART, DECREMENT_CART, REMOVE } from "../constants";

const initState = [];
const cart = (state = initState, action) => {
  let item;
  const id = action.id;
  switch (action.type) {
    case ADD:
      let carts;
      item = action.item;
      const cart = state.find(cart => cart.id === item.id);
      if (cart) {
        cart.quantity++;
        carts = [...state]
      } else {
        carts = [
          ...state,
          {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: 1
          }
        ]
      }
      return carts;
    case INCREMENT_CART:
      item = state.find(item => item.id === id);
      item.quantity++;
      return [...state];
    case DECREMENT_CART:
      item = state.find(item => item.id === id);
      item.quantity--;
      return state.filter(item => item.quantity > 0);
    case REMOVE:
      return state.filter(item => item.id !== id);
    default:
      return state;
  }
};

export default cart;
