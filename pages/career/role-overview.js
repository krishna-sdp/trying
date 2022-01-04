import React from "react";
import Heading from "../../components/CareerDetails/Heading";
import TabSection from "../../components/CareerDetails/TabSection";
import RoleOverviewInfo from "../../components/CareerDetails/RoleOverviewInfo";

export default function careerdetails() {
  return (
    <div className="career-details">
       <section className="career-details-heading">
        <Heading />  
        </section> 
        <TabSection />
        <RoleOverviewInfo />
    </div>
  );
}
