import React from "react";

export default function OurProcess2() {
  return (
    <section className="ourProcess-details">
      <div className="pv4-l container-wrap">
        <div className="mph20 pv5-l  pad-mt pad-mb  center">
          <div className="cf   pb4-l ">
            <div className="fl w-100 w-30-l ">
              <h3 className="de-title medium-font ma0 pv3-l">Our Process</h3>
            </div>
            <div className="fl w-100 w-70-l ">
              <h1 className="pt3 pt0-l ma0 de-main-title m-head clr-02021e regular-font">
                We do in Technology & Engineering
              </h1>
            </div>
          </div>

          <div className="cf our-process-2 regular-font pt3-l">
            {ourProcess.map((item, index) => (
              <div key={index} className="fl w-100 w-third-l  ph4">
                <div className="pt4">
                  <span className="seno">{item.id}</span>
                  <h2 className="mytitle ma0 mv2 mv4-l">{item.title}</h2>
                  <p className="thisishead ma0">{item.subHeading}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ourProcess = [
  {
    id: "01",
    title: "Requirement Analysis",
    subHeading:
      "You are a user. You know how important it is that things just work",
  },
  {
    id: "02",
    title: "Design",
    subHeading:
      "You are a user. You know how important it is that things just work",
  },
  {
    id: "03",
    title: "Architecture",
    subHeading:
      "You are a user. You know how important it is that things just work",
  },
];
