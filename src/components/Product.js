import React from "react";

export default function Product(props) {
  const { thumbnail, title, category, price } = props.item;
  return (
    <div className="prod">
      <img src={thumbnail} alt="" className="pro_img cursor" />
      <h2 className="cursor">{title}</h2>
      <h4>{category}</h4>
      <span className="extra_prod">${price - (price * 10) / 100} </span>
      <span>${price}</span>
    </div>
  );
}
