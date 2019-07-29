import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import * as Message from "../constants/Messages";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import {
  actDeleteProductInCart,
  actChangeMessage,
  actUpdateProductInCart
} from "../actions/index";

class CartContainer extends React.Component {
  showCartItem = cart => {
    var {
      onDeleteProductInCard,
      onChangeMessage,
      onUpdateProductInCart
    } = this.props;
    var result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCard={onDeleteProductInCard}
            onChangeMessage={onChangeMessage}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };

  showToTalAmout = cart => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart}> </CartResult>;
    }
    return result;
  };

  render() {
    var { cart } = this.props;

    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showToTalAmout(cart)}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  onDeleteProductInCard: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired
};

const mapStateToProp = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProp = (dispatch, props) => {
  return {
    onDeleteProductInCard: product => {
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    }
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProp
)(CartContainer);
