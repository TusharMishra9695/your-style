import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

export default function Product(props) {
  const { image, title, category, price, id } = props.item;
  return (
    <div className="prod">
      <Link
        to={`${
          window.location.pathname == "/" ? "home" : window.location.pathname
        }/${title}?id=${id}`}
      >
        {/* <Carousel>
          <div className="prod_carousel">
            <img src={image} alt="product img" className="pro_img cursor" />
          </div>
          <div className="prod_carousel">
            <img src={image} alt="product img" className="pro_img cursor" />
          </div>
        </Carousel> */}
        <div className="bestseller">
          <span className="bestseller_span"> bestseller</span>
          <div>
            <GoHeart className="goheart_icon" />
            {/* <GoHeartFill className="goheart_fill " /> */}
          </div>
        </div>
        {/* <div className="out_of__stock">
          <h1>Out of Stock</h1>
        </div> */}
        <img src={image} alt="product img" className="pro_img cursor" />
      </Link>
      <h1 className="sponsored">Sponsored</h1>
      <h2 className="cursor">{title}</h2>
      <h3>Brand Name</h3>
      <h4>
        <span className="rating">4.8</span>(66)
      </h4>
      <span className="extra_prod">${Math.round(price)} </span>
      <span>${Math.round(price - (price * 10) / 100)}</span>
      <h5 className="percentage_off">37% off</h5>
    </div>
  );
}
