import React, { useState } from "react";
import Link from "next/link";
import { resourcesData } from "../../data/resources";
import { Works } from "../../data/workList";
import TabComponent from "./TabComponent";
import tabs from "./TabComponent/tab";
export default function WorkList() {
  const [activeWork, setactiveWork] = useState("all");
  const [workLIst, setworkLIst] = useState(Works);

  const changeTab = (value) => {
    setactiveWork(value);
    setworkLIst(Works);
  };

  return (
    <div className="container-wrap">
      <div className="content-page pb5 mph20">
        <section className="resources-page work-d pb2-ns pb4  pt3-ns  ">
          <h1 className="heading-hai regular-font main-heading-animation mt0 mb3">
            Work
          </h1>
          <p className="m-subhead sub-heading-animation light-font mt0 mb3-l pt2 pb3-ns">
            Experienced companies, new layers or ferocious startups
          </p>

          <section>
            <div className="cardsai">
              <TabComponent tabs={tabs} />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
