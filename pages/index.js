import React, { useEffect } from "react";
import { motion } from "framer-motion";
import About from "../components/Home/About";
import dynamic from "next/dynamic";

// import Banners from "../components/Home/Banners"
import WorkShocase from "../components/Home/WorkShocase";
import Testimonials from "../components/Home/Testimonials";
import ClientLogo from "../components/ClientLogo";
// import Router from "next/router";  
// const Banners = dynamic(() => import("../components/Home/Banners"), {
//   ssr: false,
// });
import Banners from "../components/Home/Banners";

const Services1 = dynamic(() => import("../components/Home/Services1"), {
  ssr: false,
});
export default function Landing({}) {

  return (
    <div className="home-page">
      {/* {isFirstMount && <InitialTransition />} */}
      <Banners />
      {/* <New/> */}
      <About />
      <WorkShocase />
      <Services1 />
      <Testimonials />
      <ClientLogo />
    </div>
  );
}
const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      className="absolute z-max flex items-center fixed justify-center w-100 bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="absolute z-max flex">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="white"
        >
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full gray-600 fill-current"
          />
        </pattern>
        <text
          className="f1 bold"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "white" }}
        >
          SDP Website
        </text>
      </motion.svg>
    </motion.div>
  );
};
const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};
const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

// import Banners from "../components/Home/Banners";

// export default function Dummy() {
//   return (
//     <div>
//       <Banners />
//     </div>
//   );
// }
