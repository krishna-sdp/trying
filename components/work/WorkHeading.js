import React from "react";
import { useRouter } from 'next/router'

export default function WorkHeading() {
  const router = useRouter()

  return (
    <section className="work-us-heading">
      <div className="container-wrap">
        <div className="mw9 center pt3-ns pb5-l">
          <div className="cf">
            <div className="fl w-100  w-100-ns pa3 pt5-l">
            {/* <img
              onClick={() => router.back()}
              className="back-btn pointer mb3"
              src="/assets/svg/back-left.svg"
              alt="back-button"
              height="31px"
            /> */}
              <div className="">
                <h1 className="regular-font fw1 mt3 mb1-l nue-head  main-heading-animation">
                  Neuone
                </h1>
              </div>
            </div> 
          </div>

          <div className="flex justify-between">
          <div className=" w-25 pa3">
            <code>
              <p className="ma2 m-ptag">Client</p>
              <h6 className="ma2 nue nue-subhead">Novasatum</h6>
            </code>
          </div>
          <div className=" w-25 pa3">
            <code>
              <p className="ma2 m-ptag">Project</p>
              <h6 className="ma2 nue-subhead">Grocery</h6>
            </code>
          </div>
          <div className=" w-25 pa3">
            <code><p className="ma2 m-ptag">Platform</p>
            <h6 className="ma2 nue-subhead">Web</h6>
            </code>
          </div>
        </div>

        </div>

       
      </div>
    </section>
  );
}
