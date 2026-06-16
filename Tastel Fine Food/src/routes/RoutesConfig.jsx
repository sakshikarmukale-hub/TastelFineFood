import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import OurProducts from "../pages/our-products.jsx";

const Routing = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

    <Routes>
      <Route path="/OurProducts" element={<OurProducts />} />
    </Routes>
    </>
  );
};

export default Routing;