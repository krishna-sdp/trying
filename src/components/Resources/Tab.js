import React from "react";
import Link from "next/link";
import { resourcesData } from "../../data/resources";
import { useRouter } from "next/router";
export default function Tab({ title }) {
  const router = useRouter();
  return (
    <div className="container-wrap">
      <div className="content-page pb5 pa3">
        <section className="resources-page pb2 pt0 pt3-ns ">
          <h1 className="heading-hai regular-font ma0 main-heading-animation">
            {title}
          </h1>
          <section>
            <div className="tabs  center">
              <div className="tabs__menu flex mb4 ">
                <div
                  for="section1"
                  className="tabs__menu-item tc pr5-l pr2-m pr2  bg-white pt4 pb2 bg-animate hover-bg-white pointer "
                >
                  <Link href="/resources">
                    <a
                      className={` ${
                        router.pathname === "/resources" ? "active-tab  " : ""
                      }tab-label resources-tab no-underline pb2 ph2 regular-font`}
                    >
                      All
                    </a>
                  </Link>
                </div>
                <div
                  for="section2"
                  className="tabs__menu-item  tc pr5-l pr2-m pr2  pt4 pb2 bg-animate hover-bg-white pointer"
                >
                  <Link href="/blogs">
                    <a
                      className={` ${
                        router.pathname === "/blogs" ? "active-tab  " : ""
                      }tab-label resources-tab no-underline pb2 ph2 regular-font`}
                    >
                      Blog
                    </a>
                  </Link>
                </div>
                <div
                  for="section3"
                  className="tabs__menu-item  tc pr5-l pr2-m pr2  pt4 pb2 bg-animate hover-bg-white pointer"
                >
                  <Link href="/whitepapers">
                    <a
                      className={` ${
                        router.pathname === "/whitepapers" ? "active-tab  " : ""
                      }tab-label resources-tab no-underline pb2 ph2 regular-font`}
                    >
                      Whitepaper
                    </a>
                  </Link>
                </div>
                <div
                  for="section3"
                  className="tabs__menu-item  tc pr5-l pr2-m pr2  pt4 pb2 bg-animate hover-bg-white pointer"
                >
                  <Link href="/infographics">
                    <a
                      className={` ${
                        router.pathname === "/infographics"
                          ? "active-tab  "
                          : ""
                      }tab-label resources-tab no-underline pb2 ph2  regular-font`}
                    >
                      Infographics
                    </a>
                  </Link>
                </div>
              </div>

              <div className="tabs__content pt4-ns pt4 pv2">
                {/* main container */}

                <div className=" center pt3 pt0-ns container2">
                  <div className="cf margin-5 pb5 box2">
                    {/* column 1 */}
                    <div className="fl w-100  w-third-l  ph3 pv4-ns dream2">
                      <article className="bg-white pb3">
                        <Link href="/blog/multi-cloud-is-the-new-cloud">
                          <a>
                            <img
                              src={`https://via.placeholder.com/380x400.png?text=Image%20Not%20Available"`}
                              className="w-100 db"
                              alt="Closeup photo of a tabby cat yawning."
                            />
                          </a>
                        </Link>

                        <div className="pt3 blog-title">
                          {/* <h2 className="medium-font mb0">MANAGING PARTNER</h2> */}
                          <p className="mt2 blog-title regular-font">
                          Multi-Cloud is the New Cloud
                          </p>
                          <small className="name db  semibold-font black">
                            Sheell Desae
                          </small>
                          <p className="time-done regular-font">2 DAYS AGO</p>
                        </div>
                      </article>
                      <article className="bg-white pb3">
                        <Link href="#">
                          <a>
                            <img
                              src={`/assets/images/resources/Mask Group 15-1.jpg`}
                              className="w-100 db"
                              alt="Closeup photo of a tabby cat yawning."
                            />
                          </a>
                        </Link>

                        <div className="pt3 blog-title">
                          {/* <h2 className="medium-font mb0">MANAGING PARTNER</h2> */}
                          <p className="mt2 blog-title regular-font">
                          Its Time for Blockchain Technology to Revolutionize the Media and Entertainment Industry

                          </p>
                          <small className="name db  semibold-font black">
                            Sheell Desae
                          </small>
                          <p className="time-done regular-font">Published on June 2, 2018
</p>
                        </div>
                      </article>
                      <article className="bg-white pb3">
                        <Link href="#">
                          <a>
                            <img
                              src={`/assets/images/resources/Mask Group 17.jpg`}
                              className="w-100 db"
                              alt="Closeup photo of a tabby cat yawning."
                            />
                          </a>
                        </Link>

                        <div className="pt3 blog-title">
                          {/* <h2 className="medium-font mb0">MANAGING PARTNER</h2> */}
                          <p className="mt2 blog-title regular-font">
                          Multi-Cloud is the New Cloud

                          </p>
                          <small className="name db  semibold-font black">
                            Sheell Desae
                          </small>
                          <p className="time-done regular-font">Published on August 16, 2017
</p>
                        </div>
                      </article>
                    </div>

                    {/* column 2 */}

                    <div className="fl w-100  w-third-l  ph3 pv4-ns  dream2">
                      <article className="bg-white pb3">
                        <Link href="/blog/its-time-for-blockchain-technology">
                          <a>
                            <img
                              src={`https://via.placeholder.com/380x342.png?text=Image%20Not%20Available`}
                              className="w-100 db"
                              alt="Closeup photo of a tabby cat yawning."
                            />
                          </a>
                        </Link>

                        <div className="pt3 blog-title">
                          {/* <h2 className="medium-font mb0">MANAGING PARTNER</h2> */}
                          <p className="mt2 blog-title regular-font">
                          Its Time for Blockchain Technology to Revolutionize the Media and...
                          </p>
                          <small className="name db  semibold-font black">
                          Sheell Desae
                          </small>
                          <p className="time-done regular-font">2 DAYS AGO</p>
                        </div>
                      </article>
                      <article className="bg-white pb3">
                        <Link href="#">
                          <a>
                            <img
                              src={`/assets/images/resources/Mask Group 14-1.jpg`}
                              className="w-100 db"
                              alt="Closeup photo of a tabby cat yawning."
                            />
                          </a>
                        </Link>

                        <div className="pt3 blog-title">
                          {/* <h2 className="medium-font mb0">MANAGING PARTNER</h2> */}
                          <p className="mt2 blog-title regular-font">
                            Top Six Challenges of Launching Digital Product
                            According to Founders and C-level Executives
                          </p>
                          <small className="name db  semibold-font black">
                            Avitus Pereira
                          </small>
                          <p className="time-done regular-font">10 MIN AGO</p>
                        </div>
                      </article>
                      <article className="bg-white pb3">
                        <Link href="#">
                          <a>
                            <img
                              src={`/assets/images/resources/Mask Group 16.jpg`}
                              className="w-100 db"
                              alt="Closeup photo of a tabby cat yawning."
                            />
                          </a>
                        </Link>

                        <div className="pt3 blog-title">
                          {/* <h2 className="medium-font mb0">MANAGING PARTNER</h2> */}
                          <p className="mt2 blog-title regular-font">
                            5 Pillars of Effective Landing Page Design
                          </p>
                          <small className="name db  semibold-font black">
                            Sheell Desae
                          </small>
                          <p className="time-done regular-font">10 MIN AGO</p>
                        </div>
                      </article>
                    </div>

                    {/* column 3 */}

                    <div className="fl w-100  w-third-l ph3 pv4-ns  dream2">
                    <article className="bg-white pb3">
                        <Link href="/blog/how-blockchain-is-transforming-manufacturing">
                          <a>
                            <img
                              src={`https://via.placeholder.com/380x401.png?text=Image%20Not%20Available"`}
                              className="w-100 db"
                              alt="Closeup photo of a tabby cat yawning."
                            />
                          </a>
                        </Link>

                        <div className="pt3 blog-title">
                          {/* <h2 className="medium-font mb0">MANAGING PARTNER</h2> */}
                          <p className="mt2 blog-title regular-font">
                            How Blockchain is Transforming Manufacturing
                          </p>
                          <small className="name db  semibold-font black">
                            Sheell Desae
                          </small>
                          <p className="time-done regular-font">2 DAYS AGO</p>
                        </div>
                      </article>
                      <article className="bg-white pb3">
                        <Link href="#">
                          <a>
                            <img
                              src={`/assets/images/resources/Mask Group 13-1.jpg`}
                              className="w-100 db"
                              alt="Closeup photo of a tabby cat yawning."
                            />
                          </a>
                        </Link>

                        <div className="pt3 blog-title">
                          <p className="mt2 blog-title regular-font">
                          How Blockchain is Transforming Manufacturing

                          </p>
                          <small className="name db  semibold-font black">
                            Sheell Desae
                          </small>
                          <p className="time-done regular-font">Published on March 19, 2018
</p>
                        </div>
                      </article>
                      <article className="bg-white pb3">
                        <Link href="#">
                          <a>
                            <img
                              src={`/assets/images/resources/Group 18.jpg`}
                              className="w-100 db"
                              alt="Closeup photo of a tabby cat yawning."
                            />
                          </a>
                        </Link>

                        <div className="pt3 blog-title">
                          {/* <h2 className="medium-font mb0">MANAGING PARTNER</h2>
                          // / */}
                          <p className="mt2 blog-title regular-font">
                            5 Pillars of Effective Landing Page Design
                          </p>
                          <small className="name db  semibold-font black">
                            Sheell Desae
                          </small>
                          <p className="time-done regular-font">10 MIN AGO</p>
                        </div>
                      </article>
                    </div>

                    {/* {resourcesData.map((item, index) => (
                      <div className="fl w-100 w-third-l w-50-m ph3 pv4-ns pv3">
                        <article className="bg-white">
                          <Link href="#">
                            <a>
                              <img
                                src={`/assets/images/resources/${item.image}`}
                                className="w-100 db"
                                alt="Closeup photo of a tabby cat yawning."
                              />
                            </a>
                          </Link>

                          <div className="pt3 blog-title">
                            <h2 className="medium-font mb0">
                              {item.tags}
                            </h2>
                            <p className="mt2 blog-title regular-font">
                              {item.subheading}
                            </p>
                            <small className="name db  semibold-font black">
                              {item.name}
                            </small>
                            <p className="time-done regular-font">
                              {item.time}
                            </p>
                          </div>
                        </article>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
