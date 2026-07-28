import Banner from "@/Components/Banner/Banner";
import Clients from "@/Components/Clients/Clients";
import FeatureShowcase from "@/Components/FeatureShowcase/FeatureShowcase";
import WhyChoose from "@/Components/WhyChoose/WhyChoose";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>

      <Clients></Clients>

      <FeatureShowcase></FeatureShowcase>

      <WhyChoose></WhyChoose>
    </div>
  );
};

export default HomePage;
