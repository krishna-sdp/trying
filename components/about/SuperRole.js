import React from "react";
import { specialRoles } from "../../data/teamData";

export default function SuperRole() {
  return (
      <>
    <section className="mph20 ourValue-details1 no-xflw">
      <div className="container-wrap ">
        <div className=" pad-mt pad-mb pb3-l center">
          <div className="cf pt3-l">
            <div className="fl w-100 tc">
              <h1
                // data-aos="fade-left"
                // data-aos-duration="700"
                // data-aos-delay="50"
                // data-aos-easing="ease-in-out"
                className="de-main-title ma0 m-head clr-02021e regular-font"
              >
             Special Roles
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mph20 myteam">
      <div className="container-wrap">
        <div className=" center pt5-l pb3 ">
          <div className="cf pb5-l minus-marg">
            {specialRoles.map((item, i) => {
              return (
                <>
                  <div key={i} className="fl w-100 w-25-l w-third-m ">
                    <div className=" pt4-l pt3">
                      <article className="tc pupeess hide-child relative  center">
                        <img
                          // data-aos="fade-up"
                          // data-aos-duration={returnDuration(i)}
                          // data-aos-duration={isOdd(i + 1) ? "750" : "950"}
                          // data-aos-delay="50"
                          alt="special role"
                          className="pet-ani"
                          src={item.image}
                        />
                        <div className="pa2  bt b--black-20">
                          <h5
                          // data-aos="fade-up"
                          // data-aos-offset="30"
                          // data-aos-duration={isOdd(i + 1) ? "900" : "1100"}
                          // data-aos-delay="50"
                          >
                            Chili
                          </h5>
                          <p
                          // data-aos="fade-up"
                          // data-aos-offset="30"
                          // data-aos-duration={isOdd(i + 1) ? "1000" : "1200"}
                          // data-aos-delay="50"
                          className="mt2"
                          >
                           {item.position}
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
