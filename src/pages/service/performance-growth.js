import React from "react";
import ClientLogo from "../../components/ClientLogo";
import HeroBanner from "../../components/services/HeroBanner";
import OurProcess1 from "../../components/services/OurProcess1";
import ServiceList from "../../components/services/ServiceList";

import { perfGrowthData } from "../../data/perfGrowthData";


export default function PerformanceGrowth() {
  return (
    <div className="service-page">
      <HeroBanner heroBannerData={perfGrowthData.heroBannerData} />
      <OurProcess1/>
      <ServiceList services={perfGrowthData.cxDesignServices} icon={"/assets/svg/minus-white.svg"} bg={"bg-dark"} />
      <ClientLogo />
    </div>
  );
}
