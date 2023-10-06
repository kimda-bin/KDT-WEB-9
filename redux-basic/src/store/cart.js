import { createStore } from "redux";

export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      const newCart = { name: action.name, price: action.price, id: action.id };
      return [...state, newCart];
    case DELETE_CART:
      return state.filter((element) => element.id !== action.id);
    default:
      return state;
  }
};

//스토어
const store = createStore(reducer);

export default store;
