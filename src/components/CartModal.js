import React from "react";
import "../css/CartModal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function CartModal(props) {
  return (
    <>
      {props.isOpen && (
        <div className="overlay">
          <div className="cart_modal">
            <div>
              <span>Shopping Cart</span>

              <AiOutlineCloseCircle
                style={{ width: "25px", height: "25px" }}
                className="cursor"
                onClick={() => props.isClose(false)}
              />
            </div>
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
