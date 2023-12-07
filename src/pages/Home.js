import React, { useState, useEffect } from "react";
import HomeSection1 from "../components/HomeSection1";
import Product from "../components/Product";
import Specialist from "../components/Specialist";
import {
  homeSection1,
  featured,
  limited_edition,
  specialist,
} from "../utils/content";
import { getAPI } from "../utils/apiCalls";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Home() {
  const [product, setProduct] = useState("");
  useEffect(() => {
    if (!product) {
      getAPI(`${process.env.REACT_APP_BASE_URL}/products`).then((res) => {
        setProduct(res);
      });
    }
  }, []);
  return (
    <div className="home_p1">
      <div className="home_p2">
        <Nav />
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
      {!product ? null : (
        <div className="featured_products">
          <div className="inside_pro">
            <h1>{featured.name}</h1>
          </div>
          <div className="product_img">
            {product.slice(0, 10).map((item, index) => {
              return <Product key={index} item={item} />;
            })}
          </div>
        </div>
      )}

      <div className="limited_edition">
        <div className="bg_img">
          <div className="inside_bg_img">
            <h4>{limited_edition.limited}</h4>
            <h2>{limited_edition.special}</h2>
            <p>{limited_edition.detail}</p>
            <h4>{limited_edition.topic}</h4>
            <span className="sec01_btn cursor">{limited_edition.btn}</span>
          </div>
        </div>
        <div className="specialist">
          {specialist.map((items, index) => {
            return <Specialist key={index} item={items} />;
          })}
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
