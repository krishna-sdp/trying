import React from "react";
import ClientLogo from "../../components/ClientLogo";
import HeroBanner from "../../components/services/HeroBanner";
import OurProcess1 from "../../components/services/OurProcess1";
// import OurProcess2 from "../../components/services/OurProcess2";

import ServiceList from "../../components/services/ServiceList";
import TechnologyWeUse from "../../components/services/TechnologyWeUse";
import { techEngiData } from "../../data/techEng";

export default function TechnologyAEngineering() {
  return (
    <div className="service-page">
      <HeroBanner heroBannerData={techEngiData.heroBannerData} />
      <OurProcess1/>

      {/* <OurProcess2/> */}
      <TechnologyWeUse />
      <ServiceList services={techEngiData.cxDesignServices} icon={"/assets/svg/minus-3108.svg"} bg={"bg-white"} />
      <ClientLogo />
    </div>
  );
}
