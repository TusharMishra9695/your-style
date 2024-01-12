import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Specialist from "../components/Home/Specialist";
import { specialist } from "../utils/content";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { fetchData } from "../store/slice/apiSlice";
import { Carousel } from "react-responsive-carousel";
import TopAllDeals from "../components/Home/TopAllDeals";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.apiSlice.data);
  const homeData = useSelector((state) => state.apiSlice.homeData);
  useEffect(() => {
    if (!state) {
      dispatch(fetchData());
    }
    // dispatch(fetchHomeData());
  }, []);
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="home_p1">
      <div className="home_p2">
        <Nav />
        <Carousel interval={1500} autoPlay infiniteLoop={true}>
          <div>
            <img
              alt=""
              src="https://your-style.vercel.app/static/media/home-new-bg-free-img.676c4ece681c03f7607b.jpg"
              className="carousel_img"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
              className="carousel_img"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://your-style.vercel.app/static/media/home-new-bg-free-img.676c4ece681c03f7607b.jpg"
              className="carousel_img"
            />
          </div>
          <div>
            <img
              alt=""
              src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
              className="carousel_img"
            />
          </div>
        </Carousel>
      </div>
      <TopAllDeals />
      <TopAllDeals />
      <div className="specialist">
        {specialist.map((items, index) => {
          return <Specialist key={index} item={items} />;
        })}
      </div>
      <hr />
      <Footer />
    </div>
  );
}
