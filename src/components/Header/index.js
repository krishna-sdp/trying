import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SDPlogo from "../../assets/svg/sdpLogog";
import SDPlogoBlue from "../../assets/svg/SDPlogoBlue";
import Head from "next/head";
import { themeColor } from "../../helper/utils";
import { useSpring, animated } from "react-spring";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useViewportScroll } from "framer-motion";
import { Collapse } from "antd";
import useCheckMobileScreen from "../../hooks/isMobile";

const { Panel } = Collapse;

export default function Header({}) {
  const scrollPosition = useScrollPosition();
  const isMobile = useCheckMobileScreen();

  // console.log(isMobile);
  const [colourState, setcolourState] = useState("home-nav");
  const [activeKey, setactiveKey] = useState(false);
  const [activeSer, setactiveSer] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      if (scrollPosition >= 150 && scrollPosition <= 3016) {
        setcolourState("black-theme");
      } else {
        setcolourState("home-nav");
      }
    } else {
      setcolourState("home-nav");
    }
  }, [scrollPosition]);

  const { scrollYProgress } = useViewportScroll();
  const [toggleNav, setToggleNav] = useState(false);
  const router = useLocation();
  const LogoAnimation = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(-20px,0px,0)`,
    },
    opacity: 1,
    transform: `translate3d(0,0px,0)`,
  });

  const navAnimation = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0,-10px,0)`,
    },
    opacity: 1,
    transform: `translate3d(0,0px,0)`,
  });

  const menuClicked = (params) => {
    // console.log("this is triggered");
    // var burger = document.querySelector(".burger-container");
    // var header = document.querySelector(".header");

    // burger.onclick = function () {
    //   header.classList.toggle("menu-opened");
    // };

    setToggleNav(!toggleNav);
  };

  const linClicked = (params) => {
    setToggleNav(false);
    setactiveSer(false);
    setactiveKey(false);
  };

  const callback = (params) => {
    // console.log("this is open clg");
    setactiveKey(!activeKey);
  };

  return (
    <div className="main-header  ">
      <Head>
        <title>
          Web Development &amp; Digital Marketing Services in Mumbai &amp; Navi
          Mumbai | SDP
        </title>
      </Head>

      <header
        className={`${
          router.pathname === "/"
            ? `crl-trans ${colourState} mobile-bg`
            : "other-page"
        } fixed w-100 `}
      >
        <div className="container-wrap ">
          <div className="header-hai">
            <div className="logo">
              <animated.div style={LogoAnimation} className="">
                <Link
                  onClick={() => linClicked()}
                  className=" my-link logo-container pointer moble-left-pad"
                  to="/"
                >
                  {router.pathname === "/" ? (
                    <SDPlogo />
                  ) : toggleNav ? (
                    <SDPlogo />
                  ) : (
                    <SDPlogoBlue />
                  )}
                </Link>
              </animated.div>
            </div>

            <div
              className={`burger-container2 menu-nav ${
                toggleNav ? "toggleHamberger" : ""
              }`}
            >
              <div onClick={() => menuClicked()} id="burger">
                <div
                  onClick={() => menuClicked()}
                  className={`${
                    router.pathname === "/" ? `bg-white ` : "bg-black"
                  } bar topBar`}
                ></div>
                <div
                  onClick={() => menuClicked()}
                  className={`${
                    router.pathname === "/" ? `bg-white ` : "bg-black"
                  } bar btmBar`}
                ></div>
              </div>
            </div>

            <ul className="main-nav ">
              <li>
                <Link to="/about-us">
                  <animated.span
                    style={navAnimation}
                    className={`${
                      router.pathname === "/about-us" ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                    onClick={() => linClicked()}
                  >
                    About us
                  </animated.span>
                </Link>
              </li>
              <li>
                <div className="dropdown">
                  <animated.span
                    style={navAnimation}
                    onClick={() => setactiveSer(!activeSer)}
                    className={`${
                      router.pathname.includes("service") ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                  >
                    Services
                  </animated.span>
                  <div
                    style={
                      activeSer
                        ? {
                            display: "block",
                            borderTop: " 1px solid #dfe0ed",
                          }
                        : { height: "0", padding: "0" }
                    }
                    className={`bg-white dropdown-content  regular-font`}
                  >
                    <div className="wowsu flex container-wrap">
                      <div className="fl ">
                        <Link
                          onClick={() => linClicked()}
                          className=""
                          to="/service/cx-design"
                        >
                          {/* <div className="w-100 tc">
                              <img src="/assets/svg/service/cx.svg" />
                            </div> */}

                          <div className="service-lo">CX & Design</div>
                        </Link>
                      </div>
                      <div className="fl ">
                        <Link
                          onClick={() => linClicked()}
                          to="/service/technology-and-engineering"
                        >
                          {/* <div className="w-100 tc">
                              <img src="/assets/svg/service/Technology.svg" />
                            </div> */}
                          <div className="service-lo">
                            Technology & Engineering
                          </div>
                        </Link>
                      </div>

                      <div className="fl ">
                        <Link
                          onClick={() => linClicked()}
                          to="/service/performance-growth"
                        >
                          {/* <div className="w-100 tc">
                              <img src="/assets/svg/service/performance.svg" />
                            </div> */}

                          <div className="service-lo">Performance & Growth</div>
                        </Link>
                      </div>

                      <div className="fl ">
                        <Link
                          onClick={() => linClicked()}
                          to="/service/brand-campaign-content"
                        >
                          {/* <div className="w-100 tc">
                              <img src="/assets/svg/service/Brand.svg" />
                            </div> */}
                          <div className="service-lo">
                            Brand, Campaign & Content
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/work">
                  <animated.span
                    style={navAnimation}
                    className={`${
                      router.pathname === "/work" ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                    onClick={() => linClicked()}
                  >
                    Work
                  </animated.span>
                </Link>
              </li>
              <li>
                <Link to="/resources">
                  <animated.span
                    style={navAnimation}
                    onClick={() => linClicked()}
                    className={`${
                      router.pathname === "/resources" ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                  >
                    Resources
                  </animated.span>
                </Link>
              </li>
              <li>
                <Link to="/contact-us">
                  <animated.span
                    style={navAnimation}
                    onClick={() => linClicked()}
                    className={`${
                      router.pathname === "/contact-us" ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                  >
                    Contact us
                  </animated.span>
                </Link>
              </li>
            </ul>
          </div>

          <div className={`window ${toggleNav ? `hv-100` : ``} `}>
            <div
              className={`header ${toggleNav ? `menu-opened` : ``} menu-nav`}
            >
              {/* <div className={`burger-container`}>
                <div onClick={() => menuClicked()} id="burger">
                  <div
                    onClick={() => menuClicked()}
                    className={`${
                      router.pathname === "/" ? `bg-white ` : "bg-black"
                    } bar topBar`}
                  ></div>
                  <div
                    onClick={() => menuClicked()}
                    className={`${
                      router.pathname === "/" ? `bg-white ` : "bg-black"
                    } bar btmBar`}
                  ></div>
                </div>
              </div> */}

              <ul className="menu">
                <li className="menu-item">
                  <Link
                    className="anchor-link"
                    onClick={() => linClicked()}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="anchor-link"
                    onClick={() => linClicked()}
                    to="/about-us"
                  >
                    About us
                  </Link>
                </li>
                <li className="menu-item">
                  <Collapse
                    onChange={callback}
                    activeKey={activeKey ? "1" : "9"}
                    destroyInactivePanel={true}
                    expandIconPosition={"right"}
                  >
                    <Panel header="Services" key="1">
                      <div className="cf pb3">
                        <Link
                          onClick={() => linClicked()}
                          className="drpLInk tc fl"
                          to="/service/cx-design"
                        >
                          CX & Design
                        </Link>
                        <Link
                          onClick={() => linClicked()}
                          className="drpLInk tc fl"
                          to="/service/technology-and-engineering"
                        >
                          Technology & Engineering
                        </Link>
                        <Link
                          onClick={() => linClicked()}
                          className="drpLInk tc fl"
                          to="/service/performance-growth"
                        >
                          Performance & Growth
                        </Link>
                        <Link
                          onClick={() => linClicked()}
                          className="drpLInk tc fl"
                          to="/service/brand-campaign-content"
                        >
                          Brand, Campaign & Content
                        </Link>
                      </div>
                    </Panel>
                  </Collapse>
                </li>
                <li className="menu-item">
                  <Link
                    className="anchor-link"
                    onClick={() => linClicked()}
                    to="/work"
                  >
                    Work
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="anchor-link"
                    onClick={() => linClicked()}
                    to="/resources"
                  >
                    Resources
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="anchor-link"
                    onClick={() => linClicked()}
                    to="/career"
                  >
                    Career
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="anchor-link"
                    onClick={() => linClicked()}
                    to="/contact-us"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
