import React from "react";
import { Waypoint } from "react-waypoint";
import Link from "next/link";

import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";

export default function Footer() {
  return (
    <footer className=" mph20 footer-main">
      <div className="container-wrap">
        <section className="pt5-l pad-mt ">
          <h1 className="pt4-ns white main-footer-txt pb2 pb0-ns ma0  regular-font">
            Have a project in mind? <br />{" "}
            <span className="">Let’s get to work.</span>
          </h1>

          <div className="middle-content mw9 center  pt1 pb3-l pb3">
            <div className="cf d-flex items-center">
              <div className="fl w-100 w-50-l ">
                <div className="content-hai pv4-l pt2 pb3 mr2 regular-font">
                  <p className="white">
                    Drop us a line, and we’ll get in touch.
                  </p>
                  <p className="white se-pa ">
                    We’ll see if we’re a match and how we can help each other.
                  </p>
                </div>
              </div>
              <div className="fl w-100 w-50-l  ">
                <div className="fo-btn   pv2 mr2">
                  <Link href="/contact-us">
                    <motion.a className="f6 pointer btn-pas start-project  medium-font tc link dim ph3 pv2 mb2 dib white bg-primary">
                      Start a Project
                      <img
                        className="pl3"
                        alt="arrow"
                        src="/assets/svg/arrow.svg"
                      />
                    </motion.a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="email-content pb3 pb3-l">
            <h1 className="medium-font email-lable">E-MAIL</h1>
            <h1 className="regular-font  white email">
              <a href="mailto: hello@sheelldesae.com">
                {" "}
                hello@sheelldesae.com{" "}
              </a>{" "}
            </h1>
          </div>

          <div className="bottom-footer">
            <div className="cf pt2  padd0 regular-font">
              <div className=" fl w-50   footer-dis  ">
                <div className="content-hai">
                  <p className="tj-l tc">© SDP 2021. All Rights Reserved</p>
                </div>
              </div>
              <div className="tr-ns fl w-50 footer-dis  ">
                <p className="tr-l tc lastp">
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>{" "}
                  |{" "}
                  <Link href="/terms-conditions">
                    <a>Terms & Conditions</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
