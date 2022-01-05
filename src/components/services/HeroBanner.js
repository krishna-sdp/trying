import React from "react";
import { useRouter } from 'next/router'
export default function HeroBanner({ heroBannerData }) {
  const router = useRouter()
  return (
    <div>
      <div className="mph20 container-wrap">
        <div className="cf  pv5">
          <section className="pv3-l">
            {/* <img
              onClick={() => router.back()}
              className="back-btn pointer mb3"
              src="/assets/svg/back-left.svg"
              alt="back-button"
              height="31px"
            /> */}
            <h1 className="title mt3 regular-font mb0 main-heading-animation ">
              {heroBannerData.title}
            </h1>
            {heroBannerData.subheading !== "" && (
              <p className="regular-font mt2 subheading sub-heading-animation mb0">
                {heroBannerData.subheading}
              </p>
            )}
          </section>
        </div>
      </div>

      <section>
        <div
          className="banner-images-are"
          style={{
            backgroundImage: `url(${heroBannerData.image})`,
            height: "80vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center center",
          }}
        ></div>
        {/* <img src={heroBannerData.image} alt="hero-image" /> */}
      </section>

      <section className="mph20 quotes-bg">
        <div className="container-wrap  give-padding flex ">
          <img
            src="/assets/svg/quite.svg"
            alt="quotes"
            className="quotes-image pr3 dn db-l"
          />
          <p className="regular-font quotes pt4-l m-subhead ma0  pad-mt pad-mb">{heroBannerData.quote}</p>
        </div>
      </section>
    </div>
  );
}
