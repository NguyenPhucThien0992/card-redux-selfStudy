import * as types from "../constants/ActionTypes";

var data = JSON.parse(localStorage.getItem("CART"));

var initialState = data ? data : [];

// var initialState = [
//   {
//     product: {
//       id: 1,
//       name: "Iphone 7 plus",
//       image:
//         "https://24hstore.vn/images/products/2019/06/07/large/iphone-7-plus_1552272438_1559895556.jpg",
//       description: "Sản phẩm do apple sản xuất",
//       price: 500,
//       inventory: 10,
//       rating: 5
//     },
//     quantity: 5
//   },
//   {
//     product: {
//       id: 3,
//       name: "Oppo neo 7",
//       image:
//         "https://media-ak.static-adayroi.com/400_400/80/h17/hc4/26624222330910.jpg",
//       description: "Sản phẩm do Oppo sản xuất",
//       price: 400,
//       inventory: 5,
//       rating: 5
//     },
//     quantity: 8
//   }
// ];

const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.DELETE_PRODUCT_IN_CARD:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cart;
