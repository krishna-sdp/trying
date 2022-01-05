import React, { useState, useEffect } from "react";
import { serviceData } from "../../data/services";
import Link from "next/link";
import useCheckMobileScreen from "../../hooks/isMobile";
import $ from "jquery";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform } from "framer-motion";

export default function Services() {
  const isMobile = useCheckMobileScreen();

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = mouse.clientX;
  let mouseYPosition = mouse.clientY;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 0,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#4048DB",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#4048DB",
      color: "#fff",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },

  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }


  return (
    <div className="whatwedo-overview something-2" ref={ref}>
      {!isMobile && (
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{cursorText}</span>
        </motion.div>
      )}

      <div className="container-wrap">
        <div className=" mph20 center no-xflw no-yflw pt4-l pv4">
          <div className="load-moer-hover pt5-l pb3-l pad-mt pb2">
            <div className="cf">
              <div className="fl w-100 ph2-l ">
                <div className=" ">
                  <h1
                    // data-aos="fade-right"
                    // data-aos-duration="700"
                    // data-aos-delay="50"
                    // data-aos-easing="ease-in-out"
                    className="medium-font  clr-5e5e76  ma0 services-title mb3 mb0-l"
                  >
                    Services
                  </h1>
                </div>
              </div>
              {/* <div className="fl w-100 w-70-l ph2-l ">
                <div className=" side-txt ">
                  <h1

                    className="regular-font  ma0 title-txt m-head"
                  >
                    We do what we do best.
                  </h1>
                </div>
              </div> */}
            </div>
            {/* <ReactHover options={optionsCursorTrueWithMargin}>
              <Trigger type="trigger"> */}
            <span
              className="hoveron-this"
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}
            >
              {serviceData.map((service, index) => (
                <a
                  href={service.link}
                  key={index}
                  className={` ${
                    serviceData.length - 1 !== index ? "botfr" : ""
                  } cf  border-tesds hover-zd flex-ns  pv5-l pt5-l pt2 pb2`}
                >
                  <div className="fl w-100 w-30-l ph2-l dn db-l img-conssa z-max-min">
                    <div className="cf">
                      <div className="pt3-l">
                        <div className="fl w-100 hover-me ">
                          <img
                            src={`/assets/svg/service/${service.image}`}
                            height="120"
                            className="img-hosver"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fl w-70 ph2-l z-max-min">
                    <div
                      key={index}
                      className={`${
                        index === serviceData.length - 1 && "last-service"
                      }  what-wedo-container `}
                    >
                      <div className="flex justify-between v-min pt4 pb3">
                        <Link href={service.link}>
                          <a className="subheading regular-font  pb2-l psb-ms">
                            {service.title}{" "}
                          </a>
                        </Link>
                      </div>

                      <div className="service-row     inline-grid-m ">
                        {service.list.map((item, i) => (
                          <div key={i} className="service-column w-50-l  ">
                            <p className=" regular-font flex mt0 mb0  pt3-l  ">
                              {" "}
                              <div className="bullet-box regular-font" />
                              {item.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function isOdd(num) {
  return num % 2;
}
