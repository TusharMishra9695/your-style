import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Cart() {
  window.scrollTo({ top: 0 });
  return (
    <div>
      <Nav />
      <div className="common_inside"></div>
      <Footer />
    </div>
  );
}
