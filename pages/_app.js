import React, { useEffect, useState } from "react";
import "tachyons";
import "../styles/styles.scss";
// import dynamic from "next/dynamic";
// import { AnimatePresence, motion } from "framer-motion";
// import { useRouter } from "next/router";
// import { useSpring, animated, config } from "react-spring";
import "react-toastify/dist/ReactToastify.css";
// import Footer from "../components/Footer";
// import useScrollPosition from "../hooks/useScrollPosition";
// import { themeColor } from "../helper/utils";
// import Router from "next/router";

// const Header = dynamic(() => import("../components/Header"), { ssr: false });

// Animation on scroll
// import AOS from "aos";
// import "aos/dist/aos.css";

// import SmoothScroll from "../components/Layout/smoothScroll";
// import Cursor from "../components/Layout/cursor";
const App = ({ Component, pageProps }) => {
  // const scrollPosition = useScrollPosition();
  // const router = useRouter();
  // // const scrollPos = useScrollPosition();
  // const [routerChnage, setrouterChnage] = useState(false);

  // useEffect(() => {
  //   // intiate AOS
  //   // AOS.init({ duration: 1500 });

  //   const handleRouteChange = () => {
  //     // if this is not home page

  //     // if (router.pathname !== "/") {
  //     //   setrouterChnage(true);
  //     // }
  //     setrouterChnage(true);
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, []);

  // function checkForRouteEnabledAnimation(asPath) {
  //   const substrings = [
  //     "/",
  //     "/blogs",
  //     "/whitepapers",
  //     "/infographics",
  //     "/resources",
  //     "/career/role-overview",
  //     "/career/apply-job",
  //   ];
  //   if (substrings.some((v) => asPath === v)) {
  //     // Will only return when the `str` is included in the `substrings`
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  return (
    <div className={`main-div    `}>
      <Component {...pageProps}  />
      {/* <div>
        <AnimatePresence exitBeforeEnter>
          <motion.section exit={{ opacity: 0 }}>
            {checkForRouteEnabledAnimation(router.asPath) && routerChnage ? (
              <RouteAnimation
                setrouterChnage={setrouterChnage}
                routerChnage={routerChnage}
              />
            ) : (
              <>
                {router.pathname === "/404" ? (
                  <Component {...pageProps} />
                ) : (
                  <>
 <Header /> 
                    <div className="content-page">
                      <Component {...pageProps} key={router.route} />
                    </div>
                    <Footer />
                  </>
                )}
              </>
            )}
          </motion.section>
        </AnimatePresence>
      </div> */}
    </div>
  );
};

export default App;

function RouteAnimation({ routerChnage, setrouterChnage }) {
  // useEffect(() => {
  //   setTimeout(() => setrouterChnage(false), 1200);
  // });
  const [menuIn, setMenuIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => setMenuIn(true), 100);
    setTimeout(() => setrouterChnage(false), 1000);
  }, []);

  const checkRoute = (params) => {
    console.log(router.asPath);
  };

  const { x, y } = useSpring({
    x: menuIn ? "200" : "0vh",
    y: menuIn ? "100" : "0vh",
    config: config.slow,
  });

  return (
    <div className="mydivd">
      <animated.div
        className="menu"
        style={{
          position: "absolute",
          width: "6vw",
          height: "400%",
          zIndex: "1",
          backgroundColor: "#4048DB",
          transform: "rotate(72deg)",
          marginTop: "-204vh",
          top: y.interpolate((y) => y),
          left: x.interpolate((x) => x),
        }}
      />
    </div>
  );
}
