import React from "react";

export default function Product(props) {
  const { image, title, category, price } = props.item;
  return (
    <div className="prod">
      <img src={image} alt="" className="pro_img cursor" />
      <h2 className="cursor">{title}</h2>
      <h4>{category}</h4>
      <span className="extra_prod">${Math.round(price)} </span>
      <span>${Math.round(price - (price * 10) / 100)}</span>
    </div>
  );
}
