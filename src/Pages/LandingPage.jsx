import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import CarDisplay from "../components/CarDisplay/CarDisplay";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../components/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Header />
      <CarDisplay />
      <HeroSection />
      <Footer />
    </>
  );
}

export default LandingPage;
