import React, { useRef } from "react";
import { Carousel } from "antd";

export default function testimonials() {
  const customeSlider = useRef(null);

  const settings = {
    arrows: true,
    infinite: true,
    dots: false,
    accessibility: true,
    focusOnSelect: true,
    pauseOnHover:false,
    draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 4500,
    speed:1700,
    slidesToShow: 1,
    autoplay: true,
  };

  const gotoNext = () => {
    customeSlider.current.next();
  };

  const gotoPrev = () => {
    customeSlider.current.prev();
  };

  return (
    <div className="mph20 Testimonial-section no-xflw no-yflw pad-mt pt4-l bg-white z-2">
      <div className="container-wrap">
        <div className="pv4-l  center ">
          <div className="cf pv4-l">
            <div className="fl w-100 w-30-l ph2-l ">
              <div className=" ma">
                <h1 className="medium-font heading-txt mt3-l  ma0">
                  Testimonials
                </h1>
              </div>
            </div>
            <div className="fl w-100 w-70-l ph2-l ">
              <div className=" side-txt ma">
                <h1 className="regular-font test-title pt3 pt0-l ma0 m-head">
                  Happy clients whom we were pleased to work with
                </h1>
              </div>
            </div>
          </div>
        </div>
        <section>
          <Carousel
            className=" horizontal-center"
            {...settings}
            ref={customeSlider}
          >
            {arr.map((per, i) => (
              <div className=" center pt4-l ">
                <div className="items-center cf flex-l ">
                  <div className="fl w-100 w-40-l   pv4 pv2-l ">
                    <div className="client-img tc tj-l">
                      <img
                        className="mw-100 w-100-mobile"
                        src="/assets/images/about-us/Mask Group 11.png"
                        alt="test-image"
                      />
                    </div>
                  </div>

                  <div className="fl w-100 w-60-l  pa2-l   pl4-l ">
                    <div className="pl3-l">
                      <img
                        className="mw-100"
                        src="/assets/images/quite/quite.png"
                        alt="test-image"
                      />
                      <p className="testimo-para m-sub-tes  regular-font pr4-l">
                        Outloud delivered a functional, efficient and very
                        custoize website that exceeded our expectations. Many
                        ad-hoc of requests from our side were conducted by
                        Outloud very a promptly, often under time pressure. The
                        final product was always well executed.
                      </p>
                      <div className=" justify-between v-min pt4-l">
                        <div className="fl w-100 w-50-ns">
                          <h6 className="clr-02021e ma0 pa0 medium-font">
                            John Appleseed
                          </h6>
                          <p className="clr-585881 regular-font">Foodpanda</p>
                        </div>

                        <div className="pt1 fl w-100 w-50-ns dn db-ns ">
                          <img
                            src="/assets/images/clients-logo/food-panda.png"
                            alt="client-logo"
                          />
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>
      </div>
    </div>
  );
}

const arr = [0, 1, 2, 3, 4];

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} test-arr `}
      style={{
        display: "block",
        background: "#4048DB",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        left: "-30px",
        zIndex: "1",
        display: "flex",

      }}
      onClick={onClick}
    >
      <img
        width="20px"
        height="19px"
        src="/assets/svg/home/testimonials/left-arrow.svg"
      />
    </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={`${className} test-arr `}
    style={{
      display: "block",
      background: "#4048DB",
      width: "60px",
      height: "60px",
      right: "-30px",
      borderRadius: "50%",
      zIndex: "1",
      display: "flex",
    }}
    onClick={onClick}
  >
    <img
      width="20px"
      height="19px"
      src="/assets/svg/home/testimonials/right-arrow.svg"
    />
  </div>
  );
}
