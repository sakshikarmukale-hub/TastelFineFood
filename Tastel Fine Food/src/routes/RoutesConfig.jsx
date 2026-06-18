import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurProducts from "../pages/OurProducts";
import MealKits from "../components/products/MealKits";
import ReadyToServeCurriesGrains from "../components/products/ready-to-serve-curries-grains";
import SimmerSaucesStirFrySauces from "../components/products/simmer-sauces-stir-fry-sauces";
import CurryPastesMarinades from "../components/products/curry-pastes-marinades";
import CondimentSpices from "../components/products/condiments-spices";

const Routing = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-products" element={<OurProducts />} />
    </Routes>

    {/* In our products product */}
    <Routes>
      <Route path="/meal-kits" element={<MealKits />} />
      <Route path="/ready-to-serve-curries-grains" element={<ReadyToServeCurriesGrains />} />
      <Route path="/simmer-sauces-stir-fry-sauces" element={<SimmerSaucesStirFrySauces />} />
      <Route path="/curry-pastes-marinades" element={<CurryPastesMarinades />} />
      <Route path="/condiments-spices" element={<CondimentSpices />} />
    </Routes>
    </>
  );
};

export default Routing;
