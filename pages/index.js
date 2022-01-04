import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import About from "../components/Home/About";
// import dynamic from "next/dynamic";

// // import Banners from "../components/Home/Banners"
// import WorkShocase from "../components/Home/WorkShocase";
// import Testimonials from "../components/Home/Testimonials";
// import ClientLogo from "../components/ClientLogo";
// import Router from "next/router";  
// const Banners = dynamic(() => import("../components/Home/Banners"), {
//   ssr: false,
// });
import Banners from "../components/Home/Banners";

// const Services1 = dynamic(() => import("../components/Home/Services1"), {
//   ssr: false,
// });
export default function Landing({}) {

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