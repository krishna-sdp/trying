import React from "react";
import { careerData } from "../../data/openpositionsdata";
import { Link } from "react-router-dom";
export default function OpenPositions() {
  return (
    <div className="whatwedo-overview">
      <div className="container-wrap">
        <div className="mph20 center no-xflw no-yflw ">
          <div className="cf pt5-l pt3 ">
            <div className="fl w-100 w-30-l  ">
              <div className=" ">
                <h1 className="medium-font ma0 pt3-l heading-txt">Careers</h1>
              </div>
            </div>
            <div className="fl w-100 w-70-l  ">
              <div className=" side-txt ">
                <h1 className="regular-font ma0 m-head title-txt ">Open Position</h1>
              </div>
            </div>
          </div>

          {careerData.map((_, i) => (
            <div className={`cf  pb0-l pb3 ${careerData.length-1 !==i ? "border-btm":""}`} key={i}>
              <div className="fl w-100 w-30-l   pt5-l pt3 ">
                <div className="title-heading regular-font pb4-l pt2 pb3 pt0-l mb0">{_.title}</div>
              </div>
              <div className="fl w-100 w-70-l ">
                <div className="  ">
                  <section className="career-list pb5-l pt4-l pb3 ">
                    {_.opening.map((service, index) => (
                      <div
                        key={index}
                        className={`${
                          index === _.opening.length - 1 && "last-service"
                        }  what-wedo-container  pb3 pb0-l`}
                      >
                        <div className="flex items-center justify-between v-min pt4-l ma0">
                          <Link  className="subheading regular-font" to={service.link}>

                              {service.title}

                          </Link>
                          <Link  className="back-btn mt1" to={service.link}>

                              <img
                               
                                src="/assets/svg/right-back-arr.svg"
                                alt="back-button"
                                height="31px"
                              />

                          </Link>
                        </div>

                        <div className="service-row ">
                          {service.list.map((item, i) => (
                            <div key={i} className="service-column">
                              <p className=" regular-font ma0">
                                <div className="middle-content regular-font ma0" />
                                {item.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </section>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function isOdd(num) {
  return num % 2;
}
