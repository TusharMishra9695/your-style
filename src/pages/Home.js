import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navContent } from "../utils/content";
import HomeSection1 from "../components/HomeSection1";
import Product from "../components/Product";
import { homeSection1 } from "../utils/content";
import { featured } from "../utils/content";
import axios from "axios";

export default function Home() {
  const [product, setProduct] = useState("");
  useEffect(() => {
    if (!product) {
      axios.get("https://dummyjson.com/products").then((res) => {
        setProduct(res.data.products);
        console.log(res.data.products, "res");
      });
    }
  }, []);
  if(!product)
  return null;
  return (
    <div className="home_p1">
      <div className="home_p2">
        <div className="child1_p2">
          {/* <img src="../../public/imgfiles/logo1-free-img.png" alt="" /> */}
          <ul className="CHILD1_P2_ul">
            <li>
              <Link className="CHILD1_P2_D1_A cursor">
                {navContent.everything}
              </Link>
            </li>
            <li>
              <Link className="CHILD1_P2_D1_A cursor">{navContent.women}</Link>
            </li>
            <li>
              <Link className="CHILD1_P2_D1_A cursor">{navContent.men}</Link>
            </li>
            <li>
              <Link className="CHILD1_P2_D1_A cursor">
                {navContent.accessories}
              </Link>
            </li>
          </ul>
          <ul className="CHILD1_P2_ul2">
            <li>
              <Link className="CHILD2_P2_D1_A cursor">{navContent.about}</Link>
            </li>
            <li>
              <Link className="CHILD2_P2_D1_A cursor">
                {navContent.contact}
              </Link>
            </li>
            <li>
              <Link className="CHILD2_P2_D1_A cursor">{navContent.price}</Link>
            </li>
          </ul>
        </div>
        <div className="home_p3">
          <div className="child1_p3">
            <span className="child1_p3_t1">Raining Offers For Hot Summer!</span>
          </div>
          <div className="child1_p3">
            <span className="child1_p3_t2">25% Off On All Products</span>
          </div>
          <div className="child1_p3">
            <span className="child1_p3_t3 cursor">shop now</span>
            <span className="child1_p3_t4 cursor">find more</span>
          </div>
        </div>
      </div>
      <div className="home_section1">
        {homeSection1.map((item, index) => {
          return <HomeSection1 key={index} item={item} />;
        })}
      </div>
      <div className="featured_products">
        <div className="inside_pro">
          <h1>{featured.name}</h1>
        </div>
        <div className="product_img">
          {product.slice(0,10).map((item, index) => {
            return <Product key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
