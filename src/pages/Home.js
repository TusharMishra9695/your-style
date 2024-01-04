import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomeSection1 from "../components/HomeSection1";
import Product from "../components/Product";
import Specialist from "../components/Specialist";
import { featured, limited_edition, specialist } from "../utils/content";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { fetchData, fetchHomeData } from "../store/slice/apiSlice";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apiSlice.data);
  const homeData = useSelector((state) => state.apiSlice.homeData);
  useEffect(() => {
    if (!state) {
      dispatch(fetchData());
    }
    dispatch(fetchHomeData());
  }, []);
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    homeData && (
      <div className="home_p1">
        <div className="home_p2">
          <Nav homeData={homeData[0] && homeData[0].nav} />
          <div className="home_p3">
            <div className="child1_p3">
              <span className="child1_p3_t1">
                {homeData[0] &&
                  homeData[0].top_sec &&
                  homeData[0].top_sec.main_quote}
              </span>
            </div>
            <div className="child1_p3">
              <span className="child1_p3_t2">
                {" "}
                {homeData[0] &&
                  homeData[0].top_sec &&
                  homeData[0].top_sec.offer_quote}
              </span>
            </div>
            <div className="child1_p3">
              <Link to="/everything">
                <span className="child1_p3_t3 cursor">shop now</span>
              </Link>
              <Link to="/everything">
                <span className="child1_p3_t4 cursor">find more</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="home_section1">
          {homeData[0] &&
            homeData[0].mid_sec &&
            homeData[0].mid_sec.offers &&
            homeData[0].mid_sec.offers.map((item, index) => {
              return <HomeSection1 key={index} item={item} />;
            })}
        </div>
        {!state ? null : (
          <div className="featured_products">
            <div className="inside_pro">
              <h1>{featured.name}</h1>
            </div>
            <div className="product_img">
              {state.slice(0, 10).map((item, index) => {
                return <Product key={index} item={item} />;
              })}
            </div>
          </div>
        )}

        <div className="limited_edition">
          <div className="bg_img">
            <div className="inside_bg_img">
              <h4>
                {homeData[0] &&
                  homeData[0].bot_sec &&
                  homeData[0].bot_sec.quote}
              </h4>
              <h2>
                {homeData[0] &&
                  homeData[0].bot_sec &&
                  homeData[0].bot_sec.title}
              </h2>
              <p>
                {homeData[0] &&
                  homeData[0].bot_sec &&
                  homeData[0].bot_sec.description}
              </p>
              <span className="sec01_btn cursor">shop now</span>
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
    )
  );
}
