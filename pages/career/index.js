import React from "react";
import CareerHeading from "../../components/Career/CareerHeading";
import Banner from "../../components/Career/Banner";
import OpenPositions from "../../components/Career/OpenPositions";
import WorkLife from "../../components/Career/WorkLife";
import WorkGallery from "../../components/Career/WorkGallery";
import ClientLogo from "../../components/ClientLogo";
export default function Career() {
  return (

    <div className="about-page carrer-page">
      <CareerHeading />
      <Banner />
    <OpenPositions/>
      <WorkLife />
      <WorkGallery />
      <ClientLogo />
    </div>

  );
}
