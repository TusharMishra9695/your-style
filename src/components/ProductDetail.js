import React, { useEffect, useState } from "react";
import Productdescrip from "./Productdescrip";
import { useDispatch } from "react-redux";
import Review from "./Review";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { getParams } from "../utils/logics";
import { IoIosArrowForward } from "react-icons/io";
import { getAPI } from "../utils/apiCalls";
import "../css/ProductDetail.css";
import { amounttoAdd } from "../store/slice/addCart";

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
                <p>
                  {detail.title.length > 25
                    ? detail.title.slice(0, 24)
                    : detail.title}
                  ...
                </p>
              </div>
              <div>
                <h1>
                  ${Math.round(detail.price)}.00
                  <span>-</span> ${Math.round(detail.price * 1.5)}.00
                  <span>+ Free Shipping</span>
                </h1>
              </div>
              <div>
                <h2>
                  {detail.description.length > 250
                    ? detail.description.slice(0, 249)
                    : detail.description}
                  ...
                </h2>
              </div>
              <div>
                <div>
                  <input
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
                  />
                  <button onClick={() => Dispatch(amounttoAdd(quanObj))}>
                    add to cart
                  </button>
                  <Link to="/cart">Go to Cart</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="detail_downside">
            <div>
              <span
                onClick={() =>
                  setShowSec({ ...showSec, descrip: true, review: false })
                }
              >
                Description
              </span>
              <span
                onClick={() =>
                  setShowSec({ ...showSec, descrip: false, review: true })
                }
              >
                Reviews (0)
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
