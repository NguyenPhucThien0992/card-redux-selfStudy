import React from "react";
import Header from "./components/Header";
// import Products from "./components/Products";
import ProductsContainer from "./container/ProductsContainer";
import Message from "./components/Messsage";
// import Cart from "./components/Cart";
import CartContainer from "./container/CartContainer";
import Footer from "./components/Footer";
import MessageContainer from "./container/MessageContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessageContainer />
            <CartContainer />
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
export default App;
