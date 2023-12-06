import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getAPI } from "../utils/apiCalls";
import "../css/TwoSection.css";

export default function TwoSection() {
  const [product, setProduct] = useState("");
  useEffect(() => {
    if (!product) {
      getAPI(`${process.env.REACT_APP_BASE_URL}/products`).then((res) => {
        setProduct(res);
      });
    }
  }, []);

  return (
    <div className="two_sec">
      <div className="filter_section">
        <div className="search_sec">
          <input
            type="search"
            name="search"
            id="search"
            className="search_input"
            placeholder="Search products..."
          />
          <button className="btn_search">=</button>
        </div>
        <div className="filter_Sec">
          <p>Filter by Price</p>
          <input type="range" name="range" id="ranges" />
          <div>
            <button>Filter</button>
            <span> Price:$20 -- $290</span>
          </div>
        </div>
        <div className="categories">
          <p>Categories</p>
          <div>
            <h2>Accessories</h2>
            <span>(7)</span>
          </div>
          <div>
            <h2>Men</h2>
            <span>(7)</span>
          </div>
          <div>
            <h2>Women</h2>
            <span>(7)</span>
          </div>
        </div>
        {/* <div>
          <p>Our Best Sellers</p>
        </div> */}
      </div>
      <div className="pro_listing_sec">
        <div>
          <h3 className="store_type">Home/ Store</h3>
        </div>
        <div className="flex_sort__result">
          <div className="flex_sort__child1">
            <p className="show_result">Showing 1-12 of 31 results</p>
          </div>
          <div className="flex_sort__child2">
            <select name="sorting" id="sort" className="sort_select">
              <option value="">Default Sorting</option>
              <option value="">average rating</option>
              <option value="">latest</option>
              <option value="">low to high</option>
              <option value="">high to low</option>
            </select>
          </div>
        </div>
        {!product ? null : (
          <div className="common_pro__listing">
            <div className="product_img">
              {product.slice(0, 12).map((item, index) => {
                return <Product key={index} item={item} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
