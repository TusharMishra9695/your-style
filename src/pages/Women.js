import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TwoSection from "../components/TwoSection";

export default function Women() {
  window.scrollTo({ top: 0 });
  return (
    <div>
      <Nav />
      <div className="common_inside">
        <TwoSection />
      </div>
      <Footer />
    </div>
  );
}
