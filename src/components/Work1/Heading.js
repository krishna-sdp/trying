import React from "react";
export default function Heading({head}) {
  return (
    <section className="work1-heading">
      <div className="container-wrap">
        <div className="mph20 center ">
          <div className="cf">
            <div className="fl w-100  w-100-ns  pv4-l pt4">
              <div className="">
                  <p className="light-font">{head.title}</p>
                <h1 className="page-head regular-font fw1 ma0 pb4  main-heading-animation ">
                {head.subtitle} </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
