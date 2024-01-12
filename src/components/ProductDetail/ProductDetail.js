import React, { useEffect, useState } from "react";
import Productdescrip from "./Productdescrip";
import { useDispatch } from "react-redux";
import Review from "./Review";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { getParams } from "../../utils/logics";
import { IoIosArrowForward } from "react-icons/io";
import { getAPI } from "../../utils/apiCalls";
import "../../css/ProductDetail.css";
import { amounttoAdd } from "../../store/slice/addCart";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiPowerLightning } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
export default function ProductDetail() {
  const Dispatch = useDispatch();
  const [showSec, setShowSec] = useState({
    descrip: true,
    review: false,
  });
  const [detail, setdetail] = useState("");
  const [quanObj, setquanObj] = useState({
    data: "",
    quantity: "",
  });
  useEffect(() => {
    let url = `${process.env.REACT_APP_BASE_URL}/products/${getParams()}`;
    getAPI(url).then((res) => {
      setdetail(res);
    });
  }, []);
  window.scrollTo({ top: 0 });

  return (
    <div>
      <Nav />
      {detail && (
        <div className="common_inside">
          <div className="detail_sec00">
            <div className="detail_sec01">
              <img src={detail.image} alt="product image" />
            </div>
            <div className="detail_sec02">
              <div className="page_direction">
                <Link to="/">
                  <label className="page_direction__label">Home </label>
                </Link>
                <IoIosArrowForward className="page_direction__icon" />
                <Link to={window.location.pathname} className="page_direction">
                  <label className="page_direction__label">
                    {detail.title}
                  </label>
                </Link>
              </div>
              <div>
                <p>Brand Name</p>
                <label>
                  {/* {detail.title.length > 25
                    ? detail.title.slice(0, 24)
                    : detail.title} */}
                  {detail.title}
                </label>
              </div>
              <div>
                <h1>
                  ₹{Math.round(detail.price)}.00
                  <span>₹{Math.round(detail.price * 1.5)}.00</span>
                  <label>77% off</label>
                </h1>
              </div>
              <div className="prod">
                <h4>
                  <span className="rating">
                    4.8 <FaStar style={{ color: "white" }} />
                  </span>
                  17 ratings & 2 reviews
                </h4>
              </div>
              <div className="prod_detail__check">
                <div>
                  <input type="number" name="check_pincode" id="pincode" />
                  <p>check availability</p>
                </div>
                <h5>
                  Same Day Delivery | Free <span>₹40</span>
                </h5>
                <h6>If ordered before 6:00 PM</h6>
              </div>
              <div className="prod_detail__offers">
                <p>Available Offers</p>
                <h5>
                  <BiSolidOffer /> Bank offer{" "}
                  <span>
                    10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000
                    on orders of ₹10,000 and aboveT&C
                  </span>
                </h5>
              </div>
              <div className="detail_left__5">
                {/* <input
                    type="number"
                    placeholder="1"
                    value={quanObj.quantity}
                    onChange={(e) =>
                      setquanObj({
                        ...quanObj,
                        data: detail,
                        quantity: e.target.value,
                      })
                    }
                  /> */}
                <button onClick={() => Dispatch(amounttoAdd(quanObj))}>
                  <FaCartShopping style={{ marginRight: "5px" }} /> add to cart
                </button>
                <button
                  onClick={() => Dispatch(amounttoAdd(quanObj))}
                  style={{ backgroundColor: "red" }}
                >
                  <GiPowerLightning style={{ marginRight: "5px" }} /> Buy now
                </button>
                <Link to="/cart">Go to Cart</Link>
              </div>
              <div className="prod_seller__detail">
                <p>Seller</p>
                <div>
                  <h4>Seller nam2</h4>
                  <h5> Seller rating</h5>
                  <ul>
                    <li>10 day return policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="detail_downside">
            <div>
              <span
                onClick={() =>
                  setShowSec({ ...showSec, descrip: false, review: true })
                }
              >
                Reviews (0)
              </span>
              <span
                onClick={() =>
                  setShowSec({ ...showSec, descrip: true, review: false })
                }
              >
                product details
              </span>
            </div>
          </div>
          {showSec.descrip ? (
            <Productdescrip description={detail.description} />
          ) : null}
          {showSec.review ? <Review title={detail.title} /> : null}
        </div>
      )}
      <Footer />
    </div>
  );
}
