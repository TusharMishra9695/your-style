import React, { useEffect, useState } from "react";
import Productdescrip from "./Productdescrip";
import Review from "./Review";
import Nav from "./Nav";
import Footer from "./Footer";
import { getParams } from "../utils/logics";
import { getAPI } from "../utils/apiCalls";

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
          <div>
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
                <p>{detail.title}</p>
              </div>
              <div>
                <h1>
                  ${Math.round(detail.price)}
                  <span>-</span> ${Math.round(detail.price * 1.5)}+{" "}
                  <span>Free Shipping</span>
                </h1>
              </div>
              <div>
                <h2>
                  {detail.description.length > 251
                    ? detail.description.slice(0, 250)
                    : detail.description}
                  ...
                </h2>
              </div>
              <div>
                <hr />
                <div>
                  <span>1</span>
                  <span>add to cart</span>
                </div>
              </div>
            </div>
          </div>
          <div className="detail_downside">
            <hr />
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
                Reviews
              </span>
            </div>
          </div>
          {showSec.descrip ? (
            <Productdescrip description={detail.description} />
          ) : null}
          {showSec.review ? <Review /> : null}
        </div>
      )}
      <Footer />
    </div>
  );
}
