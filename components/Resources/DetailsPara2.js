import React from "react";
import Link  from "next/link";

export default function DetailsPara2() {
  return (
    <section className="redetailsheading mph20">
      <div className="container-wrap">
        <div className="blog-padding center ">
          <div className="cf pb4">
            <div className="fl w-100  w-100-ns ">
              <div className="pt4-l  pv3">
                <h2 className="regular-font m-head">Clear Offer with CTA</h2>
                <p className="regular-font">
                  What makes a landing page different from all the other types
                  of web pages is its narrow focus on a particular goal. Its
                  primary purpose is to allow the visitors to land right where
                  they need and get what they want – and what the business can
                  give them according to the specific query. Creating special
                  pages means giving users clear directions. This approach
                  sounds especially effective for big e-commerce platforms,
                  where it’s easy to get lost around hundreds or even thousands
                  of items. Directing all the traffic to the home page,
                  especially in the cases of leads coming from particular
                  marketing campaigns in external resources, can result in a
                  poor user experience. The risk is high that on the home page,
                  their attention will be driven away. And the more you distract
                  a person, the lower is the chance of their going all the way
                  to the checkout.
                </p>
              </div>
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
                      <div className="social-links">
                        <Link href="#">
                        <img
                          src="/assets/images/resource/icon/facebook-logo.png"
                          alt="facebook logo"
                        />
                        </Link>

                        <Link href="#">
                        <img
                          src="/assets/images/resource/icon/linkedin.png"
                          alt="linkedin"
                        />
                        </Link>
                          
                        <Link href="#">
                        <img src="/assets/images/resource/icon/twitter.png"  alt="twitter"/>

                       
                        </Link>
                        <Link href="#">
                        <img
                          src="/assets/images/resource/icon/Copy Link.svg"
                          alt="copy link"
                        />
                        </Link>
                      </div>
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
