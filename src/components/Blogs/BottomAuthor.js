import React from "react";
import Share from "./SocialShare";

export default function BottomAuthor({title}) {
  return (
    <section className="redetailsheading mph20">
      <div className="container-wrap">
        <div className="blog-padding center pt4">
          <div className="cf pb4">
            <div className="fl w-100  w-100-ns ">
              <hr />

              <div className=" center blog-author-info  pt3">
                <div className="cf">
                  <div className="fl w-100 w-100-ns  ">
                    <div className="">
                      <div className="flex ma0 ">
                        <div className=" w-30 w-20-m w-10-l pt3">
                          <code>
                            {" "}
                            <img
                              src="/assets/images/resource/sheell1.png"
                              alt="author image"
                            />
                          </code>
                        </div>
                        <div className="w-70 w-80-l w-90-l mr2 pt4">
                          <code>
                            {" "}
                            <h6 className="ma0 medium-font">Sheell Desae</h6>
                            <h5 className="mt2 regular-font">Author</h5>
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="fl w-10-l  ma0  pb5 " />

                  <div className="fl w-100 w-90-l ma0  pb5 ">
                    <div className=" ma0">
                      <p className="regular-font ma0">
                        Sheell Desae works as a MD with SDP. He holds an
                        experience of 6 years in content and has been associated
                        with technology-oriented content since the beginning of
                        his career. Sheell likes to read and write blogs on
                        topics related to data analytics, cloud, and application
                        modernization.
                      </p>
                      <p className="regular-font">Share Post on</p>
                      <Share  title={title}/>
                    </div>
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
