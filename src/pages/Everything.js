import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TwoSection from "../components/TwoSection";
import TopReviewedProduct from "../components/TopReviewedProduct";

export default function Everything() {
  window.scrollTo({ top: 0 });
  return (
    <div>
      <Nav />
      <div className="common_inside">
        <TwoSection />
        <TopReviewedProduct />
      </div>

      <Footer />
    </div>
  );
}
