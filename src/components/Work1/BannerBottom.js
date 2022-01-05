import React from "react";
import CardSection from "./CardSection";
import Link from "next/link"

export default function BannerBottom({ ending ,link}) {
  return (
    <section className="work1-page ">
      <section className="work1-heading">
        <div className="container-wrap">
          <div className="mw9 center ">
            <div className="cf">
              <div className="fl w-100  w-100-ns pa3">
                <div className="">
                  <h2 className="page-head regular-font fw1 ma0 pb4 main-heading-animation">
                    {ending.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-wrap pb5-ns">
        <section>
          <div
            className="banner-images-are"
            style={{
              backgroundImage: `url(/assets/images/workdetails/${ending.banner})`,
              height: "600px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: " center center",
            }}
          ></div>
        </section>
      </div>

      {ending.vertical && (
        <section>
          <CardSection vertical={ending.vertical} />
        </section>
      )}

      <section className="next-project">
        <div className="container-wrap">
          <div className="mw9 center ">
            <div className="cf">
              <div className="fl w-100  w-100-ns pv3 mb3">
                <div className="">
                  <h1 className="m-head regular-font pa3 mb6-ns mb5 main-heading-animation tc">
                   
                      <Link href={link}>
                      <a className="no-underline">
                      <span className="pb3">Next Project</span></a>
                      </Link>
                     
                    
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
