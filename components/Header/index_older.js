import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SDPlogo from "../../assets/svg/sdpLogog";
import SDPlogoBlue from "../../assets/svg/SDPlogoBlue";
import Head from "next/head";
import { themeColor } from "../../helper/utils";
import { useSpring, animated } from "react-spring";
import useScrollPosition from "../../hooks/useScrollPosition";
// import { useViewportScroll } from "framer-motion";
import Banners from "../Home/Banners";
import { Collapse } from "antd";
import useCheckMobileScreen from "../../hooks/isMobile";

const { Panel } = Collapse;

export default function Header({}) {
  const scrollPosition = useScrollPosition();
  const isMobile = useCheckMobileScreen();

  // console.log(isMobile);
  const [colourState, setcolourState] = useState("home-nav");
  const [activeKey, setactiveKey] = useState(false);

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

  // const { scrollYProgress } = useViewportScroll();
  const [toggleNav, setToggleNav] = useState(false);
  const router = useRouter();
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
          <nav className={` dt w-100   center`}>
            <animated.div style={LogoAnimation} className="dtc w2 v-mid  pv3">
              <Link href="/">
                <a className="dib w2 h2  b logo-container pointer moble-left-pad">
                  {router.pathname === "/" ? <SDPlogo /> : <SDPlogoBlue />}
                </a>
              </Link>
            </animated.div>
            <div className="dtc v-mid tr ">


              <Link href="/about-us">
                <animated.a
                  style={navAnimation}
                  className={`${
                    router.pathname === "/about-us" ? "active-nav" : ""
                  } f6 fw4 hover-white no-underline my-link regular-font  header-link pointer tc dn dib-ns pv2 `}
                >
                  About us
                </animated.a>
              </Link>

              <div className="dropdown">
                <animated.button
                  style={navAnimation}
                  className={`${
                    router.pathname.includes("service") ? "active-nav" : ""
                  }
                   f6 fw4 hover-white no-underline my-link regular-font  dn dib-ns pv2  dropbtn pointer header-link regular-font`}
                >
                  Services
                </animated.button>
                <div className="dropdown-content pv2 regular-font">
                  <Link href="/service/cx-design">
                    <a>CX & Design </a>
                  </Link>
                  <Link href="/service/technology-and-engineering">
                    <a>Technology & Engineering</a>
                  </Link>
                  <Link href="/service/performance-growth">
                    <a>Performance & Growth</a>
                  </Link>
                  <Link href="/service/brand-campaign-content">
                    <a>Brand, Campaign & Content</a>
                  </Link>
                </div>
              </div>

              {/* <a
                className={`${router.pathname ===""?"/active-nav": ""} f6 fw4 hover-white no-underline my-link regular-font  dn dib-ns pv2 `}
                href="#"
              >
                Services
              </a> */}
              <Link href="/work">
                <animated.a
                  style={navAnimation}
                  className={`${
                    router.pathname === "/work" ? "active-nav" : ""
                  } f6 fw4 hover-white no-underline my-link regular-font  dn dib-l pv2  pointer header-link`}
                >
                  Work
                </animated.a>
              </Link>

              <Link href="/resources">
                <animated.a
                  style={navAnimation}
                  className={`${
                    router.pathname === "/resources" ? "active-nav" : ""
                  } f6 fw4 hover-white no-underline my-link regular-font  dn dib-l pv2  pointer header-link`}
                >
                  Resources
                </animated.a>
              </Link>

              {/* <Link href="/career">
                <animated.a
                  style={navAnimation}
                  className={`${router.pathname ===""?"/active-nav": ""} f6 fw4 hover-white no-underline my-link regular-font  dn dib-l pv2  pointer header-link`}
                >
                  Career
                </animated.a>
              </Link> */}

              <Link href="/contact-us">
                <animated.a
                  style={navAnimation}
                  className={`${
                    router.pathname === "/contact-us" ? "active-nav" : ""
                  } f6 fw4 hover-white no-underline my-link regular-font  dn dib-ns pv2  pointer header-link`}
                >
                  Contact us
                </animated.a>
              </Link>
            </div>
          </nav>

          <div className={`window ${toggleNav ? `hv-100` : `dn-ns`}`}>
            <div className={`header ${toggleNav ? `menu-opened` : `dn-ns`} `}>
              <div
                // onClick={() => menuClicked()}
                className={`burger-container`}
              >
                <div onClick={() => menuClicked()} id="burger">
                  <div
                    onClick={() => menuClicked()}
                    className={`${
                      router.pathname === "/" ? `bg-white ` : "bg-black"
                    } bar topBar`}
                    // className="bar topBar"
                  ></div>
                  <div
                    onClick={() => menuClicked()}
                    className={`${
                      router.pathname === "/" ? `bg-white ` : "bg-black"
                    } bar btmBar`}
                  ></div>
                </div>
              </div>
              {/* {toggleNav && (
                  <animated.div
                    style={LogoAnimation}
                    className="dtc mobile-logo w2 v-mid  pv3"
                  >
                    <Link href="/">
                      <a className="dib  w2 h2  grow-large b logo-container pointer ">
                        {router.pathname === "/" ? (
                          <SDPlogo />
                        ) : (
                          <SDPlogoBlue />
                        )}
                      </a>
                    </Link>
                  </animated.div>
                )} */}
              {/* <div className="icon icon-apple"></div> */}
              <ul className="menu">
                <li className="menu-item">
                  <Link href="/">
                    <a className="anchor-link" onClick={() => linClicked()}>
                      Home
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/about-us">
                    <a className="anchor-link" onClick={() => linClicked()}>
                      About us
                    </a>
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
                        <Link href="/service/cx-design">
                          <a
                            onClick={() => linClicked()}
                            className="drpLInk tc fl"
                          >
                            CX & Design
                          </a>
                        </Link>
                        <Link href="/service/technology-and-engineering">
                          <a
                            onClick={() => linClicked()}
                            className="drpLInk tc fl"
                          >
                            Technology & Engineering
                          </a>
                        </Link>
                        <Link href="/service/performance-growth">
                          <a
                            onClick={() => linClicked()}
                            className="drpLInk tc fl"
                          >
                            Performance & Growth
                          </a>
                        </Link>
                        <Link href="/service/brand-campaign-content">
                          <a
                            onClick={() => linClicked()}
                            className="drpLInk tc fl"
                          >
                            Brand, Campaign & Content
                          </a>
                        </Link>
                      </div>
                    </Panel>
                  </Collapse>

                  {/* <Link href="/">
                    <a onClick={() => linClicked()}>Services</a>
                  </Link> */}
                </li>
                <li className="menu-item">
                  <Link href="/work">
                    <a className="anchor-link" onClick={() => linClicked()}>
                      Work
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/resources">
                    <a className="anchor-link" onClick={() => linClicked()}>
                      Resources
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/career">
                    <a className="anchor-link" onClick={() => linClicked()}>
                      Career
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/contact-us">
                    <a className="anchor-link" onClick={() => linClicked()}>
                      Contact us
                    </a>
                  </Link>
                </li>
                {/* <li className="menu-item">
                  <Link href="/contact-us">
                    <a onClick={() => linClicked()}>Request a quote</a>
                  </Link>
                </li> */}
              </ul>
              {/* <div className="shop icon icon-bag"></div> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
