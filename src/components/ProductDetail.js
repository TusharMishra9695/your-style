import React, { useEffect, useState } from "react";
import Productdescrip from "./Productdescrip";
import Review from "./Review";
import Nav from "./Nav";
import Footer from "./Footer";
import { getParams } from "../utils/logics";
import { getAPI } from "../utils/apiCalls";
import "../css/ProductDetail.css";

export default function ProductDetail() {
  const [showSec, setShowSec] = useState({
    descrip: true,
    review: false,
  });
  const [detail, setdetail] = useState("");
  useEffect(() => {
    let url = `${process.env.REACT_APP_BASE_URL}/products/${getParams()}`;
    getAPI(url).then((res) => {
      setdetail(res);
    });
  }, []);

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
              <div>
                <span>
                  {decodeURIComponent(window.location.pathname).replace(
                    "/",
                    ""
                  )}
                </span>
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
                  <input type="number" placeholder="1" value={"1"} />
                  <button disabled>add to cart</button>
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
