import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import CarDisplay from "../components/CarDisplay/CarDisplay";
import HeroSection from "../components/HeroSection/HeroSection";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <CarDisplay />
      <HeroSection />
    </>
  );
}

export default LandingPage;
