import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";
// import useCheckMobileScreen from "../../hooks/isMobile";
import MgButton from "./elements/mgButton";
import { isMobile } from "react-device-detect";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
// import Router from "next/router";
// gsap.registerPlugin(ScrollTrigger);

export default function Banners() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);


  const scrollPosition = useScrollPosition();

  const [colourState, setcolourState] = useState("bg-blue-theme");

  useEffect(() => {
    const load = async () => {
      gsap.from(box1Ref.current, {
        scrollTrigger: {
          trigger: box1Ref.current,
          start: "center center",
          end: "center top",
          pin: true,
          // markers:true,
          scrub: 0.2,
        },
        x: "-100%",
        ease: "power.in",
        scale: "2",
        transformOrigin: "center center",
        opacity: 0,
      });
      gsap.from(box2Ref.current, {
        scrollTrigger: {
          trigger: box2Ref.current,
          start: "center center",
          end: "center top",
          pin: true,
          // markers:true,
          scrub: 0.2,
        },
        x: "100%",
        ease: "power.in",
        scale: "2",
        transformOrigin: "center center",
        opacity: 0,
      });
    };
    load();
  }, []);

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

      <div className="work-section dn db-l">
        <div className={`second-div crl-trans ${colourState}`}>
          <div className="container-wrap2 flex">
            <div ref={box1Ref} className="container-projects w-50 initial box1">
              <Link href="/work/neu-1">
                <a className="project">
                  <span className="cover">
                    <img
                      src={"/assets/images/home/001.jpg"}
                      alt="Cover - Collectionist"
                    />
                  </span>
                  <span className="text text-area tc white">
                    <h3>Neu1</h3>
                    <p>Website & Mobile App</p>
                  </span>
                </a>
              </Link>
            </div>

            <div ref={box2Ref} className="container-projects  box2">
              <Link className="project" to="/work/fly-bee">
                <span className="cover">
                  <img
                    src={"/assets/images/home/004.jpg"}
                    alt="Cover - Collectionist"
                  />
                </span>
                <span className="text text-area tc white z-max">
                  <h3>Flybee</h3>
                  <p>Mobile App</p>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`second-div crl-trans padding-topas padding-baasd ${colourState} `}
          style={{ marginTop: "-1px" }}
        >
          <div className="container-wrap2 flex ">
            <div className="container-projects w-50 initial ">
              <Link className="project" to="/work/neu-herbs">
                <span className="cover">
                  <img
                    src={"/assets/images/home/006.jpg"}
                    alt="Cover - Collectionist"
                  />
                </span>
                <span className="text text-area tc white">
                  <h3>NeuHerbs</h3>
                  <p>Website</p>
                </span>
              </Link>
            </div>

            <div className="container-projects ">
              <Link to="/work/toetoes">
                <a className="project">
                  <span className="cover">
                    <img
                      src={"/assets/images/home/002.jpg"}
                      alt="Cover - Collectionist"
                    />
                  </span>
                  <span className="text text-area tc white">
                    <h3>Toetoes</h3>
                    <p>Website</p>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={`second-div crl-trans  padding-baasd ${colourState}`}>
          <div className="container-wrap2 flex">
            <div className="container-projects w-50 initial ">
              <Link className="project" to="/work/airbon">
                <span className="cover">
                  <img
                    src={"/assets/images/home/005.jpg"}
                    alt="Cover - Collectionist"
                  />
                </span>
                <span className="text text-area tc white">
                  <h3>Airbon Cloud Collaboration</h3>
                  <p>Admin Dashboard</p>
                </span>
              </Link>
            </div>

            <div className="container-projects ">
              <Link className="project" to="/work/fitness-x">
                <span className="cover">
                  <img
                    src={"/assets/images/home/003.jpg"}
                    alt="Cover - Collectionist"
                  />
                </span>
                <span className="text text-area tc white z-max">
                  <h3>Fitnes X</h3>
                  <p>Mobile App</p>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className={`second-div crl-trans ${colourState}`}>
          <div className="container-wrap2 flex">
            <div className="container-projects w-50 initial ">
              <Link className="project" to="/work/chaufer">
                <span className="cover">
                  <img
                    src={"/assets/images/home/007.jpg"}
                    alt="Cover - Collectionist"
                  />
                </span>
                <span className="text text-area tc white">
                  <h3>Chaufer</h3>
                  <p>description</p>
                </span>
              </Link>
            </div>

            <div className="container-projects ">
              <Link className="project" to="/work/nft-verse">
                <span className="cover">
                  <img
                    src={"/assets/images/home/008.jpg"}
                    alt="Cover - Collectionist"
                  />
                </span>
                <span className="text text-area tc white z-max">
                  <h3>NFT Verse</h3>
                  <p>Mobile App</p>
                </span>
              </Link>
            </div>


          </div>
        </div>
      </div>

      <MgButton />
    </div>
  );
}
