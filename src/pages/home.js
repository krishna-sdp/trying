import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import About from "../components/Home/About";


// import WorkShocase from "../components/Home/WorkShocase";
// import Testimonials from "../components/Home/Testimonials";
// import ClientLogo from "../components/ClientLogo";
// import Router from "next/router";
// const Banners = dynamic(() => import("../components/Home/Banners"), {
//   ssr: false,
// });
import Banners from "../components/Home/Banners";
// import Services1 from "../components/Home/Services1";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

export default function Home({}) {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.registerPlugin(CSSRulePlugin);
  // }, []);

  return (
    <div className="home-page">
      {/* {isFirstMount && <InitialTransition />} */}
      <Banners />
      {/* <New/> */}
      {/* <About />
      <WorkShocase />
      <Services1 />
      <Testimonials />
      <ClientLogo /> */}

    </div>
  );
}




