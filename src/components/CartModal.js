import React from "react";
import "../css/CartModal.css";

export default function CartModal(props) {
  return (
    <>
      {props.isOpen && (
        <div className="overlay">
          <div className="cart_modal">
            <div>
              <span>Shopping Cart</span>
              <span onClick={() => props.isClose(false)}>**</span>
            </div>
            <hr />
            <div>
              <img src="" alt="product image" />
              <div>
                <p>Basic Grey jeans</p>
                <h2>1 * $150.00</h2>
              </div>
              <h3>***</h3>
            </div>
            <hr />
            <div>
              <span>Subtotal:</span>
              <span>$150.00</span>
            </div>
            <hr />
            <div>
              <button>View Cart</button>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
