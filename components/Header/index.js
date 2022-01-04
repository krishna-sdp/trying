import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
    setactiveSer(false)
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
                <Link href="/">
                  <a onClick={() => linClicked()} className=" my-link logo-container pointer moble-left-pad">
                    {router.pathname === "/" ? <SDPlogo /> : toggleNav? <SDPlogo /> : <SDPlogoBlue />}
                  </a>
                </Link>
              </animated.div>
            </div>


            <div className={`burger-container2 menu-nav ${toggleNav? "toggleHamberger":""}`}>
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
                <Link href="/about-us">
                  <animated.a
                    style={navAnimation}
                    className={`${
                      router.pathname === "/about-us" ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                    onClick={() => linClicked()}
                  >
                    About us
                  </animated.a>
                </Link>
              </li>
              <li>
                <div className="dropdown">
                  <animated.a
                    style={navAnimation}
                    onClick={() => setactiveSer(!activeSer)}
                    className={`${
                      router.pathname.includes("service") ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                  >
                    Services
                  </animated.a>
                  <div
                    style={
                      activeSer
                        ? {
                            display: "block",
                            borderTop:" 1px solid #dfe0ed"
                          }
                        : {height:"0",padding:"0"}
                    }
                    className={`bg-white dropdown-content  regular-font`}
                  >
                    <div className="wowsu flex container-wrap">
                      <div className="fl ">
                        <Link href="/service/cx-design">
                          <a onClick={() => linClicked()} className="">
                            <div className="w-100 tc">
                              <img src="/assets/svg/service/cx.svg" />
                            </div>

                            <div className="service-lo">CX & Design</div>
                          </a>
                        </Link>
                      </div>
                      <div className="fl ">
                        <Link href="/service/technology-and-engineering">
                          <a onClick={() => linClicked()}>
                            <div className="w-100 tc">
                              <img src="/assets/svg/service/Technology.svg" />
                            </div>
                            <div className="service-lo">
                              Technology & Engineering
                            </div>
                          </a>
                        </Link>
                      </div>

                      <div className="fl ">
                        <Link href="/service/performance-growth">
                          <a onClick={() => linClicked()}>
                            <div className="w-100 tc">
                              <img src="/assets/svg/service/performance.svg" />
                            </div>

                            <div className="service-lo">
                              Performance & Growth
                            </div>
                          </a>
                        </Link>
                      </div>

                      <div className="fl ">
                        <Link href="/service/brand-campaign-content">
                          <a onClick={() => linClicked()}>
                            <div className="w-100 tc">
                              <img src="/assets/svg/service/Brand.svg" />
                            </div>
                            <div className="service-lo">
                              Brand, Campaign & Content
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/work">
                  <animated.a
                    style={navAnimation}
                    className={`${
                      router.pathname === "/work" ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                    onClick={() => linClicked()}
                  >
                    Work
                  </animated.a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <animated.a
                    style={navAnimation}
                    onClick={() => linClicked()}
                    className={`${
                      router.pathname === "/resources" ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                  >
                    Resources
                  </animated.a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <animated.a
                    style={navAnimation}
                    onClick={() => linClicked()}
                    className={`${
                      router.pathname === "/contact-us" ? "active-nav" : ""
                    }  fw4 hover-white no-underline my-link regular-font  header-link pointer `}
                  >
                    Contact us
                  </animated.a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={`window ${toggleNav ? `hv-100` : ``} `}>
            <div className={`header ${toggleNav ? `menu-opened` : ``} menu-nav`}>
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
              </ul>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}
