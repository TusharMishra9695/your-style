import React from "react";
import "../../css/Review.css";
import { FaStar } from "react-icons/fa";

export default function Review(props) {
  return (
    <div className="review">
      <div className="review_sec01">
        <div className="prod extra_padding ">
          <h4>
            <span className="rating">
              4.8 <FaStar style={{ color: "white" }} />
            </span>
            17 ratings & 2 reviews
          </h4>
        </div>
        <div className="rgt_review">
          <span>Write a Review</span>
        </div>
      </div>
      <div className="review_sec02"></div>
    </div>
  );
}
