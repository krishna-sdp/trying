import React from "react";
import { Button } from "antd";

import Link from "next/link";

export default function Banner({ about }) {

  return (
    <section className="work1-page">
      <div className=" ">
        <section>
          <div
            className="banner-images-are"
            style={{
              background: `url(/assets/images/workdetails/${about.banner1})`,
              height: "65vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: " center center",
            }}
          ></div>
        </section>

        <div className="container-wrap center pv3-ns regular-font">
          <div className="cf mph20 pv5-ns work-padd ">
            <div className="fl w-100 w-30-l">
              <h6 className="ma0 psb-ms">{about.content.title}</h6>
            </div>

            <div className="fl w-100 w-70-l ">
              <div className=" work-para middle-content">
                {about.content.arr.map((_, i) => (
                  <p key={i} className="ma0">{_}</p>
                ))}

                <Link href={about.website}>
                  <Button className="btn1   pv3 ph4  workbtnsd bg-white">
                    Visit Website
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div
            className="banner-images-are"
            style={{
              background: `url(/assets/images/workdetails/${about.banner2})`,
              height: "790px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: " center center",
            }}
          ></div>
        </section>

        <div className="container-wrap center ph3-ns regular-font ">
          <div className="cf mph20 work-padd pt5-ns pb4-ns   ">
            <div className="fl w-100 w-30-l">
              <h6 className="ma0  pt5-l clr-5e5e76">
                {about.uniqueExp.title}
              </h6>
            </div>

            <div className="fl w-100 w-70-l ">
              <div className="pv4-l work-para middle-content ">
                {about.uniqueExp.arr.map((_, i) => (
                  <p className="mb0" key={i}>{_}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
