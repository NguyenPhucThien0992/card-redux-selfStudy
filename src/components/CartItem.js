import React from "react";
import * as message from "../constants/Messages";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  showSubTotal = (price, quantity) => {
    return price * quantity;
  };
  onDelete = product => {
    var { onDeleteProductInCard } = this.props;
    onDeleteProductInCard(product);
    this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };
  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      var { onUpdateProductInCart, onChangeMessage } = this.props;
      this.setState({
        quantity: quantity
      });
      onUpdateProductInCart(product, quantity);
      onChangeMessage(message.MSG_UPDATE_CART_SUCCESS);
    }
  };
  render() {
    var { item, index } = this.props;
    var { quantity } = item;

    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
            >
              <a href="google">—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
            >
              <a href="google">+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantity)} $</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
