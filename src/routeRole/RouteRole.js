import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Everything from "../pages/Everything";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import { ToastContainer } from "react-toastify";

export default function RouteRole() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/everything" element={<Everything />} />
          <Route path="/women" element={<Everything />} />
          <Route path="/men" element={<Everything />} />
          <Route path="/kids" element={<Everything />} />
          <Route path="/elders" element={<Everything />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Profile />} />
          <Route path="/everything/:id" element={<Everything />} />
          <Route path="/women/:id" element={<Everything />} />
          <Route path="/men/:id" element={<Everything />} />
          <Route path="/kids/:id" element={<Everything />} />
          <Route path="/elders/:id" element={<Everything />} />
          <Route path="/women/:id/:id" element={<ProductDetail />} />
          <Route path="/men/:id/:id" element={<ProductDetail />} />
          <Route path="/everything/:id/:id" element={<ProductDetail />} />
          <Route path="/kids/:id/:id" element={<ProductDetail />} />
          <Route path="/elders/:id/:id" element={<ProductDetail />} />

          {/* <Route path="//:id" element={<ProductDetail />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
