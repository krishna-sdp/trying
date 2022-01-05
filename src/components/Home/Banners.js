import React, { useState, useEffect, useRef } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
// import useCheckMobileScreen from "../../hooks/isMobile";
import MgButton from "./elements/mgButton";
import { isMobile } from "react-device-detect";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import CardsAnimation from "./CardsAnimation";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
// import Router from "next/router";
// gsap.registerPlugin(ScrollTrigger);

export default function Banners() {


  const scrollPosition = useScrollPosition();

  const [colourState, setcolourState] = useState("bg-blue-theme");

  

  useEffect(() => {
    if (!isMobile) {
      if (scrollPosition > 150) {
        setcolourState("black-theme");
      } else {
        setcolourState("bg-blue-theme");
      }
    } else {
      setcolourState("bg-blue-theme");
    }
  }, [scrollPosition]);

  const headerShrink = Math.min(20, 1 - 0.001 * scrollPosition);
  const header3dTrans = 1 + 1 * scrollPosition;
  const opacityReduce = Math.min(20, 1 - 0.003 * scrollPosition);

  return (
    <div className=" no-xflw ">
      {/* <div className={`banners-componets crl-trans ${colourState} `}>
        <div className="container-wrap h-100">
          <div className="align-middle h-100 flex justify-center items-center">
            <div className="hero-banners white dn db-l">
              <h1
                className="regular-font ma0"
                style={{
                  scale: scaleAnim,
                  opacity: opacityAnim,
                }}
                animate={{ scale: scaleAnim }}
              >
                We Design Amazing <br /> Experience For You
              </h1>
            </div>

            <div className="hero-banners white db dn-l">
              <h1 className="regular-font ma0">
                We Design Amazing <br /> Experience For You
              </h1>
            </div>
          </div>
        </div>
      </div> */}

      <div className={`banners-componets crl-trans ${colourState} `}>
        <div className=" h-100">
          <div className="align-middle h-100 flex justify-center items-center">
            <div
              style={{
                transform: `translate3d(0px, ${
                  header3dTrans <= 2000 ? header3dTrans : 0
                }px, 0px) scale(${scrollPosition === 0 ? 1 : headerShrink})`,
                opacity: `${scrollPosition === 0 ? 1 : opacityReduce}`,
              }}
              className="hero-banners white dn db-l tc"
            >
              <h1 className="regular-font ma0 ">
                We Build Digital <br />
              </h1>
              <span className="smalltest medium-font ">
                You imagine. We Create.
              </span>
            </div>
            <div className="hero-banners white db dn-l">
              <h1 className="regular-font ma0">
                We Build Digital <br /> You imagine. We Create.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <CardsAnimation colourState={colourState} />

      <MgButton />
    </div>
  );
}
