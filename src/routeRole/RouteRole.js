import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Everything from "../pages/Everything";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Accessories from "../pages/Accessories";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import { ToastContainer } from "react-toastify";
import ProductDetail from "../components/ProductDetail";

export default function RouteRole() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/everything" element={<Everything />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/everything/:id" element={<ProductDetail />} />
          <Route path="/women/:id" element={<ProductDetail />} />
          <Route path="/men/:id" element={<ProductDetail />} />
          <Route path="/accessories/:id" element={<ProductDetail />} />
          <Route path="/home/:id" element={<ProductDetail />} />
          <Route path="//:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
