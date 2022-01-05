import React from "react";
import Share from "./SocialShare";

export default function Heading({ blogData }) {
  return (
    <section className="redetailsheading ">
      <div className="mph20 container-wrap">
        <div className="cf ">
          <div className="fl w-100-l blog-padding w-100-ns ">
            <div className=" pt4 ">
              <h1 className="regular-font m-head">{blogData.title}</h1>

              <h6 className="semibold-font ma0">-By {blogData.author}</h6>
              <p className="share-post light-font pl1">Share Post on</p>
              <Share  title={blogData.title}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
