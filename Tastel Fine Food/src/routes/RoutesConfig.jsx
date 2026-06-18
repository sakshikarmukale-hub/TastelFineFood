import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import OurProducts from "../pages/OurProducts";

import Sustainability from "../pages/sustainability";
import Whatwedo from "../pages/Whatwedo";
import Innovation from "../pages/Innovation";
import Careers from "../pages/Careers";
import ContactUs from "../pages/ContactUs";

import OurHistory from "../pages/OurHistory";
import VisionMission from "../pages/VisionMission";

import MealKits from "../components/products/MealKits";
import ReadyToServeCurriesGrains from "../components/products/ready-to-serve-curries-grains";
import SimmerSaucesStirFrySauces from "../components/products/simmer-sauces-stir-fry-sauces";
import CurryPastesMarinades from "../components/products/curry-pastes-marinades";
import CondimentSpices from "../components/products/condiments-spices";
import DipsChutneys from "../components/products/dips-chutneys";
import FrozenFood from "../components/products/frozen-food";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/what-we-do" element={<Whatwedo />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/vision-mission" element={<VisionMission />} />
      </Routes>

      {/* In our products product */}
      <Routes>
        <Route path="/meal-kits" element={<MealKits />} />
        <Route
          path="/ready-to-serve-curries-grains"
          element={<ReadyToServeCurriesGrains />}
        />
        <Route
          path="/simmer-sauces-stir-fry-sauces"
          element={<SimmerSaucesStirFrySauces />}
        />
        <Route
          path="/curry-pastes-marinades"
          element={<CurryPastesMarinades />}
        />
        <Route path="/condiments-spices" element={<CondimentSpices />} />
        <Route path="/dips-chutneys" element={<DipsChutneys />} />
        <Route path="/frozen-food" element={<FrozenFood />} />
      </Routes>
    </>
  );
};

export default Routing;
