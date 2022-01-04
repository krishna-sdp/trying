import React, { useState, useEffect } from "react";
// import Heading from "../../components/Work1/Heading";
import Banner from "../../components/Work1/Banner";
import CardSection from "../../components/Work1/CardSection";
import BannerBottom from "../../components/Work1/BannerBottom";
import Heading from "../../components/Work1/Heading";
import { useRouter } from "next/router";
import { WorksData } from "../../data/workDetails";
import { isEmptyObject } from "../../helper/utils";

export default function work1() {
  const router = useRouter();
  const { workName } = router.query;
  //   console.log(workName);
  const [workData, setworkData] = useState({});

  useEffect(() => {
    if (workName) {
      //check for work data
      for (let i = 0; i < WorksData.length; i++) {
        let element = WorksData[i];
        if (element.page === workName) {
          // console.log(element)
          setworkData(element);
        }
      }
    }
  }, [workName]);

  console.log(workData);

  return (
    <div className="work-page-new">
      {isEmptyObject(workData) ? (
        <div> Loading </div>
      ) : (
        <>
          <Heading head={workData.heading} />
          <Banner about={workData.aboutProject} />
          <CardSection vertical={workData.vertical} />
          <BannerBottom ending={workData.ending} link={workData.link} />
        </>
      )}
    </div>
  );
}
