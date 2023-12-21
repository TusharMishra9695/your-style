import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Cart() {
  window.scrollTo({ top: 0 });
  return (
    <div>
      <Nav />
      <div className="common_inside">
        <div className="center_child ">
          <h1 className="design_cart">Cart</h1>
        </div>
        <div className="design_table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>--</td>
                <td>
                  <img src="" alt="prod img.." />
                </td>
                <td>Basic Gray Jeans</td>
                <td>$150.00</td>
                <td>
                  <span>1</span>
                </td>
                <td>$150.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <input type="text" name="coupon" id="coupon" />
                </td>
                <td>
                  <span>apply coupon</span>
                </td>
                <td>
                  <button>update cart</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Cart totals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>subtotal</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>total</td>
                <td>$150.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <button>checkout</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
