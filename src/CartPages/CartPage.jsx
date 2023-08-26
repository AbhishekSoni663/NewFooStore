import React, { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import CartItem from "../CartComponent/CartItem";
import "../CartComponent/Cart.css";

import { RingLoader } from "react-spinners";

const CartPage = () => {
  const { cart } = useContext(CartContext);



  return (
    <div className="containerA">
      <table className="main-table">
        <div className="table-detail">
          <thead className="table-head">
            <tr className="table-row">
              <th>Product Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
        </div>
        {cart.length === 0 ? (
          <>
            <div className="main-loader">
              {/* <RingLoader color="#e4fffa" size={249} /> */}
              <div className="typewriter">
                <div className="slide">
                  <i></i>
                </div>
                <div className="paper"></div>
                <div className="keyboard"></div>
              </div>
            </div>
          </>
        ) : (
          cart.map((cart) => <CartItem key={cart.id} cart={cart} />)
        )}
      </table>
    </div>
  );
};

export default CartPage;
