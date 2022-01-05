import React ,{useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import gsap from "gsap";
gsap.registerPlugin(CSSPlugin)
const C = CSSPlugin;  // here is the gotcha....
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);
gsap.core.globals("CSSPlugin", CSSPlugin);


export default function CardsAnimation({colourState}) {
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);


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


    return (
        <div className="work-section dn db-l">
        <div className={`second-div crl-trans ${colourState}`}>
          <div className="container-wrap2 flex">
            <div ref={box1Ref}  className="container-projects w-50 initial ">
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
  
            <div ref={box2Ref} className="container-projects  ">
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
    )
}

