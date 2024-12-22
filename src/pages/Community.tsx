import React from "react";
import Footer from "@/components/footer/Footer";
import SafeHaven from "@/components/community/SafeHaven";
import FirstStep from "@/components/community/FirstStep";
import CallToAction from "@/components/about/CallToAction";
import CommunityHero from "@/components/community/CommunityHero";
import SmoothScrolling from "@/components/animation/SmoothScrolling";
import ScrollToTop from "@/components/button/ScrollToTop";

const Community: React.FC = () => {
  return (
    <SmoothScrolling>
      <ScrollToTop />
      <div className="mx-auto overflow-x-hidden">
        <CommunityHero />
        <SafeHaven />
        <FirstStep />
        <CallToAction />
        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default Community;
