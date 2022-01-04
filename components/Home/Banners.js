import React, { useState, useEffect } from "react";
import Link from "next/link";
import useScrollPosition from "../../hooks/useScrollPosition";
// import useCheckMobileScreen from "../../hooks/isMobile";
import MgButton from "./elements/mgButton";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function Banners() {
  gsap.registerPlugin(ScrollTrigger);
  const scrollPosition = useScrollPosition();

  const [colourState, setcolourState] = useState("bg-blue-theme");

  useEffect(() => {
    const load = async () => {
      if (typeof window !== undefined) {
        gsap.from(".box1", {
          scrollTrigger: {
            trigger: ".box1",
            start: "center center",
            end: "center top",
            pin: true,
            scrub: 0.2,
          },
          x: "-100%",
          ease: "power.in",
          scale: "2",
          transformOrigin: "center center",
          opacity: 0,
        });
        gsap.from(".box2", {
          scrollTrigger: {
            trigger: ".box2",
            start: "center center",
            end: "center top",
            pin: true,
            scrub: 0.2,
          },
          x: "100%",
          ease: "power.in",
          scale: "2",
          transformOrigin: "center center",
          opacity: 0,
        });
      }
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
    <div style={{ overflow: "hidden" }}>
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
            <div className="hero-banners white dn db-l">
              <h1
                className="regular-font ma0"
                style={{
                  transform: `translate3d(0px, ${header3dTrans}px, 0px) scale(${
                    scrollPosition === 0 ? 1 : headerShrink
                  })`,
                  opacity: `${scrollPosition === 0 ? 1 : opacityReduce}`,
                }}
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
      </div>

      <div className="work-section dn db-l">
        <div className={`second-div crl-trans ${colourState}`}>
          <div className="container-wrap2 flex">
            <div className="container-projects w-50 initial box1">
              <Link href="/work/neu-one">
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

            <div className="container-projects  box2">
              <Link href="/work/fly-bee">
                <a className="project">
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
                </a>
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
              <Link href="/work/neu-herbs">
                <a className="project">
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
                </a>
              </Link>
            </div>

            <div className="container-projects ">
              <Link href="/work/toetoes">
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
              <Link href="/work/airbon">
                <a className="project">
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
                </a>
              </Link>
            </div>

            <div className="container-projects ">
              <Link href="/work/fitness-x">
                <a className="project">
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
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={`second-div crl-trans ${colourState}`}>
          <div className="container-wrap2 flex">
            <div className="container-projects w-50 initial ">
              <Link href="/work/chaufer">
                <a className="project">
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
                </a>
              </Link>
            </div>

            <div className="container-projects ">
              <Link href="/work/nft-verse">
                <a className="project">
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
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <MgButton />
    </div>
  );
}
