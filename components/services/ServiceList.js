import React, { useState } from "react";
// import PlusIcon from "../../assets/svg/plus";
// import Accordion from "../Accordion";
// import ShowMore from "react-show-more";
import { Collapse } from "antd";
import { useRouter } from "next/router";

const { Panel } = Collapse;

export default function ServiceList({ services, bg, icon }) {
  return (
    <section className={`service-details`}>
      <div className={bg}>
        <div className="mph20 container-wrap">
          <div className="pt5-l pb2-l pad-mt  center">
            <div className="cf pt3-l  ">
              <div className="fl w-100 w-30-l ma0">
                <h3 className="de-title white o-70 pt3-l medium-font ma0">
                  Our Services
                </h3>
              </div>
              <div className="fl w-100 w-70-l ">
                <h1 className="de-main-title pt3 pt0-l m-head ma0 regular-font">
                  We are Expertise in
                </h1>
              </div>
            </div>

            {services.map((service, index) => (
              <div className={`cf service-list border-btm `} key={index}>
                <div className="fl w-100 w-30-l ">
                  <div className="flex items-center">
                    <p className="serial-no medium-font ma0">{service.id}</p>
                    <h3 className="white serview-tt  psb-ms  regular-font ma0 pr4-l ">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="fl w-100 w-70-l servicselise">
                  <Content data={service.subtitles} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Content({ data, icon }) {
  const router = useRouter();
  const [open, setOpen] = useState([]);

  return (
    <>
      {/* <p className={`serview-ded   regular-font ma0 mt2  `}>{data[0]}</p> */}

      <div>
        {/* <Collapse activeKey={open} onChange={() => setOpen((prev) => [1])}>
          <Panel
            showArrow={false}
            onChange={() => setOpen((prev) => [1])}
            header={<Header />}
            key="1"
            className="site-collapse-custom-panel "
          > */}

        {/* {data.slice(1).map((_, i) => (
              <p
                key={i}
                className={`serview-ded  regular-font ma0 mt2 ${
                  data.length - 1 === i ? "" : "pb3"
                } `}
              >
                {_}
              </p>
            ))} */}

        <p className={`serview-ded  regular-font ma0  pb3 `}>
          Launching new digital products or refreshing existing ones is always a
          huge undertaking. But all too often, the speed of innovation is
          reduced because of endless internal debates or competing priorities
          that make it impossible to move ideas forward.
        </p>
        <p className={`serview-ded  regular-font ma0  `}>
          Modern digital technology is a starting point for the first
          introduction to your company. Creating projects at the interface of
          art, convenience, and technology, we cover all your needs, making
          communication Modern digital technology is a starting point for the
          first introduction to your company. Creating projects at the interface
          of art, convenience, and technology, we cover all your needs, making
          communication modern digital technology is a starting point for the
          first introduction to your company creating projects at the interface
          of art, convenience.
        </p>

        {/* <div className="flex pt4" onClick={() => setOpen([])}>
              <img
                height="30px"
                width="21px"
                src={icon}
              />
              <span className="pl2 view-text  clr-01051f f5 medium-font">
                VIEW LESS
              </span>
            </div>
          </Panel> 
        </Collapse>*/}
      </div>
    </>
  );
}

// function Header() {
//   return (
//     <div className="flex pt3">
//       <PlusIcon />
//       <span className="pl2 view-text marginssad clr-01051f f5 medium-font">
//         VIEW MORE
//       </span>
//     </div>
//   );
// }
