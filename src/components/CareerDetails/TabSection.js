import React from "react";
import { Link } from "react-router-dom";
import { useRouter } from "next/router";

export default function CareerHeading() {
  const router = useRouter();

  return (
    <section className="tabs-link">
      <div className="container-wrap">
        <div className="mw9 center pt3">
          <div className="cf">
            <div className="fl w-100 w-100-ns">
              <div className="tabs mph20 center ">
                <div className="tabs__menu flex mb2 pt3 ">
                  <div
                    for="section1"
                    className="tabs__menu-item tc  bg-white pr5-l pb2 bg-animate hover-bg-white pointer "
                  >
                    <Link
                      className={` ${
                        router.pathname === "/career/role-overview"
                          ? "active-tab  "
                          : ""
                      }tab-label no-underline pb2 ph2 regular-font`}
                      to="/career/role-overview"
                    >
                      {/* <a className="tab-label active-tab  pb2 ph2 regular-font"> */}
                      Role overview
                    </Link>
                  </div>
                  <div
                    for="section2"
                    className="tabs__menu-item  tc pl3 pl5-l  pb2 bg-animate hover-bg-white pointer"
                  >
                    <Link
                      className={` ${
                        router.pathname === "/career/apply-job"
                          ? "active-tab  "
                          : ""
                      }tab-label no-underline pb2 ph2 regular-font`}
                      to="/career/apply-job"
                    >
                      {/* <a className="tab-label  pb2 ph2 regular-font"> */}
                      Apply a Job
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
