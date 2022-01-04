import React from "react";

export default function testimo() {
  return (
    <div className="Testimonial-section no-xflw no-yflw  pt4 pa3">
      <div className="container-wrap">
        <div className="pv4  center ">
          <div className="cf pv4">
            <div className="fl w-100 w-30-ns ph2 ">
              <div className=" ma">
                <h1
                  // data-aos="fade-right"
                  // data-aos-duration="700"
                  // data-aos-delay="50"
                  // data-aos-easing="ease-in-out"
                  className="light-font heading-txt mt3  ma0" >
                  Testimonials
                </h1>
              </div>
            </div>
            <div className="fl w-100 w-70-ns ph2 ">
              <div className=" side-txt ma">
                <h1
                  // data-aos="fade-left"
                  // data-aos-duration="700"
                  // data-aos-delay="50"
                  // data-aos-easing="ease-in-out"
                  className="light-font test-title ma0 m-head"
                >
                  Happy Customers
                </h1>
              </div>
            </div>
          </div>
        </div>
        <section>

        <div className=" center pt4 ">
            <div className="items-center ">

              <div className="fl w-100 w-40-ns  pa2">
                <div className="client-img">
                  <img
                    // data-aos="fade-right"
                    // data-aos-duration="850"
                    // data-aos-delay="50"
                    // data-aos-easing="ease-in-out"
                    className="mw-100"
                    src="/assets/images/about-us/Mask Group 11.png"
                    alt="test-image"
                  />
                </div>
              </div>

              <div className="fl w-100 w-60-ns  pa2  pl4-ns pt6-l ">
                <div className="pl3-ns">
                  <img
                    // data-aos="fade-left"
                    // data-aos-duration="700"
                    // data-aos-delay="50"
                    // data-aos-easing="ease-in-out"
                    className="mw-100"
                    src="/assets/images/quite/quite.png"
                    alt="test-image"
                  />
                  <p
                    // data-aos="fade-left"
                    // data-aos-duration="850"
                    // data-aos-delay="50"
                    // data-aos-easing="ease-in-out"
                    className="middle-content testimo-para regular-font"
                  >
                    Outloud delivered a functional, efficient and very custoize
                    website that exceeded our expectations. Many ad-hoc of
                    requests from our side were conducted by Outloud very a
                    promptly, often under time pressure. The final product was
                    always well executed.
                  </p>
                  <div className="flex justify-between v-min pt4">
                    <div>
                      <h6
                        // data-aos="fade-up"
                        // data-aos-duration="700"
                        // data-aos-delay="50"
                        // data-aos-easing="ease-in-out"
                        className="clr-02021e m-subhead ma0 pa0 medium-font"
                      >
                        John Appleseed
                      </h6>
                      <p
                        // data-aos="fade-up"
                        // data-aos-duration="850"
                        // data-aos-delay="50"
                        // data-aos-easing="ease-in-out"
                        className="clr-585881 regular-font"
                      >
                        Neuone
                      </p>
                    </div>

                    <div className="pt1">
                      <img
                        // data-aos="fade-up"
                        // data-aos-duration="750"
                        // data-aos-delay="50"
                        // data-aos-easing="ease-in-out"
                        src="/assets/images/clients-logo/neuone.png"
                        alt="client-logo"
                      />
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
