import React from "react";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../components/Footer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { amounttoRemove } from "../store/slice/addCart";

export default function Cart() {
  const value = useSelector((state) => state.cartSlice.value);
  const dispatch = useDispatch();
  window.scrollTo({ top: 0 });
  console.log(value, "details");
  return (
    <div>
      <Nav />
      {value && (
        <div className="common_inside">
          <div className="center_child ">
            <h1 className="design_cart">Cart</h1>
          </div>
          <div className="design_table">
            <table>
              <thead>
                <tr>
                  <th colSpan={3}>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              {value.map((item, index) => {
                const { quantity, quantityDetail } = item;
                return (
                  <tbody key={index}>
                    <tr>
                      <td>
                        <AiOutlineCloseCircle
                          className="cursor"
                          style={{ width: "25px", height: "25px" }}
                          onClick={() =>
                            dispatch(amounttoRemove(quantityDetail.id))
                          }
                        />
                      </td>
                      <td>
                        <img
                          src={quantityDetail.image}
                          alt="prod img.."
                          className="cart_img"
                        />
                      </td>
                      <td>
                        {quantityDetail.title &&
                        quantityDetail.title.length > 20
                          ? quantityDetail.title.slice(0, 19)
                          : quantityDetail.title}
                      </td>
                      <td>${Math.round(quantityDetail.price)}</td>
                      <td>
                        <span>{quantity}</span>
                      </td>
                      <td>${Math.round(quantityDetail.price)}</td>
                    </tr>
                  </tbody>
                );
              })}
              <tfoot>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="coupon"
                      id="coupon"
                      placeholder="Coupon code"
                      className="coupon"
                    />
                  </td>
                  <td>
                    <span className="cursor common_cart__btn">
                      apply coupon
                    </span>
                  </td>
                  <td>
                    <button className="cursor common_cart__btn">
                      update cart
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="design_checkout">
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
                    <button className="cursor common_cart__btn">
                      checkout
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
