import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TwoSection from "../components/Products/TwoSection";
import TopReviewedProduct from "../components/Products/TopReviewedProduct";

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
