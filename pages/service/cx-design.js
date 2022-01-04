import React from "react";
import ClientLogo from "../../components/ClientLogo";
import HeroBanner from "../../components/services/HeroBanner";
import OurProcess from "../../components/services/OurProcess";
import ServiceList from "../../components/services/ServiceList";
import { cxDesign } from "../../data/cxDesign";

export default function CxDesign() {
  return (
    <div className="service-page">
      <HeroBanner heroBannerData={cxDesign.heroBannerData} />
      <OurProcess />
      <ServiceList services={cxDesign.cxDesignServices} icon={cxDesign.icon} bg={"bg-dark"}/>
      <ClientLogo />
    </div>
  );
}






























