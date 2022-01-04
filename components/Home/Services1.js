import React, { useState, useEffect } from "react";
import { serviceData } from "../../data/services";
import Link from "next/link";
import useMouse from "@react-hook/mouse-position";
import { motion, useTransform } from "framer-motion";
import useCheckMobileScreen from "../../hooks/isMobile";

export default function Services1() {
  const isMobile = useCheckMobileScreen();

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = 0
  let mouseYPosition = 0

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
    <div className="whatwedo-overview something-2 no-cursor" ref={ref}>

{!isMobile && (
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursorText ">{cursorText}</span>
        </motion.div>
      )}

      <div className="container-wrap">
        <div className=" mph20 center no-xflw no-yflw">
          <div className="load-moer-hover pv3 pv0-l">
            {/* <div className="cf">
              <div className="fl w-100 ph2-l ">
                <div className=" ">
                  {/* <h1
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
              </div> 
            </div> */}
            {/* <ReactHover options={optionsCursorTrueWithMargin}>
              <Trigger type="trigger"> */}

            <span
              className="hoveron-this"
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}
            >
              {serviceData.map((service, index) => (
                <div
                  // href={service.link}
                  key={index}
                  className={` ${
                    serviceData.length - 1 !== index ? "botfr" : ""
                  } cf  border-tesds hover-zd  pv5-l  pv4  `}
                >
                  <div className="pv3-l ">
                    <div className="fl w-100 w-30-l ph2-l  db-l img-conssa z-max-min ">
                      <div className="cf">
                        <div className="">
                          <div className="pt2 v-min psb-ms pr3">
                            <Link href={service.link}>
                              <a className="subheading regular-font pt4-l  pb2-l">
                                {service.title}{" "}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fl w-100 w-70-l ph2-l ">
                      <div
                        key={index}
                        className={`${
                          index === serviceData.length - 1 && "last-service"
                        }  what-wedo-container `}
                      >
                        <div className="flex justify-between description v-min ">
                          <Link href={service.link}>
                            <p className="light-font mt0 pb2-l pms">
                              {service.description}{" "}
                            </p>
                          </Link>
                        </div>

                        <div className="service-row     inline-grid-m ">
                          {service.list.map((item, i) => (
                            <div
                              key={i}
                              className="service-column w-50-l pb2-l "
                            >
                              <div className="flex items-center">
                                {" "}
                                <div>
                                  <div className="bullet-box" />
                                </div>
                                <p className="pl2 regular-font flex mt0 mb0 pms ">
                                  {item.label}{" "}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
