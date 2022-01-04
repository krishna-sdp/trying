import React from "react";
import Link from "next/link";
import { workData } from "../../data/work";

export default function WorkShocase() {
  return (
    <div className="work-overview pad-mt pad-mb dont-show mph20">
      <div className="container-wrap">
        <div className=" center ">
          <div className="cf ">
            <div className="fl w-100 w-30-l  ">
              <div className="">
                <h1 className="medium-font heading-txt mt0 ml0">Work</h1>
              </div>
            </div>
            <div className="fl w-100 w-70-l  ">
              <div className=" side-txt ">
                <h1 className="regular-font m-head title-txt mt0">
                  Experienced companies, new layers or ferocious startups
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" center pt5-ns pt4 ">
          <div className="mine-table cf">
            {workData.map((e, i) => (
              <div className="  fl w-100 w-50-ns ph3">
                <div className="  ">
                  <img
                    className="work-image"
                    src={`assets/images/home-work/${e.images}`}
                    alt="dummy"
                  />
                  <div className="work-detailssd">
                    <h1 className="white medium-font ma0 tc">{e.title}</h1>
                    <p className="white regular-font ma0 tc">
                     {e.tags}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-100 tc ">
          <Link href="/work">
            <a className="f6 f5-ns view-me medium-font tc link dim mb2 dib white ">
              View All Case Studies
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
