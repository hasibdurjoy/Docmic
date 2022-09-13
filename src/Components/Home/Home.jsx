import React from "react";
import Banner from "../Banner/Banner";
import Experience from "../Experience/Experience";
import FAQ from "../FAQ/FAQ";
import Feature from "../Feature/Feature";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #ecfaff, #edf8ff, #f1f6ff, #f7f4ff, #fef1ff)",
      }}
    >
      <Banner />
      <Services />
      <Experience />
      <Feature />
      <FAQ />
      <Testimonial />
    </div>
  );
};

export default Home;
