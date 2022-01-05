import React from "react";

export default function OurProcess1() {
  return (
    <section className="ourProcess-details">
      <div className="pv4-l container-wrap">
        <div className="mph20 pt5-l  pt4 pb4-ns pb3 pb0-l center">
          <div className="cf  ">
            <div className="fl w-100 w-30-l ">
              <h3 className="de-title clr-585881 regular-font ma0 pv3-l">
                Our Process
              </h3>
            </div>
            <div className="fl w-100 w-70-l ">
              <h1 className="pt3 pt0-l ma0 de-main-title m-head clr-02021e regular-font">
                We do in Technology & Engineering
              </h1>
            </div>
          </div>

          {datahai.map((item, i) => (
            <>
              <div
                key={i}
                className="cf our-process-2 our-process-1 regular-font pv5-l pv4-m pv3"
              >
                <div className="fl w-30-l  ">
                  <div className="">
                    <h2 className="mytitle1 ma0 mt2 psb-ms ">{item.title}</h2>
                  </div>
                </div>
                <div className="fl w-70-l  ">
                  <div className="">
                    {item.ptag.map((_, j) => (
                      <p key={j} className="ma0 m-tag pms">
                        {_}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {datahai.length - 1 !== i && <hr />}
            </>
          ))}

          {/* <div className="cf our-process-2 our-process-1 regular-font ">
            <div className="fl w-30-l  ph4">
              <div className="pt5">
                <h2 className="mytitle1 ma0 mv2 ">Build and Release</h2>
              </div>
            </div>
            <div className="fl w-70-l pv4-l ph4">
              <div className="pt4">
                <p className="ma0 m-tag">
                  A brand strategy provides direction for the marketing machine
                  you are about to unleash on the world. It outlines the key
                  elements that make your brand unique, your purpose and goals,
                  and how you will deliver on them. Every brand strategy is
                  unique. It defines the way your target audience will see,
                  interact, and fall in love with your brand.
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="cf our-process-2 our-process-1 regular-font ">
            <div className="fl w-30-l  ph4">
              <div className="pt5">
                <h2 className="mytitle1 ma0 mv2 ">Quality and Assurance</h2>
              </div>
            </div>
            <div className="fl w-70-l pv4-l ph4">
              <div className="pt4">
                <p className="ma0 m-tag">
                  A brand strategy provides direction for the marketing machine
                  you are about to unleash on the world. It outlines the key
                  elements that make your brand unique, your purpose and goals,
                  and how you will deliver on them. Every brand strategy is
                  unique. It defines the way your target audience will see,
                  interact, and fall in love with your brand.
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="cf our-process-2 our-process-1 regular-font ">
            <div className="fl w-30-l  ph4">
              <div className="pt5">
                <h2 className="mytitle1 ma0 mv2 ">Go Live</h2>
              </div>
            </div>
            <div className="fl w-70-l pv4-l ph4">
              <div className="pt4">
                <p className="ma0 m-tag">
                  A brand strategy provides direction for the marketing machine
                  you are about to unleash on the world. It outlines the key
                  elements that make your brand unique, your purpose and goals,
                  and how you will deliver on them. Every brand strategy is
                  unique. It defines the way your target audience will see,
                  interact, and fall in love with your brand.
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="cf our-process-2 our-process-1 regular-font ">
            <div className="fl w-30-l  ph4">
              <div className="pt5">
                <h2 className="mytitle1 ma0 mv2 ">
                  Optimization and Enhancements
                </h2>
              </div>
            </div>
            <div className="fl w-70-l pv4-l ph4">
              <div className="pt4">
                <p className="ma0 m-tag">
                  A brand strategy provides direction for the marketing machine
                  you are about to unleash on the world. It outlines the key
                  elements that make your brand unique, your purpose and goals,
                  and how you will deliver on them. Every brand strategy is
                  unique. It defines the way your target audience will see,
                  interact, and fall in love with your brand.
                </p>
              </div>
            </div>
          </div> */}
          {/* <hr/> */}
          {/* 
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

const datahai = [
  {
    title: "Developement",
    ptag: [
      "A brand strategy provides direction for the marketing machine you are about to unleash on the world. It outlines the key elements that make your brand unique, your purpose and goals, and how you will deliver on them. Every brand strategy is unique. It defines the way your target audience will see, interact, and fall in love with your brand.",
    ],
  },
  {
    title: "Build and Release",
    ptag: [
      "A brand strategy provides direction for the marketing machine you are about to unleash on the world. It outlines the key elements that make your brand unique, your purpose and goals, and how you will deliver on them. Every brand strategy is unique. It defines the way your target audience will see, interact, and fall in love with your brand.",
    ],
  },
  {
    title: "Quality and Assurance",
    ptag: [
      "A brand strategy provides direction for the marketing machine you are about to unleash on the world. It outlines the key elements that make your brand unique, your purpose and goals, and how you will deliver on them. Every brand strategy is unique. It defines the way your target audience will see, interact, and fall in love with your brand.",
    ],
  },
  {
    title: "Go Live",
    ptag: [
      "A brand strategy provides direction for the marketing machine you are about to unleash on the world. It outlines the key elements that make your brand unique, your purpose and goals, and how you will deliver on them. Every brand strategy is unique. It defines the way your target audience will see, interact, and fall in love with your brand.",
    ],
  },
  {
    title: "Optimization and Enhancements",
    ptag: [
      "A brand strategy provides direction for the marketing machine you are about to unleash on the world. It outlines the key elements that make your brand unique, your purpose and goals, and how you will deliver on them. Every brand strategy is unique. It defines the way your target audience will see, interact, and fall in love with your brand.",
    ],
  },
];
