import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AllblogData } from "../../data/blogsData";
import { isEmptyObject } from "../../helper/utils";
import Heading from "../../components/Blogs/Heading";
import BottomAuthor from "../../components/Blogs/BottomAuthor";

export default function work1() {
  const router = useRouter();
  const { blog } = router.query;
  const [blogData, setblogData] = useState({});

  useEffect(() => {
    if (blog) {
      //check for work data
      for (let i = 0; i < AllblogData.length; i++) {
        let element = AllblogData[i];
        if (element.page === blog) {
          setblogData(element);
        }
      }
    }
  }, [blog]);

  return (
    <div className="work-page-new">
      {isEmptyObject(blogData) ? (
        <div> Loading </div>
      ) : (
        <div className="cf">
          <Heading blogData={blogData} />
          {blogData.fold.map((item, i) => (
            <>
              <section className="container-wrap">
                <div className="mph20">
                  {item.banner && (
                    <div className="blog-padding banner-topa">
                      <div
                        className="banner-images-are blog-padding "
                        style={{
                          backgroundImage: `url(/assets/images/resource/blogs/${item.banner})`,
                          height: "500px",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                        }}
                      ></div>
                    </div>
                  )}
                  {/* this is heading */}
                  {item.heading && (
                    <h1 className="regular-font b-head mb3-l mb1-ns  mt3-ns mv0 mv3">
                      {item.heading}
                    </h1>
                  )}
                  {/* this is paragraph */}
                  {item.ptag && item.ptag.length >= 1 && (
                    <div className=" redetailsheading">
                      <div className="blog-padding center ">
                        <div className=" ">
                          {item.ptag.map((item, i) => (
                            <p
                              key={i}
                              className="regular-font mt0 tc-l tj-l mb0 mb-ns pv3-ns pv2"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* this is banners */}
                  {item.bannerOne && (
                    <section className="image44 container-wrap mt4 mb3  mv4-m mv5-l">
                      <div className=" center ph3-ns mb3-l pb3-m">
                        <div className="cf ph2-ns ">
                          <div className="fl w-100 w-100-ns pa2-l ">
                            <div className=" pa2-l ">
                              <div
                                className="banner-images-are blog-padding "
                                style={{
                                  backgroundImage: `url(/assets/images/resource/blogs/Picture-3.png)`,
                                  height: " 600px",
                                  backgroundRepeat: "no-repeat",
                                  backgroundSize: "cover",
                                  backgroundPosition: " center center",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </section>
              {/* if there is list then this will show */}
              {item.list && (
                <div className="container-wrap  redetailsheading pv3 pb4-ns">
                  <ul className="regular-font mt0 tc-l tj-l mb0 mb-ns">
                    {item.list.map((_, i) => (
                      <li key={i}>{_}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ))}

          <BottomAuthor title={blogData.title} />
        </div>
      )}
    </div>
  );
}
