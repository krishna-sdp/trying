import React from "react";
import Link  from "next/link";

export default function ResourceHeading() {
  return (
    <section className="redetailsheading ">
      <div  className="mph20 container-wrap">
        <div className=" center ">
          <div className="cf ">
            <div className="fl w-100-l blog-padding w-100-ns ">
              <div className=" pt4 mb2 mb0-ns pb5-l pb4">
                {/* <h5 className="medium-font">MANAGING PARTNER</h5> */}

                <h1 className="regular-font m-head">
                5 Pillars of Effective Landing <br/> Page Design
                </h1>

                {/* <p className="regular-font m-subhead">
                  Let’s consider the must-have points that make a landing page
                  design both user-friendly and effective for the business
                  goals. Packed with web design examples.
                </p> */}
                <h6 className="semibold-font ma0">-By Sheell Desae</h6>
                 <p className="share-post light-font pl1">Share Post on</p>
                 <div className="social-links">
                        <Link href="#">
                        <img
                          src="/assets/images/resource/icon/facebook-logo.png"
                          alt="facebook logo"
                        />
                        </Link>

                        <Link href="#">
                        <img
                          src="/assets/images/resource/icon/linkedin.png"
                          alt="linkedin"
                        />
                        </Link>
                          
                        <Link href="#">
                        <img src="/assets/images/resource/icon/twitter.png"  alt="twitter"/>

                       
                        </Link>
                        <Link href="#">
                        <img
                          src="/assets/images/resource/icon/Copy Link.svg"
                          alt="copy link"
                        />
                        </Link>
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container-wrap">
        <div className="blog-padding">

        <div
          className="banner-images-are blog-padding "
          style={{
            backgroundImage: `url(/assets/images/resource/hero-banner.jpg)`,
            height: " 600px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center center",
          }}
        ></div>

        </div>
        {/* <img src={heroBannerData.image} alt="hero-image" /> */}
      </section>
    </section>
  );
}
