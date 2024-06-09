import React, { useContext } from "react";
import HeroSection from "../Home/HeroSection";
import HowItWorks from "../Home/HowItWork";
import PopularCategories from "../Home/PopularCategories";
import PopularCompanies from "../Home/PopularCompanies";
import { Context } from "../../main";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { isAuthorized } = useContext(Context);
  if (!isAuthorized) {
    <Navigate to={"/login"} />;
  }
  return (
    <section className="homePage page">
      <HeroSection />
      <HowItWorks />
      <PopularCategories />
      <PopularCompanies />
    </section>
  );
};

export default Home;
