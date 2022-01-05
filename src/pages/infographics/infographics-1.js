
import React from "react";
import ResourceHeading from "../../components/Resources/ResourceHeading";
import DetailsPara1 from "../../components/Resources/DetailsPara1";
import DetailsPara2 from "../../components/Resources/DetailsPara2";




export default function ResourceDetails() {
  return (
    <div className="">
      <ResourceHeading />
          
      <DetailsPara1 />

      <section className="image44">
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            <div className="fl w-100 w-100-ns pa2">
              <div className="pv2 pa2">
                <img src="/assets/images/resources/image 44.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DetailsPara2 />

    </div>
  );
}
