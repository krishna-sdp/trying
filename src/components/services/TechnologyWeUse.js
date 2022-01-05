import React from "react";

export default function TechnologyWeUse() {
  return (
    <div className="bg-dark pb5-ns">
      <div className="container-wrap">
        <div className="mph20 pv5-l  pad-mt pad-mb center">
          <div className="cf pt3-l">
            <div className="fl w-100 w-30-l ">
              <h3 className="de-title clr-ffffff99 medium-font ma0 pt3-l">
                Technologies
              </h3>
            </div>
            <div className="fl w-100 w-70-l ">
              <h1 className="de-main-title m-head mb0 white ma0 regular-font ">
                Technologies We Use
              </h1>
            </div>
          </div>
        </div>
    

      <div className="pb4">
        <div className="cf  margingservi">
          {technologies.map((item, index) => (
            <div key={index} className="fl  w-100  w-third-l w-50-m pb4 ph3 ">
              <div className=" my-height-tech bg-lightdark ph4 pt3 pb4">
                <h1 className="techology-name white regular-font">
                  {item.title}
                </h1>
                <div className=" image-wraper grid-imsgsa pb2">
                  {item.img.map((_, i) => (
                    <img
                      src={`/assets/images/technologies/${_.image}`}
                      alt="react"
                      className={`pr3 pb3 ${_.class}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 
      <section className="pb3-l bg-dark ml4 technologies-list ">
        {technologies.map((item, index) => (
          <article className="  bg-lightdark ma3 pa3 fl w-30-l pb5 
 ">

            <div key={index} className="cf tech-indivi">
              <h1 className="techology-name white regular-font">
                {item.title}
              </h1>
              {item.img.map((item, index) => (
                <div className="my-margin">
                  <div key={index} className="fl technologhy-wr tc pv3 ph3 ">
                    <div className="image-wraper">
                      <img
                        src={`/assets/images/technologies/${item.image}`}
                        className="db"
                        alt="react"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section> */}
    </div>
    </div>
  );
}

const technologies = [
  {
    title: "Design",
    img: [
      {
        image: "pngegg (2).png",
        class:"icons disgn1",
      },
      {
        image: "pngegg (3).png",
        class:"icons figmna",
      },
      {
        image: "pngegg (4).png",
        class:"icons",
      },

      {
        image: "Group 125.png",
        class:"icons",
      },

      {
        image: "pngegg (6).png",
        class:"icons ai-photo",
      },

      {
        image: "Mask Group 18.png",
        class:"icons photoshop",
      },
    ],
  },
  {
    title: "Web App Development",
    img: [
      {
        image: "Group 138.png",
        class:"icons",
      },
      {
        image: "Group 139.png",
        class:"icons",
      },
      {
        image: "Group 140.png",
        class:"icons",
      },
    ],
  },
  {
    title: "Mobile App Development",
    img: [
      {
        image: "pngegg (11).png",
        class:"icons",
      },
      {
        image: "Group 151.png",
        class:"icons",
      },
      {
        image: "Group 133.png",
        class:"icons",
      },

      {
        image: "Group 138.png",
        class:"icons",
      },
    ],
  },
  {
    title: "Database",
    img: [
      {
        image: "Group 134-3.png",
        class:"icons",
      },
      {
        image: "Group 141.png",
        class:"icons",
      },
      {
        image: "Group 136-2.png",
        class:"icons",
      },
    ],
  },
  {
    title: "Cloud",
    img: [
      {
        image: "Group 134.png",
        class:"icons",
      },
      {
        image: "Group 135.png",
        class:"icons",
      },
      {
        image: "Group 136.png",
        class:"icons",
      },
      {
        image: "Group 141.png",
        class:"icons",
      },
    ],
  },
  {
    title: "Server Technologies",
    img: [
      {
        image: "Group 134-1.png",
        class:"icons",
      },
      {
        image: "Group 135-1.png",
        class:"icons",
      },
    ],
  },
  {
    title: "Testing",
    img: [
      {
        image: "Group 134-2.png",
        class:"icons",
      },
      {
        image: "Group 135-2.png",
        class:"icons",
      },
      {
        image: "Group 136-1.png",
        class:"icons",
      },
      {
        image: "Group 141.png",
        class:"icons",
      },
      {
        image: "Group 145.png",
        class:"icons",
      },
      {
        image: "Group 146.png",
        class:"icons",
      },
      {
        image: "Group 147.png",
        class:"icons",
      },
    ],
  },
];
