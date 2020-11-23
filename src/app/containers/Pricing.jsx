import React from 'react';
import WorkSampleSection from "../components/home/WorkSampleSection";
import PricingSection from '../components/pricing/PricingSection';
import PricingCard from '../components/shared/cards/PricingCard';
import WhyUsSection from "../components/whyUs/WhyUsSection";

const Pricing = () => {
  return (
    <React.Fragment>
      <PricingSection />
      <WorkSampleSection />
      <WhyUsSection />
    </React.Fragment>
  );
}

export default Pricing;