import React from "react";
import Heading from "../../components/CareerDetails/Heading";
import TabSection from "../../components/CareerDetails/TabSection";
import ApplyJob from "../../components/CareerDetails/ApplyJob";

export default function careerdetails() {
  return (
    <div className="career-details">
    <section className="career-details-heading">
        <Heading />
      </section>
      <div className="container-wrap">
      <TabSection />
       <ApplyJob />
        </div>
    </div>
  );
}
