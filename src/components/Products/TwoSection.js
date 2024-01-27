import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import "../../css/TwoSection.css";
import "../../css/Filter.css";
import { fetchData } from "../../store/slice/apiSlice";
import { Link } from "react-router-dom";
import { getAPI } from "../../utils/apiCalls";
import Pagination from "rc-pagination/lib/Pagination";
import Filter from "./Filter";
import { IoIosArrowForward } from "react-icons/io";
import { productContent } from "../../utils/content";

export default function TwoSection() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apiSlice.data);
  const [product, setProduct] = useState(state);

  useEffect(() => {
    if (window.location.pathname === "/everything") {
      if (!state) {
        dispatch(fetchData());
      }
    } else {
      // let end_point;
      // if (window.location.pathname === "/men") {
      //   end_point = "men's clothing";
      // } else if (window.location.pathname === "/women") {
      //   end_point = "women's clothing";
      // } else {
      //   end_point = "jewelery";
      // }
      getAPI(`${process.env.REACT_APP_BASE_URL}/products`).then((res) => {
        setProduct(res);
      });
    }
    console.log("everthing");
  }, []);

  return (
    <div className="two_sec">
      {/* <div className="search_sec">
          <input
            type="search"
            name="search"
            id="search"
            className="search_input"
            placeholder="Search products..."
          />
          <button className="btn_search">&gt;</button>
        </div> */}
      <div className="filter">
        <Filter />
      </div>
      <div className="pro_listing_sec">
        <div className="page_up__flex">
          <Link to="/" className="page_direction">
            <label className="page_direction__label">Home </label>
          </Link>
          <IoIosArrowForward className="page_direction__icon" />
          <Link to={window.location.pathname} className="page_direction">
            <label className="page_direction__label">
              {window.location.pathname.split("/")}
            </label>
          </Link>
        </div>
        <div className="page_description">
          <label className="page_description__label">{productContent} </label>
        </div>
        <div className="flex_sort__result">
          <div className="flex_sort__child1">
            <h3 className="store_type">
              {window.location.pathname.replace("/", "")}
            </h3>
            <p className="show_result">(Showing 1-12 of 31 results)</p>
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
        {window.location.pathname === "/everything" ? (
          !state ? null : (
            <div className="common_pro__listing">
              <div className="product_img">
                {state.map((item, index) => {
                  return <Product key={index} item={item} />;
                })}
              </div>
            </div>
          )
        ) : !product ? null : (
          <div className="common_pro__listing">
            <div className="product_img">
              {product.map((item, index) => {
                return <Product key={index} item={item} />;
              })}
            </div>
          </div>
        )}
        {/* <Pagination total={25} /> */}
      </div>
    </div>
  );
}
