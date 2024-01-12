import React from "react";
import { Link } from "react-router-dom";
import "../css/TopReviewed.css";
import { FaStar } from "react-icons/fa";

export default function TopReviewedProduct() {
  return (
    <div className="structure_top__review">
      <div className="topreview_heading">
        <h1>Most Reviewed Products</h1>
      </div>
      <hr />
      <div className="top_review_sec2_flex">
        <div className="top_review__flex">
          <div className="img_top__review">
            <img
              src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
              alt="product img"
              className="pro_img cursor"
            />
          </div>
          <div className="prod">
            <Link to={window.location.pathname}>
              <h2 className="cursor">Title</h2>
              <h4>
                <span className="rating">
                  4.8 <FaStar style={{ color: "white" }} />
                </span>
                (17 Ratings & 2 Reviews)
              </h4>
            </Link>
            <span className="extra_prod">${Math.round(200)} </span>
            <span>${Math.round(200 - (200 * 10) / 100)}</span>
            <h5 className="percentage_off">37% off</h5>
            <div className="extra_top_padding">
              <span>Material : Brand Name</span>
            </div>
          </div>
        </div>
        <div className="top_review__flex">
          <div className="img_top__review">
            <img
              src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
              alt="product img"
              className="pro_img cursor"
            />
          </div>
          <div className="prod">
            <Link to={window.location.pathname}>
              <h2 className="cursor">Title</h2>
              <h4>
                <span className="rating">
                  4.8 <FaStar style={{ color: "white" }} />
                </span>
                (17 Ratings & 2 Reviews)
              </h4>
            </Link>
            <span className="extra_prod">${Math.round(200)} </span>
            <span>${Math.round(200 - (200 * 10) / 100)}</span>
            <h5 className="percentage_off">37% off</h5>
            <div className="extra_top_padding">
              <span>Material : Brand Name</span>
            </div>
          </div>
        </div>
        <div className="top_review__flex">
          <div className="img_top__review">
            <img
              src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
              alt="product img"
              className="pro_img cursor"
            />
          </div>
          <div className="prod">
            <Link to={window.location.pathname}>
              <h2 className="cursor">Title</h2>
              <h4>
                <span className="rating">
                  4.8 <FaStar style={{ color: "white" }} />
                </span>
                (17 Ratings & 2 Reviews)
              </h4>
            </Link>
            <span className="extra_prod">${Math.round(200)} </span>
            <span>${Math.round(200 - (200 * 10) / 100)}</span>
            <h5 className="percentage_off">37% off</h5>
            <div className="extra_top_padding">
              <span>Material : Brand Name</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
