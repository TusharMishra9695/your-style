import React from "react";

export default function Productdescrip(props) {
  return (
    <div className=" prod_descr">
      <div>
        <h1>Product Description</h1>
      </div>
      <div>
        <h2>{props.description}</h2>
      </div>
    </div>
  );
}
