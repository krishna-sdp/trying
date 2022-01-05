import React from "react";
import { Button } from "antd";
import Link  from "next/link";


export default function WorkInfo() {
  return (
    <section className="Work-page"  >
      <div
      >
        <section className="">
          <div
            className="banner-images-are"
            style={{
              backgroundImage: `url("/assets/images/work1/mockup.png")`,
              height: " 741px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: " center center",
            }}
          >
    
          </div>
        </section>
      </div>
      <div className="container-wrap center ph3-ns regular-font">
        <div className="cf ph2-ns pv4-l pa3 ">
          <div className="fl w-100 w-30-ns">
              <h6 className="ma0 pt5 pt5-l">About Project</h6>
          </div>

          <div className="fl w-100 w-70-ns ">
            <div className="pv4-l work-para middle-content">
              <p>
                Mayple is the creator of a fully-managed marketing services
                marketplace designed to help businesses work with the experts
                who are best suited to their needs and goals.
              </p>
              <p>
                {" "}
                The task was to create a new website design, simple and
                intuitive to use, which will tell the target audience about
                the advantages of the product and help expand sales. The work
                done includes the UX / UI stages with implementation on the
                Webflow platform.
              </p>
              <Link href="https://dev.neu.one/">

              <Button className="btn1 mt4 mb4 bg-white">Visit Website</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>



      <section>
        <div
          className=" container"
          style={{
            background: "#CDDDEB",
            height: "auto",
          }}
        >
          <div className="box">
            <div className="dream">
              <img
                className="work-image mr2-l ml2-l"
                src="/assets/images/work1/001_Home.png"
                alt="dummy"
              />

              <img
                className="work-image mr2-l"
                src="/assets/images/work1/017.png"
                alt="dummy"
              />

              <img
                className="work-image"
                src="/assets/images/work1/023.png"
                alt="dummy"
              />
            </div>

            <div className="dream">
              <img
                className="work-image"
                src="/assets/images/work1/011_Product Page.png"
                alt="dummy"
              />
              <img
                className="work-image"
                src="/assets/images/work1/013_Cart.png"
                alt="dummy"
              />
              <img
                className="work-image"
                src="/assets/images/work1/030.png"
                alt="dummy"
              />

              <img
                className="work-image"
                src="/assets/images/work1/008_Shopping List.png"
                alt="dummy"
              />

            </div>

            <div className="dream">

              <img
                className="work-image"
                src="/assets/images/work1/012_Product Details.png"
                alt="dummy"
              />

              <img
                className="work-image"
                src="/assets/images/work1/031.png"
                alt="dummy"
              />

            </div>

          </div>

        </div>
      </section>
    </section>
  );
}
