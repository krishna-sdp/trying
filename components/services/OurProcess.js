import React, { useState } from "react";
import PlusIcon from "../../assets/svg/plus";
import Accordion from "../Accordion";
import ShowMore from "react-show-more";
import { Collapse } from "antd";
const { Panel } = Collapse;

export default function OurProcess() {
  const [open, setOpen] = useState([]);
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("band karrrr");
    setOpen([]);
  };

  const callback = (key) => {
    console.log(key);
  };
  return (
    <section className="mph20 ourProcess-details">
      <div className="container-wrap">
        <div className="pv5-l pad-mt pad-mb  center">
          <div className="cf pt3-l ">
            <div className="fl w-100 w-30-l ">
              <h3 className="de-title clr-585881
regular-font mb0 mt0  pt3-l">
                Our Process
              </h3>
            </div>
            <div className="fl w-100 w-70-l ">
              <h1 className="de-main-title ma0 m-head pt3 pt0-l clr-02021e regular-font">
                Design Thinking
              </h1>

              <div className="description pt3 regular-font pb2">
                <p>
                  The design thinking process outlines a series of steps that
                  bring this ideology to life—starting with building empathy for
                  the user, right through to coming up with ideas and turning
                  them into prototypes.
                  At this point, you’re probably thinking that this sounds
                  suspiciously like UX. So what makes design thinking so
                  special?
                </p>
                <p>
                  The uniqueness of design thinking lies in the kinds of
                  problems it addresses. When it comes to the problems to be
                  solved with design thinking, we’re not just talking about
                  ordinary, common problems that have tried-and-tested
                  solutions. We’re talking about highly complex, “wicked”
                  problems: the kind that refuse to be solved using standard
                  methods and approaches.
                </p>
                {/* <p>
                  Not only are these problems difficult to define, but any
                  attempt to solve them is likely to give way to even more
                  problems. Wicked problems are everywhere, ranging from global
                  issues such as climate change and poverty, to challenges that
                  affect almost all businesses such as change management,
                  achieving sustainable growth, or maintaining your competitive
                  edge.
                </p>
                <p>
                  Design thinking is an actionable approach which can be used to
                  tackle the world’s wickedest of problems. It fosters
                  user-centricity, creativity, innovation, and out-of-the-box
                  thinking.
                </p> */}
              </div>

              {/* <div className="description  regular-font ">
                <p>
                  There are certain principles that are pivotal to design
                  thinking and outlined below are the five of design thinking’s
                  most important principles we follow:
                </p>
              </div> */}

              {/* <div className="view-more">
                <Collapse
                  activeKey={open}
                  onChange={() => setOpen((prev) => [1])}
                >
                  <Panel
                    showArrow={false}
                    onChange={() => setOpen((prev) => [1])}
                    header={<Header />}
                    key="1"
                    className="site-collapse-custom-panel description  regular-font "
                  >
                    {thinkingProcess.map((_, i) => (
                      <div className="proces">
                        <h1>{`${i + 1}.  ` + _.title}</h1>
                        <p>{_.subtitle}</p>
                        {_.extras && (
                          <div>
                            <h1>{_.extras.title}</h1>
                            <ul>
                              {_.extras.arr.map((k, i) => (
                                <li>{k}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}

                    <div className="flex pt4" onClick={() => setOpen([])}>
                      <img
                        height="30px"
                        width="21px"
                        src="/assets/svg/minus-3108.svg"
                      />
                      <span className="pl2 view-text  clr-01051f f5 medium-font">
                        VIEW LESS
                      </span>
                    </div>
                  </Panel>
                </Collapse>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="flex pt3">
      <PlusIcon />
      <span className="pl2 view-text marginssad clr-01051f f5 medium-font">
        VIEW MORE
      </span>
    </div>
  );
}

const thinkingProcess = [
  {
    title: "User-centricity and empathy",
    subtitle:
      "Design thinking is all about finding solutions that respond to human needs and user feedback. People, not technology, are the drivers of innovation, so an essential part of the process involves stepping into the user’s shoes and building genuine empathy for your target audience",
  },
  {
    title: "Collaboration",
    subtitle:
      "The aim of design thinking is to pool a diverse variety of perspectives and ideas; this is what leads to innovation! Design thinking encourages collaboration between heterogeneous, multidisciplinary teams which may not typically work together.",
  },
  {
    title: "Ideation",
    subtitle:
      "Design thinking is a solution-based framework, so the focus is on coming up with as many ideas and potential solutions as possible. Ideation is both a core design thinking principle and a step in the design thinking process. The ideation step is a designated judgment-free zone where participants are encouraged to focus on the quantity of ideas, rather than the quality.",
  },
  {
    title: "Experimentation and iteration",
    subtitle:
      "It’s not just about coming up with ideas; it’s about turning them into prototypes, testing them, and making changes based on user feedback. Design thinking is an iterative approach, so be prepared to repeat certain steps in the process as you uncover flaws and shortcomings in the early versions of your proposed solution.",
  },
  {
    title: "A bias towards action",
    subtitle:
      "Design thinking is an extremely hands-on approach to problem-solving favoring action over discussion. Instead of hypothesizing about what your users want, design thinking encourages you to get out there and engage with them face-to-face. Rather than talking about potential solutions, you’ll turn them into tangible prototypes and test them in real-world contexts.",
    extras: {
      title: "The Design Thinking Framework",
      arr: ["Empathize", "Define", "Ideate", "Prototype", "Test"],
    },
  },
];
