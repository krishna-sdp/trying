import React from 'react'
import ClientLogo from "../../components/ClientLogo";
import HeroBanner from "../../components/services/HeroBanner";
import OurProcess1 from '../../components/services/OurProcess1';
import ServiceList from '../../components/services/ServiceList';

import { BrandCamData } from '../../data/BrandCamData';
export default function BrandCampaignContent() {
    return (
        <div className="service-page">
        <HeroBanner heroBannerData={BrandCamData.heroBannerData} />
        <OurProcess1/>
        <ServiceList services={BrandCamData.cxDesignServices} icon={"/assets/svg/minus-white.svg"}  bg={"bg-dark"} />
        <ClientLogo />
      </div>
    )
}
