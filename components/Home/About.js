import React from "react";
import Link from "next/link";
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function About() {
  // move element on hover direction

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [-45, 45]);
  const rotateY = useTransform(x, [0, 400], [45, -45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMouseLeave(event) {
    x.set(196);
    y.set(172);
  }

  return (
    <div className="container-wrap">
      <div className="aboutus-overview center pad-mt pad-mb pt4-l pb2-l no-xflw">
        <div className="cf mph20 ph2-l pv5-l ">
          <div className="fl w-100 w-30-l ph2-l ">
            <div
              // data-aos="fade-right"
              // data-aos-duration="700"
              // data-aos-delay="50"
              // data-aos-easing="ease-in-out"
              className=" "
            >
              <h1 className="medium-font heading-txt mt1 tj-l ">About</h1>
            </div>
          </div>
          <div className="fl w-100 w-70-l ph2-l ">
            <div className=" side-txt middle-content">
              <p
              
                className="light-font mt0 tj-l mb0 mb-ns pms"
              >
                We bring the experience wherever you connect with your
                customers. We create websites that earn, brands that are seen
                and strategies that work. The best result comes when emotions
                merge with data, technology with design and your company with
                ours.
              </p>

              <p
              
              className="light-font tj-l mb0 mb-ns pms"
            >
              We help different brands develop new digital products, optimize existing 
              online services, by researching and defining value propositions, aesthetic 
              and well-designed user interfaces.
            </p>
              <motion.div 
                className="w-100 pt3-l pt2  tj-l"
                onMouseMove={handleMouse}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/about-us">
                  <motion.a
                    // style={{
                    //   rotateX: rotateX,
                    //   rotateY: rotateY,
                    // }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 1.05,
                    }}
                    className="f6 know-more c-button--gooey btn-pas medium-font tc link  ph3 pv2 mt3 mb2 dib clr-02021E "
                  >
                    Know More
                    <div className="c-button__blobs ">
                      <div></div>
                      {/* <div></div>
                      <div></div> */}
                    </div>
                  </motion.a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
