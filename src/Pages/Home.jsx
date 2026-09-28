
import React from "react";
import Hero from "../Components/Home/Hero";
import Why from "../Components/Home/Why";
import FCourses from "../Components/Home/FCourses";
import LearnigPath from "../Components/Home/LearnigPath";
import Testimonial from "../Components/Home/Testimonial";
import About from "./About";
import Contact from "./Contact";
import FAQ from "../Components/Home/Faq";

function Home() {
  return (
    <div >

      <Hero />

      <div className="relative z-10 min-h-screen w-full bg-[#F7F7F8]">
        <Why />
        <FCourses />
        <LearnigPath />
        <About/>
        <Testimonial />
        <Contact/>
        <FAQ/>
      </div>

     

    </div>
  );
}

export default Home;