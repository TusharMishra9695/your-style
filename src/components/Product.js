import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { image, title, category, price, id } = props.item;
  return (
    <div className="prod">
      <Link
        to={`${
          window.location.pathname == "/" ? "home" : window.location.pathname
        }/${title}?id=${id}`}
      >
        <img src={image} alt="product img" className="pro_img cursor" />
      </Link>
      <h2 className="cursor">{title}</h2>
      <h4>{category}</h4>
      <span className="extra_prod">${Math.round(price)} </span>
      <span>${Math.round(price - (price * 10) / 100)}</span>
    </div>
  );
}
