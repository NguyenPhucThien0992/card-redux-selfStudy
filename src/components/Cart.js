import React from "react";
// import CartItem from "./CartItem";
import CartResult from "./CartResult";

class Card extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th />
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th />
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </section>
    );
  }
}
export default Card;
