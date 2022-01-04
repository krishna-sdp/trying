import React,{useState} from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
export default function OurValuecard() {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <section className="mph20 ourValue-card pb5-l pb1 pb3-m pt3 pt0-l pa3">
      <div className="container-wrap">
        <div className=" pb2 pb0-l  regular-font">
          <div className="cf">
            {dataCard.map((_, i) => (
              <div className="fl  w-third-l w-third-ns pl3-ns cards">
                <div className=" bg-white   pt3-l">
                  
                  
                  
                  <CountUp
                      start={viewPortEntered ? null : 0}
                      end={_.title}
                      duration="2"
                      suffix={_.suffix}
                    >
                      {({ countUpRef, start }) => {
                        return (
                          <VisibilitySensor
                            active={!viewPortEntered}
                            onChange={start}
                            // onChange={(isVisible) => {
                            //   if (isVisible) {
                            //     setViewPortEntered(true);
                            //   }
                            // }}
                            delayedCall
                          >
                            <h1
                             className=" tj-l  ma0 mb2 mb4-l"
                              ref={countUpRef}
                            />
                          </VisibilitySensor>
                        );
                      }}
                    </CountUp>
                    
                    

                  <h6 className=" tj-l  ma0 mb4-l">{_.label}</h6>
                  <p className="regular-font tj-l  pr5-l pt2-l">{_.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const dataCard = [
  {
    title: 40,
    suffix:"+",
    label: "Members",
    subtitle:
      "As a digital agency for creativity, technology and data, we deliver end-to-end capabilities to our clients",
  },
  {
    title: 200,
    suffix:"+",
    label: "Completed Projects",
    subtitle:
      " As a digital agency for creativity, technology and data, we deliver end-to-end capabilities to our clients",
  },
  {
    title: 5,
    suffix:" Years",
    label: "Of Experience",
    subtitle:
      " As a digital agency for creativity, technology and data, we deliver end-to-end capabilities to our clients",
  },
];
