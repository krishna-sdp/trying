import React from "react";
import { useRouter } from 'next/router'

export default function Heading() {
  const router = useRouter()

  return (
    <section className="career-heading1">
      <div className="container-wrap">
        <div className="mph20 center ">
          <div className="cf">
            <div className="fl w-100 w-100-ns pv5 ">
            {/* <img
              onClick={() => router.back()}
              className="back-btn pointer mb3"
              src="/assets/svg/back-left.svg"
              alt="back-button"
              height="31px"
            /> */}
              <div className="">
                <h1 className="regular-font fw1 page-head main-heading-animation">
                Marketing Manager
                </h1>
                 <h3 className="main-tag light-font ma0 clr-5e5e76 pb1 sub-tags-animation m-subhead">Mumbai (India)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


